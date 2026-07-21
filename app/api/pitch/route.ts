import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/content";

type PitchPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  website?: string;
  focus?: string;
  stage?: string;
  problem?: string;
  deckUrl?: string;
  deckFilename?: string;
};

const requiredFields: Array<keyof PitchPayload> = ["name", "email", "company", "focus", "stage", "problem", "deckUrl"];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseRecipients(value: string | undefined) {
  const recipients = (value || siteConfig.pitchEmail)
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return recipients.filter(isEmail);
}

function submissionText(payload: Required<Pick<PitchPayload, "name" | "email" | "company" | "focus" | "stage" | "problem" | "deckUrl">> & PitchPayload) {
  return [
    "New ARC Ventures pitch submission",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    `Company: ${payload.company}`,
    payload.website ? `Website: ${payload.website}` : null,
    `Focus area: ${payload.focus}`,
    `Stage: ${payload.stage}`,
    "",
    "Problem",
    payload.problem,
    "",
    `Pitch deck: ${payload.deckUrl}`,
    payload.deckFilename ? `Deck filename: ${payload.deckFilename}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PitchPayload;
    const payload = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      company: clean(body.company),
      website: clean(body.website),
      focus: clean(body.focus),
      stage: clean(body.stage),
      problem: clean(body.problem),
      deckUrl: clean(body.deckUrl),
      deckFilename: clean(body.deckFilename),
    };

    const missingField = requiredFields.find((field) => !payload[field]);

    if (missingField) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!isEmail(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY for pitch form submission.");
      return NextResponse.json({ error: "Pitch form email is not configured yet." }, { status: 503 });
    }

    const to = parseRecipients(process.env.PITCH_FORM_TO_EMAIL);
    const from = process.env.PITCH_FORM_FROM_EMAIL || "ARC Ventures <onboarding@resend.dev>";

    if (to.length === 0) {
      console.error("No valid PITCH_FORM_TO_EMAIL recipients configured.");
      return NextResponse.json({ error: "Pitch form email is not configured yet." }, { status: 503 });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: payload.email,
        subject: `New pitch: ${payload.company}`,
        text: submissionText(payload),
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Resend pitch notification failed", errorText);
      return NextResponse.json({ error: "Could not send pitch notification." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Pitch form submission failed", error);
    return NextResponse.json({ error: "Could not submit pitch." }, { status: 500 });
  }
}
