# Cambio a dominio custom — Checklist

Cuando salga el dominio real (ej. `shomer.com.ar`), seguir estos pasos.

---

## 1. En Vercel (lo principal)

**Settings → Environment Variables → Add new**

```
Name:        NEXT_PUBLIC_SITE_URL
Value:       https://shomer.com.ar     ← sin barra al final, con https
Environments: Production, Preview, Development
```

Después: **Deployments → Redeploy** (o pushear cualquier commit).

Con esto se actualizan automáticamente:

- `robots.txt` → apunta al sitemap del dominio nuevo
- `sitemap.xml` → todas las URLs internas con el host nuevo
- Metadata Open Graph / Twitter (compartir en redes con preview correcto)
- JSON-LD `LocalBusiness` (SEO estructurado de Google)
- Tag canonical y `og:url`

## 2. Settings → Domains en Vercel

Agregar el dominio y seguir las instrucciones de DNS (registros A/CNAME).
Vercel emite el certificado TLS automáticamente.

---

## ⚠️ Lo que NO se actualiza solo (hay que editar a mano)

Los textos legales de la política de privacidad mencionan el dominio
*literalmente* dentro del contenido visible al usuario, en los 7 idiomas:

**Archivo:** [src/translations/privacidad.ts](src/translations/privacidad.ts)

Buscar y reemplazar (cuidado: aparece en `es`, `en`, `pt`, `it`, `de`, `ru`, `he`):

```
shomer-web.vercel.app  →  shomer.com.ar
```

Son ~7 ocurrencias, una por idioma. Es texto legal del que dice
"Shomer es responsable del tratamiento de los datos recolectados a través
del sitio web shomer-web.vercel.app". Hay que actualizarlo para que
quede coherente con el dominio real.

---

## 3. (Opcional pero recomendado) Actualizar el CSP

En [next.config.ts](next.config.ts) la `Content-Security-Policy` no incluye
referencias al dominio (solo a terceros: YouTube, Spline, etc.), así que NO
hay que tocarla.

## 4. (Opcional) Redirect 301 de Vercel

Si querés que `shomer-web.vercel.app` redirija al dominio nuevo (mejor para SEO):
**Settings → Domains → shomer-web.vercel.app → Redirect to → shomer.com.ar**

---

## Verificación post-deploy

1. Abrir `https://shomer.com.ar/robots.txt` → debe mostrar `Sitemap: https://shomer.com.ar/sitemap.xml`
2. Abrir `https://shomer.com.ar/sitemap.xml` → todas las URLs deben empezar con `https://shomer.com.ar`
3. Compartir el link en WhatsApp / Twitter → la preview debe usar el dominio nuevo
4. View source de la home → buscar `LocalBusiness` JSON-LD → `"url": "https://shomer.com.ar"`
5. Ver `/privacidad` → confirmar que el texto legal ya menciona el dominio nuevo
