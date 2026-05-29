function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 14px;background:#0a0a0a;color:#888;font-family:monospace;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #1a1a1a;width:200px;vertical-align:top;">${escape(label)}</td>
      <td style="padding:8px 14px;background:#0f0f0f;color:#fff;font-family:Arial,sans-serif;font-size:14px;border-bottom:1px solid #1a1a1a;">${escape(value).replace(/\n/g, "<br>")}</td>
    </tr>`;
}

function wrap(title: string, rows: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#000;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#000;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0a0a0a;border:1px solid #1a1a1a;border-radius:6px;overflow:hidden;">
        <tr><td style="padding:20px 24px;background:#0a0a0a;border-bottom:2px solid #00BFFF;">
          <div style="color:#00BFFF;font-family:monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">Shomer Security</div>
          <div style="color:#fff;font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-top:6px;">${escape(title)}</div>
        </td></tr>
        <tr><td>
          <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        </td></tr>
        <tr><td style="padding:14px 24px;background:#080808;color:#666;font-family:monospace;font-size:10px;text-align:center;letter-spacing:0.1em;text-transform:uppercase;">
          Mensaje generado automáticamente desde shomer.com.ar
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export interface ContactPayload {
  nombre: string;
  telefono: string;
  email: string;
  tipo_espacio: string;
  tipo_servicio: string;
  consulta: string;
  date: string;
}

export function contactEmail(p: ContactPayload): { subject: string; html: string; text: string } {
  const subject = `Nueva consulta: ${p.nombre} (${p.tipo_servicio} · ${p.tipo_espacio})`;
  const html = wrap(
    "Nueva consulta comercial",
    row("Fecha", p.date) +
      row("Nombre", p.nombre) +
      row("Teléfono", p.telefono) +
      row("Email", p.email) +
      row("Servicio / producto", p.tipo_servicio) +
      row("Tipo de espacio", p.tipo_espacio) +
      row("Consulta", p.consulta),
  );
  const text = `Nueva consulta comercial\n\nFecha: ${p.date}\nNombre: ${p.nombre}\nTeléfono: ${p.telefono}\nEmail: ${p.email}\nServicio / producto: ${p.tipo_servicio}\nTipo de espacio: ${p.tipo_espacio}\n\nConsulta:\n${p.consulta}`;
  return { subject, html, text };
}

export interface SoportePayload {
  nombre: string;
  email: string;
  consorcio: string;
  dispositivo: string;
  version: string;
  descripcion: string;
  language: string;
  date: string;
}

export function soporteEmail(p: SoportePayload): { subject: string; html: string; text: string } {
  const subject = `SOPORTE PORTEROS (${p.language}): ${p.nombre} - ${p.consorcio}`;
  const html = wrap(
    "Nuevo ticket de soporte",
    row("Fecha del ticket", p.date) +
      row("Idioma del usuario", p.language) +
      row("Nombre del afectado", p.nombre) +
      row("Consorcio / edificio", p.consorcio) +
      row("Mail de contacto", p.email) +
      row("Dispositivo móvil", p.dispositivo) +
      row("Versión / navegador", p.version || "No especificado") +
      row("Descripción del problema", p.descripcion),
  );
  const text = `Nuevo ticket de soporte\n\nFecha: ${p.date}\nIdioma: ${p.language}\nNombre: ${p.nombre}\nConsorcio: ${p.consorcio}\nMail: ${p.email}\nDispositivo: ${p.dispositivo}\nVersión: ${p.version || "No especificado"}\n\nDescripción:\n${p.descripcion}`;
  return { subject, html, text };
}
