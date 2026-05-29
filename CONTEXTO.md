# Contexto — Implementación de la Auditoría Shomer

Referencia: `Auditoria Pagina.txt`
Fecha: 2026-05-29
Branch: `main` (sin commit aún; cambios en working tree)

---

## ✅ Implementado en esta sesión

### 1. Loading placeholders eliminados (audit §1)
**Archivo:** `src/app/page.tsx`, `src/app/globals.css`

Se eliminaron los textos literales que se filtraban al render/SEO:
- `"Iniciando Red Georredundante..."`
- `"Cargando Centro de Control CCTV..."`
- `"Cargando Modelador de Presupuesto..."`
- `"Cargando Reproductor de Audio..."`

Reemplazo: componente `SkeletonFallback` con shimmer animado (sin texto), aplicado a `MapFallback`, `SandboxFallback`, `ConfiguratorFallback`, `PodcastFallback`. Keyframe `@keyframes shimmer` agregado a `globals.css`.

### 2. Toggle FOTO / 3D INTERACTIVO → íconos (audit §2)
**Archivo:** `src/components/Vision.tsx`

Los botones `FOTO` y `3D INTERACTIVO` (uppercase decorativo, anti-Tesla) ahora son botones-ícono SVG monolínea (cámara + cubo isométrico). Las strings de cada idioma (`photoBtn`/`view3dBtn`) se renombraron a `photoLabel`/`view3dLabel` y se usan como `aria-label` + `title` para accesibilidad. Cubre 7 locales (es/en/he/de/ru/pt/it).

### 3. Emojis 📱🔐📍👁️ en Vision Pro → SVG (audit §2)
**Archivo:** `src/components/Vision.tsx`

Set propio de íconos:
- `qr` (QR code) → "Sin Apps. Sin Descargas."
- `token` (candado) → "Token JWT de un solo uso"
- `geofence` (pin GPS) → "Geocerca GPS inteligente"
- `verify` (ojo) → "Verificación visual HD"

Componente `<FeatureIcon name={...} />` con stroke 1.5px, 18×18. La feature data ahora usa el key (`"qr"`, etc.) en lugar del emoji.

### 4. Emojis 📞 💼 👥 ✉️ en Contact + Soporte → SVG (audit §2)
**Archivos:** `src/components/Contact.tsx`, `src/components/SoporteForm.tsx`

- Contact.tsx: 📞 → teléfono SVG, 💼 → maletín SVG, 👥 → usuarios SVG.
- SoporteForm.tsx: 📞 → teléfono SVG, ✉️ → `Mail` de lucide-react.

Todos heredan `text-brand-blue` desde el contenedor.

### 5. Club Shomer: "Próximamente" → "Activo" (audit §"Mejorable")
**Archivo:** `src/translations/index.ts`

Cambiado en los 7 locales:
| Locale | Antes | Después |
|---|---|---|
| es | "Próximamente" | "Activo" |
| en | "Coming Soon" | "Now Active" |
| he | "בקרוב" | "פעיל" |
| de | "Demnächst" | "Aktiv" |
| ru | "Скоро" | "Активно" |
| pt | "Em breve" | "Ativo" |
| it | "Prossimamente" | "Attivo" |

**Razón (per usuario):** la página actual no es aún la principal, pero cuando lo sea el Club ya estará activo, así que se muestra como activo desde ya.

### 6. "+ IVA" removido (audit §"Mejorable")
**Archivo:** `src/components/Pricing.tsx`

Se removió el render del `<span>{t.ivaPlus}</span>` al lado del precio. El disclaimer abajo ya aclara "todo incluido". Las strings `ivaPlus: "+ IVA" / "+ VAT" / ...` siguen en la data por compat de tipo (no se renderizan).

### 7. `sizes` correcto en imágenes (audit §6)
**Archivos:** `src/components/Footer.tsx`, `src/components/SoporteHeader.tsx`, `src/components/SocialProof.tsx`

- Logo `SHOMER.png` en Footer y SoporteHeader → `sizes="120px"` / `"140px"` (evita servir 3840px).
- Logos de clientes (SocialProof grid) → `sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 160px"`.

Logo de Navbar ya tenía `sizes="120px"` previamente.

### 8. InfrastructureMap loading text → skeleton (audit §1)
**Archivo:** `src/components/InfrastructureMap.tsx`

El estado `!mapLoaded` mostraba `"Cargando cartografía..."` literal. Reemplazado por skeleton con shimmer (sin texto). Las strings `loadingMap` en cada locale quedan en data por compat (no renderizadas).

### Verificación
- `npx tsc --noEmit` → sin errores.
- `npx next build` → build limpio, 19 rutas generadas.

---

## ⏳ Pendiente (auditoría — para próxima sesión)

### 🔴 Crítico

#### A. Sección WhatsApp "Interacciones reales con la Central" (audit §4)
**Archivo afectado:** `src/components/SocialProof.tsx`

**Importante:** los commits recientes (`0e1df37 feat: add real whatsapp transcripts` y `9f9e019 fix: adjust typo in chat2, rename soto chats…`) son **previos a la auditoría**. La auditoría sigue marcando esta sección como rota.

**Problema (per audit):** mensajes duplicados, desordenados, descontextualizados. "Eleutelio Freire (Mensaje 1)" y "(Mensaje 2)" tienen prácticamente el mismo texto. Idea brillante, ejecución bug.

**Acción:** rehacer como mockup de WhatsApp visualmente correcto — avatares, burbujas verde/blanca, timestamps coherentes, carrusel limpio con 3-4 conversaciones **completas** (no fragmentos). Revisar la data en `SocialProof.tsx` (líneas ~120-285 para es/en) y la estructura del componente.

#### B. Video hero (audit §5)
**Archivo:** `src/components/Hero.tsx`

Actualmente: `landing.jpeg` estática.
Acción: video silencioso autoplay loop, 8-10s, del tótem operando / alguien escaneando QR / cámara reaccionando. Requiere material grabado.

#### C. Dominio vercel.app → shomer.com.ar (audit §3)
No es cambio de código. Configuración DNS / Vercel domain settings. Ver `DOMINIO_CUSTOM.md`.

### 🟡 Mejorable (no urgente)

#### D. SEO técnico (audit §"Tech / SEO")
- **hreflang** para los 7 idiomas en `<head>` (Next: `metadata.alternates.languages` en `layout.tsx`).
- **JSON-LD** structured data: `LocalBusiness`, `Product` (por plan), `FAQPage`, `BreadcrumbList`.
- **OG image dinámica** con `@vercel/og` (actualmente única para toda la app).
- **Lighthouse mobile audit** — sospecha de LCP > 3s, hidratación pesada.

#### E. Reducir UPPERCASE decorativo (audit §"Copy")
Buscar y revisar:
- `"CENTRAL DE MONITOREO 24/7 ACTIVA"` (translations, MonitoringSandbox).
- `"EN SITIO"`, `"CATÁLOGO ESTUDIO"`.
- Mantener uppercase solo en hero y display-type. Resto en sentence-case.

#### F. Copy "evolución del portero eléctrico" (audit §"Copy")
**Archivo:** `src/components/Vision.tsx` (campo `title` por locale).
Sugerencias del audit: *"El acceso, reinventado."* / *"Tu edificio ya no necesita llaves."* / *"Seguridad sin fricción."*

#### G. Cards de problemas con visual (audit §"Visual / UX")
**Archivo:** `src/components/Problem.tsx`
Agregar foto/mockup pequeño arriba de cada card ("Porteros viejos" → portero industrial 90s, "Costos ocultos" → ticket, "Inseguridad real" → WhatsApp con QR compartido).

### 🆕 Nuevo (audit §"Lo que falta")

#### H. Página Tecnología + compliance Ley 25.326
Arquitectura: WebRTC, JWT, encriptación at-rest/in-transit, retention policy, compliance PDP Argentina. Desbloquea ventas corporativas. Sugerido como `/tecnologia`.

#### I. Casos de éxito con métricas
Ej. "Milenium Tower: -73% incidentes en 6 meses". Landing por caso (`/casos/[slug]`).

#### J. Calculadora ROI
Lead magnet interactivo: input unidades funcionales → output ahorro vs sistema tradicional. Sugerido cerca del CPQConfigurator.

#### K. Mapa de cobertura
Visual mostrando zonas de operación (CABA, GBA, La Plata, etc.). Cierra objeción "¿llegan a mi zona?".

#### L. Otros del audit
- Sección Prensa (logos La Nación, Clarín, etc.) — requiere apariciones reales.
- Página Status estilo `status.atlassian.com`.
- Tipografía custom (Geist/Söhne/Aeonik) — actualmente Inter/Poppins probable.
- Newsletter / lead magnet PDF.
- Pixel Meta + GTM + LinkedIn Insight.
- Timeline visual de onboarding (cotización → relevamiento → instalación).

---

## Archivos modificados en esta sesión

```
src/app/globals.css
src/app/page.tsx
src/components/Vision.tsx
src/components/Contact.tsx
src/components/Pricing.tsx
src/components/InfrastructureMap.tsx
src/components/SocialProof.tsx
src/components/Footer.tsx
src/components/SoporteHeader.tsx
src/components/SoporteForm.tsx
src/translations/index.ts
```

Sin commit todavía. Working tree pendiente de revisión.
