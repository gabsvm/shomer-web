import { NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { validateAndExtract, EMAIL_REGEX } from "@/lib/validateForm";

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

  const key = process.env.WEB3FORMS_KEY?.trim();
  if (!key) {
    return NextResponse.json({ success: false, message: "Server not configured" }, { status: 500 });
  }

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
  const dateStr =
    now.toLocaleDateString("es-AR") +
    " " +
    now.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }) +
    " hs";

  const payload = new FormData();
  payload.append("access_key", key);
  payload.append("subject", `SOPORTE PORTEROS (${lang}): ${v.values.nombre} - ${v.values.consorcio}`);
  payload.append("from_name", "Shomer Soporte App Store");
  payload.append("replyto", v.values.email);
  payload.append("Fecha del Ticket", dateStr);
  payload.append("Idioma del Usuario", lang);
  payload.append("Nombre del Afectado", v.values.nombre);
  payload.append("Consorcio / Edificio", v.values.consorcio);
  payload.append("Mail de contacto", v.values.email);
  payload.append("Dispositivo Móvil", v.values.dispositivo);
  payload.append("Versión / Navegador", v.values.version || "No especificado");
  payload.append("Descripción del Problema", v.values.descripcion);

  try {
    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });
    const text = await upstream.text();
    let data: { success?: boolean; message?: string } = {};
    try {
      data = JSON.parse(text);
    } catch {
      // Non-JSON response from upstream
    }
    if (!upstream.ok || !data.success) {
      console.error("[api/soporte] Web3Forms error", upstream.status, text.slice(0, 500));
      return NextResponse.json(
        { success: false, message: data.message || "Upstream error" },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[api/soporte] fetch failed", err);
    return NextResponse.json({ success: false, message: "Upstream error" }, { status: 502 });
  }
}
