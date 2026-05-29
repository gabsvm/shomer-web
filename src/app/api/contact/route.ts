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

  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return NextResponse.json({ success: false, message: "Server not configured" }, { status: 500 });
  }

  const body = await req.formData();

  // Honeypot: bots fill hidden fields
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
  const dateStr =
    now.toLocaleDateString("es-AR") +
    " " +
    now.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }) +
    " hs";

  const payload = new FormData();
  payload.append("access_key", key);
  payload.append("subject", `Nueva consulta: ${v.values.nombre} (${v.values.tipo_espacio})`);
  payload.append("from_name", "Shomer Contact");
  payload.append("replyto", v.values.email);
  payload.append("Fecha de la consulta", dateStr);
  payload.append("Nombre a dirigirse para la consulta", v.values.nombre);
  payload.append("Numero a llamar", v.values.telefono);
  payload.append("Mail", v.values.email);
  payload.append("Servicio para", v.values.tipo_espacio);
  payload.append("Consulta", v.values.consulta);

  try {
    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });
    const data = await upstream.json();
    return NextResponse.json(
      { success: !!data.success },
      { status: upstream.ok ? 200 : 502 },
    );
  } catch {
    return NextResponse.json({ success: false, message: "Upstream error" }, { status: 502 });
  }
}
