# SHOMER SECURITY — Contexto completo del proyecto web

> Archivo para uso en Claude Code. Leerlo antes de cualquier intervención en el codebase.
> Última actualización: Mayo 2026

---

## 1. IDENTIDAD DE LA EMPRESA

**Nombre:** Shomer Security SRL
**Significado del nombre:** "Shomer" = guardián en hebreo (שומר)
**Sitio actual:** https://shomer-web.vercel.app (en proceso de migrar a shomer.com.ar)
**Stack:** Next.js 14+ / App Router / Vercel

### Posicionamiento buscado
Shomer quiere ser la **Tesla del sector de seguridad privada argentina**.
- No venden vigilancia. Venden el edificio inteligente del futuro.
- El tótem y el sistema Vision son el "producto" que se muestra primero, igual que Tesla muestra el auto.
- La conversión real viene de ver la marca instalada en edificios (brand awareness físico) o por recomendación directa — el sitio web **valida** la promesa, no la genera desde cero.
- El cliente tipo es el **administrador de consorcio o responsable de seguridad empresarial** que ya escuchó hablar de Shomer y entra al sitio a confirmar que es serio.

### Paleta de marca
- Negro puro `#000000` — fondo principal, como Tesla
- Azul eléctrico / cyan `#00BFFF` — acento principal de marca
- Verde `#00E676` — acento secundario (usado en la línea Vision/producto)
- Blanco `#ffffff` — tipografía principal
- **Nunca mezclar azules** (el sitio anterior tenía 6 variantes de azul distintas — error corregido)

### Tipografía implementada
- Display: **Bebas Neue** — títulos y secciones hero
- Body: **DM Sans** — texto general
- Mono: **Space Mono** — tags, labels técnicos

---

## 2. PRODUCTOS

### 2A — Tótem de Seguridad Virtual
- Kiosco físico instalado en hall de edificio
- Pantalla con operador en vivo 24/7
- Huella dactilar de acceso (con huella de pánico)
- Cámaras HD con visión nocturna
- Alarma disuasoria con voz activada por operador
- Conexión directa protocolo 911
- Monitoreo real, sin automatización — hay persona detrás
- Foto de referencia: totem en lobby de mármol premium

### 2B — Línea VISION (producto nuevo, próximo lanzamiento)
Es la evolución del portero eléctrico. Dispositivo compacto (180x88x28mm) que reemplaza el portero tradicional.

**Modelos y precios (ARS + IVA, abono mensual):**
| Modelo | Precio | Descripción |
|---|---|---|
| VISION | $199.000 | Comunicación bidireccional HD, QR sin app |
| VISION PRO | $390.000 | Todo lo anterior + Face ID + permisos por horario |
| VISION PRO DÚO | $550.000 | Doble equipo ingreso/egreso, control total de flujo |

**Diferenciadores técnicos clave:**
- Token JWT de un solo uso (5 minutos de validez, imposible reutilizar)
- Geocerca GPS: el acceso solo funciona dentro de 40 metros del edificio
- Sin apps para visitantes — el QR abre una web en el navegador
- Comunicación WebRTC privada (sin WhatsApp, sin números expuestos)
- Face ID biométrico en modelo PRO — "la cara es la única credencial"
- No abre puertas automáticamente — el residente decide
- Historial completo de accesos por persona y período

**Todo incluido en el abono:**
- Instalación inicial sin costo
- Mantenimiento completo
- Soporte técnico ilimitado
- Altas y bajas de usuarios
- Actualizaciones de software automáticas
- Gestión de accesos centralizada
- El equipo va en **comodato** (no se compra, se suscribe)

### 2C — Marca secundaria: CyberTech Seguridad
- URL: cybertechseguridad.com
- Marca nueva, sin visibilidad pública todavía
- Misma empresa, diferente posicionamiento (más accesible/precio)
- Tiene bugs críticos pendientes (contenido de template Brikly en HTML oculto, falta meta-description, falta index/follow)
- NO confundir con Shomer — son proyectos independientes

---

## 3. SEGMENTOS DE MERCADO

| Segmento | Dolor principal | Solución Shomer |
|---|---|---|
| **Edificios / Consorcios** | Dependencia del encargado, porteros obsoletos | Vision + Tótem, gestión remota |
| **Empresas** | Fichaje manual, accesos no controlados, costos ocultos | Face ID + historial automático = fichada automática |
| **Countries** | Acceso masivo difícil de controlar, QR copiables | Sistema cerrado, JWT + GPS |
| **Hoteles** | Check-in lento, llaves perdidas, personal difícil de controlar | Check-in facial sin recepción |

---

## 4. CONTACTOS Y DATOS REALES

```
Central de Monitoreo (24/7): +54 11 2364-8511
Área de Ventas: +54 11 7999-4444
Email comercial: info@shomer.com.ar
RRHH: rrhh@shomer.com.ar
Instagram: @shomer_arg (verificar handle)
LinkedIn: presente
```

**WhatsApp de ventas:** `+5491179994444`
Link directo: `https://wa.me/5491179994444?text=Hola%20Shomer%2C%20quiero%20cotizar%20el%20servicio`

---

## 5. CLIENTES Y SOCIAL PROOF

### Logos de clientes confirmados
- **Grupo Vientos**
- **+Metros Creadores de Espacios**

### Métricas reales
- +20 años de experiencia
- +15.000 usuarios protegidos

### Reviews reales (de Google)
- Magalyyy Antunez — 5 estrellas — hace 1 año — "Excelente servicio, nada comparado con la seguridad que teníamos antes. Lo recomiendo."
- ⚠️ Las otras dos reviews en el sitio actual son placeholders ficticios — REEMPLAZAR con reseñas reales de Google Maps

---

## 6. LINKS IMPORTANTES

```
Sitio principal: https://shomer-web.vercel.app
Dominio objetivo: https://shomer.com.ar
Club Shomer (app): https://shomer-club-v2.vercel.app
Video YouTube: https://youtu.be/VsBzvaK4f54?si=_u1hjlzIF2IOgYhe
Embed YouTube: https://www.youtube.com/embed/VsBzvaK4f54
```

---

## 7. ESTADO ACTUAL DEL SITIO (Mayo 2026)

### ✅ Implementado y funcionando
- Next.js 14 + Vercel deployment
- Meta tags completos (description, OG, robots index/follow)
- Twitter Card (`summary_large_image` — corregido)
- Todas las secciones del diseño original
- Optimización de imágenes via `next/image`
- Precios reales publicados (Vision / Vision Pro / Vision Pro Dúo)
- Video YouTube embebido
- Club Shomer integrado
- Formulario de contacto funcional
- Sección comparativa QR vs Shomer
- Paleta de color unificada (negro + azul + verde)
- Tipografía consistente (Bebas Neue + DM Sans)
- Responsive mobile

### ❌ Pendiente — ALTA PRIORIDAD

**SEO / Técnico:**
- [ ] Schema markup JSON-LD (`LocalBusiness`, `Service`, `FAQPage`, `Review`) — crítico para rich snippets
- [ ] `og:url` debe apuntar al dominio real (shomer.com.ar) cuando se migre
- [ ] Contadores de stats (20, 15000) muestran 0 en SSR — usar `useEffect` o inicializar con valor real y animar encima
- [ ] Sitemap.xml — no existe aún
- [ ] robots.txt — verificar configuración
- [ ] Google Search Console — verificar si está conectado

**Contenido / Conversión:**
- [ ] WhatsApp flotante — botón fijo en pantalla mobile (mayor impacto en conversión)
- [ ] FAQ section — mínimo 6 preguntas del administrador antes de contratar (ver sección 9)
- [ ] Reviews ficticias — reemplazar las 2 placeholders con reseñas reales de Google
- [ ] Política de privacidad — obligatoria (formulario + Analytics activos, Ley 25.326 Argentina)
- [ ] Habilitación / número de registro ante Ministerio de Seguridad — visible en footer

**Páginas faltantes:**
- [ ] Página "Quiénes somos" — cara de la empresa, historia, equipo
- [ ] Páginas de servicio individuales (Edificios / Empresas / Countries / Hoteles) con URL propia para SEO
- [ ] Blog — mínimo 2 artículos/mes para posicionamiento orgánico

**Baja prioridad pero importante:**
- [ ] Crédito "Diseñado por Mawwebs" en el footer del sitio WordPress original — si existe aún en algún lugar, eliminar
- [ ] Integración Google Reviews en vivo (widget o API)
- [ ] Render 3D del tótem (ver sección 10)

---

## 8. ERRORES CONOCIDOS DEL SITIO ANTERIOR (WordPress) — NO REPETIR

1. Tres servicios distintos apuntando al mismo URL
2. Logo PNG sin fondo transparente en algunas secciones
3. Google AdSense code en el head (residuo de Site Kit) — no agregar
4. 6 variantes de color azul distintas conviviendo
5. Formulario de cotización en el hero (above the fold) — el hero es para impactar, no para capturar datos
6. íconos de distintas familias visuales mezclados
7. Fondo de sección Countries con color completamente diferente al resto
8. Sin WhatsApp flotante pese a ser el canal principal de conversión

---

## 9. FAQ SUGERIDA (para implementar como sección)

Preguntas reales que hace el administrador antes de contratar:

**Q: ¿Qué pasa si falla el sistema o se corta internet?**
A: El sistema opera con redundancia. Ante falla de conectividad, el tótem mantiene el registro local y sincroniza cuando se restaura. La central de monitoreo tiene protocolos de contingencia activos 24/7.

**Q: ¿Quién gestiona las altas y bajas de residentes?**
A: Shomer lo gestiona por completo. El administrador notifica el cambio (mudanza, nuevo residente) y nosotros actualizamos el sistema. Sin trabajo manual para el consorcio.

**Q: ¿Cuánto tarda la instalación?**
A: La instalación estándar se completa en un día hábil. Incluye configuración, pruebas y capacitación al administrador o encargado.

**Q: ¿El visitante necesita descargar una app?**
A: No. El visitante escanea el QR del equipo y accede desde el navegador de su celular. Sin instalaciones, sin cuentas, compatible con cualquier smartphone iOS o Android.

**Q: ¿Qué pasa si necesito abrir la puerta en una emergencia (fin de semana, feriado)?**
A: La central de monitoreo opera 24/7 los 365 días del año. Aperturas de emergencia (técnico de ascensor, reparación de bomba, etc.) son gestionadas remotamente con autorización del administrador o consejo de propietarios. Todo queda registrado.

**Q: ¿Los datos de los residentes son seguros?**
A: Toda la comunicación corre dentro del ecosistema Shomer, cifrada end-to-end. No se utilizan redes externas ni se expone ningún número personal. Los datos biométricos (Face ID) se procesan y almacenan bajo protocolos de seguridad estrictos en la base operativa Shomer.

---

## 10. IDEAS FUTURAS — NIVEL TESLA

### Render 3D interactivo del tótem
**Herramientas recomendadas:**
- `spline.design` — editor 3D web, exporta como iframe embebible, gratis
- Blender + exportar GLTF → Three.js en Next.js
- Luma AI (`lumalabs.ai`) — subir video caminando alrededor del tótem → genera modelo 3D NeRF automático
- Runway ML / Krea AI — foto del tótem → video cinematográfico de 5-8 segundos

**Implementación en Next.js:**
```jsx
// Opción Spline (más simple)
import Spline from '@splinetool/react-spline'
<Spline scene="https://prod.spline.design/[scene-id]/scene.splinecode" />

// Opción Three.js con modelo GLTF
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
```

### Scroll storytelling estilo Tesla
- Cada sección revela el producto con animaciones de scroll (Framer Motion)
- El tótem aparece "flotando" en el hero y sigue al usuario mientras hace scroll
- Framer Motion: `useScroll` + `useTransform` para parallax del producto

### Dashboard de cliente (Club Shomer evolucionado)
- Ya existe en: https://shomer-club-v2.vercel.app
- Potencial: que el administrador vea historial de accesos en vivo desde el sitio

---

## 11. COMPETENCIA REFERENCIA

Sitios a estudiar para inspiración de nivel:
- `verkada.com` — el más cercano a "Tesla de la seguridad física", Apple-like
- `axis.com` — premium, minimalista, producto como estrella
- `prosegur.com` — awards visibles en hero, verticales bien separadas
- `adt.com` — mejor en trust signals y reviews integradas

---

## 12. STACK TÉCNICO

```
Framework: Next.js 14 (App Router)
Deploy: Vercel
Dominio actual: shomer-web.vercel.app
Dominio objetivo: shomer.com.ar
Imágenes: next/image (optimización automática)
Fonts: Google Fonts (Bebas Neue, DM Sans, Space Mono)
Animaciones: CSS nativo (fade-up con IntersectionObserver)
Video: YouTube embed
Forms: Formulario propio (sin backend conectado aún)
Analytics: Pendiente confirmar (GTM / GA4)
```

---

## 13. RESPONSABLE DEL SITIO

El marketing/desarrollo actual lo lleva un tercero que principalmente usa Hostinger y corre campañas de publicidad. Las mejoras técnicas avanzadas (Schema, SSR fixes, 3D, nuevas páginas) deben ser implementadas por un desarrollador con conocimiento de Next.js.

**Canal principal de conversión real:** brand awareness físico (ver tótem en edificio) + recomendaciones boca a boca. El sitio web valida la promesa, no genera frío. Por eso la prioridad es **confianza y credibilidad**, no captación masiva.

---

## 14. CHECKLIST RÁPIDA PARA CADA SESIÓN DE CODE

Antes de hacer cambios, verificar:
- [ ] ¿El cambio mantiene la paleta negro/azul/verde sin agregar otros colores?
- [ ] ¿El hero sigue siendo impacto visual primero, formulario después?
- [ ] ¿Hay WhatsApp flotante visible en mobile?
- [ ] ¿Las imágenes pasan por `next/image`?
- [ ] ¿Los contadores animados tienen fallback con valor real para SSR?
- [ ] ¿El Schema JSON-LD está en el `<head>`?
- [ ] ¿Los links de servicios tienen páginas reales destino?
- [ ] ¿El footer no tiene crédito de agencia?
