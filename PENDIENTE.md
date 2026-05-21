# PENDIENTE — Shomer Web

> Última actualización: Mayo 2026
> Leer junto con SHOMER_CONTEXT.md antes de cada sesión.

---

## 🔴 BLOQUEADO — esperando material tuyo

### Quiénes Somos (`/quienes-somos`)
**Necesito que me des:**
- Historia de la empresa (año de fundación, cómo nació la idea)
- Quiénes son los fundadores / equipo visible (nombre, rol, foto opcional)
- Misión en 2-3 líneas con tu voz
- Algún dato de credibilidad (años en el rubro, cantidad de instalaciones, provincias donde operan)

**Por qué importa:** El administrador que llega recomendado entra al sitio a validar quién está detrás. Si Shomer es anónima, pierde confianza justo antes de cotizar.

---

### Tótem en 3D interactivo
**Opciones — elegí una o combiná:**

| Servicio | Costo | Cómo usarlo |
|---|---|---|
| **Luma AI** (lumalabs.ai) | Gratis | Filmás un video caminando 360° alrededor del tótem → sube automático → genera modelo 3D NeRF embebible |
| **Spline.design** | Gratis | Editor 3D web. Si tenés el modelo en 3D (OBJ/GLTF) lo importás, lo publicás y se embebe como iframe en Next.js |
| **Krea AI / Runway ML** | Pago | Foto del tótem → video cinematográfico de 5-8 segundos de alta calidad |
| **Blender** | Gratis | Si tienen el archivo de diseño original del tótem, se exporta a GLTF y se monta con Three.js / React Three Fiber |

**Implementación en Next.js (lista para pegar):**
```jsx
// Opción Spline (más simple, 0 código extra)
import Spline from '@splinetool/react-spline'
<Spline scene="https://prod.spline.design/[SCENE_ID]/scene.splinecode" />

// Opción Three.js con GLTF (más control)
// requiere: npm install @react-three/fiber @react-three/drei three
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'
```

**Lo mismo aplica para el Vision Pro** — si tienen el modelo 3D del portero, lo montamos igual.

**Necesito que me des:** video 360° del tótem, o el archivo de modelo 3D (OBJ / GLTF / STL), o acceso al Spline scene si ya existe.

---

### Habilitación ministerial
**Estado:** footer muestra CUIT 30-71553704-0 + Disp. N° 49/DGSPCB/22 (CABA, Ley 5688).
**⚠️ Atención:** la Disposición 49/DGSPCB/22 venció el 19/02/2024 (2 años desde 19/02/2022).
Si renovaron la habilitación (lo más probable), compartir el documento de renovación para actualizar el número en el footer al vigente.
El "Legajo N° 1924" que aparecía antes era una alucinación del AI Overview de Google — no existía en el documento real.

---

### Google Analytics / GA4
**Necesito:** el ID de medición de GA4 (formato `G-XXXXXXXXXX`) o el container ID de GTM (`GTM-XXXXXXX`).
**Lo tenés en:** Google Analytics → Admin → Flujos de datos → ID de medición.
**Tiempo de implementación:** 10 minutos una vez que tengo el ID.

---

### Web3Forms (formulario de contacto)
**Estado:** el código está listo y conectado.
**Pendiente:** activar en Vercel.
**Pasos:**
1. Ir a web3forms.com → ingresar gabsvm@gmail.com → te mandan el access key
2. Vercel → proyecto shomer-web → Settings → Environment Variables
3. Agregar: `NEXT_PUBLIC_WEB3FORMS_KEY` = [el key recibido]
4. Redeploy automático

---

## 🟠 LISTO PARA IMPLEMENTAR — no necesita material tuyo

### Páginas por segmento (SEO crítico)
Crear `/edificios`, `/empresas`, `/countries`, `/hoteles` con:
- URL propia indexable por Google
- Contenido específico del dolor de ese vertical
- Schema `Service` en JSON-LD
- CTA a cotizar

Sin estas páginas es imposible rankear para búsquedas como "control de acceso edificios Buenos Aires".
**Tiempo estimado:** 3-4 horas.

### Scroll storytelling (nivel Tesla)
Framer Motion ya está instalado. Con `useScroll` + `useTransform`:
- El tótem o Vision Pro aparecen en el hero y "flotan" mientras el usuario baja
- Secciones que se revelan progresivamente con el scroll
**Tiempo estimado:** 2-3 horas.

### Blog (SEO largo plazo)
Estructura técnica lista en 1 hora (MDX o CMS headless). El contenido lo escriben ustedes o lo generamos juntos. Mínimo 2 artículos/mes para impacto SEO real.
**Artículos sugeridos para arrancar:**
- "¿Qué es el control de acceso biométrico y por qué tu edificio lo necesita?"
- "Portero eléctrico vs sistema inteligente: la comparativa real"
- "Cómo gestionar el acceso de visitantes sin exponer el número del consorcio"

### Migración del dominio `shomer.com.ar`
Actualmente el sitio vive en `shomer-web.vercel.app`. Una vez que migren el dominio hay que actualizar:
- `SITE_URL` en `src/app/layout.tsx`
- `og:url` automáticamente se actualiza
- `sitemap.xml` automáticamente se actualiza
- `robots.txt` automáticamente se actualiza
**Tiempo:** 15 minutos de código + propagación de DNS (hasta 48hs).

---

## 🟡 NICE TO HAVE

- Integración Google Reviews en vivo (widget o API de Places)
- Página de confirmación post-cotización con pixel de conversión
- Video propio hosteado en Vercel/Cloudflare en lugar de YouTube embed
- Dark/light mode (probablemente no aplica para este posicionamiento)

---

## ✅ COMPLETADO (referencia)

- Meta tags completos (OG, Twitter card summary_large_image, robots) ✅
- OG image: vision-pro.png (landscape, sin watermark) ✅
- Schema LocalBusiness + FAQPage JSON-LD ✅
- Sitemap.xml + robots.txt automáticos ✅
- Política de privacidad /privacidad (Ley 25.326) ✅
- Stats SSR fix (Google ve valores reales) ✅
- WhatsApp flotante ✅
- FAQ con 6 preguntas oficiales y respuestas técnicas correctas ✅
- 4 reviews reales de Google Maps ✅
- Logos de 4 clientes (WorkingDepot, +Metros, Grupo Vientos, Agudat Dodim) ✅
- Countries como 4to segmento ✅
- Navbar fix (#reviews → #testimonios) ✅
- Video click-to-play (iframe no carga hasta interacción) ✅
- Vision Pro showcase full-width sin watermark ✅
- Formulario conectado a Web3Forms (pendiente env var en Vercel) ✅
- Habilitación CUIT + Legajo en footer (pendiente verificación) ✅
- CUIT 30-71553704-0 en footer ✅
