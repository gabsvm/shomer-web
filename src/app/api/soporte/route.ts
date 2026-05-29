import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { validateAndExtract, EMAIL_REGEX } from "@/lib/validateForm";
import { soporteEmail } from "@/lib/emailTemplates";

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

  const from = process.env.RESEND_FROM?.trim() || "Shomer Soporte <onboarding@resend.dev>";
  const to = process.env.SOPORTE_TO_EMAIL?.trim() || "soporte@shomer.com.ar";

  const body = await req.formData();

  if (typeof body.get("website") === "string" && (body.get("website") as string).length > 0) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const v = validateAndExtract(body, [
    { name: "nombre", required: true, maxLength: 120 },
    { name: "email", required: true, maxLength: 200, pattern: EMAIL_REGEX },
    { name: "consorcio", required: true, maxLength: 200 },
    { name: "dispositivo", required: true, maxLength: 80 },
    { name: "version", maxLength: 120 },
    { name: "descripcion", required: true, maxLength: 4000 },
    { name: "language", maxLength: 8, pattern: /^[a-z]{2}$/ },
  ]);
  if (!v.ok) return NextResponse.json({ success: false, message: v.error }, { status: 400 });

  const lang = (v.values.language || "es").toUpperCase();

  const now = new Date();
  const date =
    now.toLocaleDateString("es-AR") +
    " " +
    now.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }) +
    " hs";

  const mail = soporteEmail({
    nombre: v.values.nombre,
    email: v.values.email,
    consorcio: v.values.consorcio,
    dispositivo: v.values.dispositivo,
    version: v.values.version,
    descripcion: v.values.descripcion,
    language: lang,
    date,
  });

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
      console.error("[api/soporte] Resend error", result.error);
      return NextResponse.json(
        { success: false, message: result.error.message || "Send failed" },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true, id: result.data?.id }, { status: 200 });
  } catch (err) {
    console.error("[api/soporte] send failed", err);
    return NextResponse.json({ success: false, message: "Send failed" }, { status: 502 });
  }
}
