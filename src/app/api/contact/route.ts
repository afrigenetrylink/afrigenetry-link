import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = cleanText(data.name, 100);
  const email = cleanText(data.email, 254);
  const topic = cleanText(data.topic, 120) || "General enquiry";
  const message = cleanText(data.message, 5000);
  const website = cleanText(data.website, 300);

  // A hidden honeypot field catches simple automated submissions.
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Please enter your name, a valid email address, and a message of at least 10 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form is not configured: required email environment variables are missing.");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable. Please email info@afrigenetrylink.org instead." },
      { status: 503 },
    );
  }

  const text = [
    "New message from the AfriGenetry Link website contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topic}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `AGL website enquiry: ${topic}`,
        text,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("Resend rejected contact email:", response.status, errorText.slice(0, 500));
      return NextResponse.json(
        { error: "We could not send your message right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact email request failed:", error);
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
