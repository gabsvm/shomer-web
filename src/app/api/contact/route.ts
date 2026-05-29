import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { validateAndExtract, EMAIL_REGEX } from "@/lib/validateForm";
import { contactEmail } from "@/lib/emailTemplates";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { success: false, message: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json({ success: false, message: "Server not configured" }, { status: 500 });
  }

  const from = process.env.RESEND_FROM?.trim() || "Shomer Contact <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL?.trim() || "info@shomer.com.ar";

  const body = await req.formData();

  if (typeof body.get("website") === "string" && (body.get("website") as string).length > 0) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const v = validateAndExtract(body, [
    { name: "nombre", required: true, maxLength: 120 },
    { name: "telefono", required: true, maxLength: 40, pattern: /^[\d\s+\-().]{6,40}$/ },
    { name: "email", required: true, maxLength: 200, pattern: EMAIL_REGEX },
    { name: "tipo_espacio", required: true, maxLength: 80 },
    { name: "consulta", required: true, maxLength: 4000 },
  ]);
  if (!v.ok) return NextResponse.json({ success: false, message: v.error }, { status: 400 });

  const now = new Date();
  const date =
    now.toLocaleDateString("es-AR") +
    " " +
    now.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }) +
    " hs";

  const mail = contactEmail({ ...v.values, date } as Parameters<typeof contactEmail>[0]);

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: v.values.email,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });
    if (result.error) {
      console.error("[api/contact] Resend error", result.error);
      return NextResponse.json(
        { success: false, message: result.error.message || "Send failed" },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true, id: result.data?.id }, { status: 200 });
  } catch (err) {
    console.error("[api/contact] send failed", err);
    return NextResponse.json({ success: false, message: "Send failed" }, { status: 502 });
  }
}
