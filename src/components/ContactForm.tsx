"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

type SubmissionState = "idle" | "sending" | "success" | "error";

const fieldStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  marginTop: 8,
  padding: "13px 14px",
  border: "1px solid #d9d0c1",
  borderRadius: 3,
  background: "#fffdf8",
  color: "#251813",
  font: "inherit",
};

const labelStyle = {
  display: "block",
  color: "#38251f",
  fontSize: 14,
  fontWeight: 700 as const,
};

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      topic: String(formData.get("topic") ?? "General enquiry"),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your message. Please try again.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your message has been sent to the AGL team.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 22 }}>
      <div>
        <label htmlFor="contact-name" style={labelStyle}>Full name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required style={fieldStyle} />
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Email address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required style={fieldStyle} />
      </div>

      <div>
        <label htmlFor="contact-topic" style={labelStyle}>What would you like to discuss?</label>
        <select id="contact-topic" name="topic" defaultValue="General enquiry" style={fieldStyle}>
          <option>General enquiry</option>
          <option>Community programmes and events</option>
          <option>Partnerships and collaboration</option>
          <option>Volunteering and getting involved</option>
          <option>Heritage, ancestry and family history</option>
          <option>Genetic health education</option>
          <option>Privacy, consent and DNA data</option>
          <option>Media and communications</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Your message</label>
        <textarea id="contact-message" name="message" rows={6} maxLength={5000} required style={{ ...fieldStyle, resize: "vertical", minHeight: 150 }} />
        <p style={{ margin: "8px 0 0", color: "#6b625b", fontSize: 12, lineHeight: 1.6 }}>
          Please do not include genetic test results, medical records, or other sensitive health information in this form.
        </p>
      </div>

      <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button
          className="button button-gold"
          type="submit"
          disabled={status === "sending"}
          style={{ minHeight: 48, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "13px 22px", border: 0, cursor: status === "sending" ? "wait" : "pointer" }}
        >
          {status === "sending" ? <><LoaderCircle size={18} className="animate-spin" aria-hidden="true" /> Sending…</> : <>Send message <ArrowRight size={18} aria-hidden="true" /></>}
        </button>
      </div>

      {message && (
        <p role="status" aria-live="polite" style={{ display: "flex", alignItems: "flex-start", gap: 10, margin: 0, padding: 14, border: `1px solid ${status === "success" ? "#a8c7a1" : "#d8aaa0"}`, background: status === "success" ? "#f1f7ee" : "#fff3f0", color: "#38251f", lineHeight: 1.6 }}>
          {status === "success" && <CheckCircle2 size={20} aria-hidden="true" />}
          <span>{message}</span>
        </p>
      )}
    </form>
  );
}
