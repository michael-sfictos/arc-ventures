import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

const MAX_DECK_SIZE = 25 * 1024 * 1024;
const ALLOWED_DECK_TYPES = [
  "application/pdf",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as HandleUploadBody;

    const response = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        const payload = clientPayload ? JSON.parse(clientPayload) : {};
        const filename = typeof payload.filename === "string" ? payload.filename : "pitch-deck";

        return {
          allowedContentTypes: ALLOWED_DECK_TYPES,
          maximumSizeInBytes: MAX_DECK_SIZE,
          pathname: `pitch-decks/${crypto.randomUUID()}-${filename}`,
          tokenPayload: JSON.stringify({
            submittedAt: new Date().toISOString(),
            filename,
          }),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.info("Pitch deck uploaded", {
          url: blob.url,
          pathname: blob.pathname,
        });
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Pitch deck upload failed", error);
    return NextResponse.json({ error: "Could not upload pitch deck." }, { status: 400 });
  }
}
