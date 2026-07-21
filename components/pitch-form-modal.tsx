"use client";

import { upload } from "@vercel/blob/client";
import { type FormEvent, useEffect, useRef, useState } from "react";

const focusOptions = ["Data", "Real-world assets", "Tokens", "Energy", "Real estate", "Retail", "Other"];
const stageOptions = ["Idea", "Prototype", "Pilot", "Early revenue", "Scaling"];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function PitchFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const deck = formData.get("deck");

    if (!(deck instanceof File) || deck.size === 0) {
      setStatus("error");
      setMessage("Please attach a pitch deck.");
      return;
    }

    try {
      const rawWebsite = String(formData.get("website") || "").trim();
      const website = rawWebsite
        ? rawWebsite.match(/^https?:\/\//i)
          ? rawWebsite
          : `https://${rawWebsite.replace(/^\/+/, "")}`
        : "";

      const blob = await upload(`pitch-decks/${crypto.randomUUID()}-${deck.name}`, deck, {
        access: "public",
        handleUploadUrl: "/api/pitch-deck/upload",
        clientPayload: JSON.stringify({ filename: deck.name }),
      });

      const response = await fetch("/api/pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          website,
          focus: formData.get("focus"),
          stage: formData.get("stage"),
          problem: formData.get("problem"),
          deckUrl: blob.url,
          deckFilename: deck.name,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Could not submit pitch.");
      }

      setStatus("success");
      setMessage("Pitch received. We will review it and come back if there is a fit.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not submit pitch.");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setStatus("idle");
          setMessage("");
        }}
        className="mt-8 inline-flex bg-[#111111] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] !text-white transition-colors hover:bg-secondary hover:!text-[#111111]"
      >
        Submit a pitch
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/72 px-4 py-8 backdrop-blur-sm sm:px-8">
          <div
            className="fixed inset-0"
            aria-hidden="true"
            onClick={() => {
              if (status !== "submitting") {
                setIsOpen(false);
              }
            }}
          />
          <div className="relative mx-auto max-w-3xl bg-surface p-6 text-foreground shadow-2xl ring-1 ring-white/14 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow">Pitch ARC</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[0px]">Send the deck.</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/66">
                  Share the company, the problem, and enough context for a first pass. PDF or PowerPoint decks up to 25MB work best.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                disabled={status === "submitting"}
                className="text-xs font-bold uppercase tracking-[0.16em] text-white/54 transition-colors hover:text-secondary disabled:cursor-not-allowed disabled:opacity-45"
              >
                Close
              </button>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                  Name
                  <input
                    name="name"
                    required
                    className="border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors focus:border-primary"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+30 69X XXX XXXX"
                    className="border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/28 focus:border-primary"
                  />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                  Company
                  <input
                    name="company"
                    required
                    className="border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors focus:border-primary"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                Website
                <div className="flex border border-white/12 bg-black/24 transition-colors focus-within:border-primary">
                  <span className="flex shrink-0 items-center border-r border-white/12 px-3 text-sm font-normal normal-case tracking-normal text-white/45">
                    https://
                  </span>
                  <input
                    name="website"
                    type="text"
                    inputMode="url"
                    placeholder="company.com"
                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-white/28"
                  />
                </div>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                  Focus area
                  <select
                    name="focus"
                    required
                    defaultValue=""
                    className="border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>
                      Select focus
                    </option>
                    {focusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                  Stage
                  <select
                    name="stage"
                    required
                    defaultValue=""
                    className="border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>
                      Select stage
                    </option>
                    {stageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                What urgent problem are you changing?
                <textarea
                  name="problem"
                  required
                  rows={4}
                  className="resize-none border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors focus:border-primary"
                />
              </label>

              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                Pitch deck
                <input
                  name="deck"
                  type="file"
                  required
                  accept=".pdf,.ppt,.pptx,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                  className="border border-white/12 bg-black/24 px-3 py-3 text-sm font-normal normal-case tracking-normal text-white file:mr-4 file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-[0.12em] file:text-[#111111]"
                />
              </label>

              <label className="flex items-start gap-3 text-sm leading-6 text-white/64">
                <input type="checkbox" required className="mt-1 accent-secondary" />
                <span>I agree that ARC Ventures may review this submission and contact me about it.</span>
              </label>

              {message ? (
                <p className={`text-sm leading-6 ${status === "success" ? "text-primary" : "text-secondary"}`}>{message}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-between bg-secondary px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] !text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>{status === "submitting" ? "Uploading deck" : "Submit pitch"}</span>
                <span aria-hidden="true">{status === "submitting" ? "..." : "->"}</span>
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
