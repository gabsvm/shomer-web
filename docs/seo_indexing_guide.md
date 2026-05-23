# Guía de Indexación y SEO en Google — Shomer Security

Esta guía detalla el proceso estándar y las configuraciones necesarias para que el sitio web de **Shomer Security** e indexe de forma óptima en el buscador de Google y otros motores de búsqueda.

---

## 1. Google Search Console (El Paso Inicial)
**Google Search Console (GSC)** es la herramienta gratuita oficial de Google para controlar la salud, indexación y rendimiento de búsqueda de tu web.

### Pasos para Configurar:
1. Accede a [Google Search Console](https://search.google.com/search-console).
2. Agrega una nueva propiedad de tipo **Dominio** (por ejemplo, `shomer.com.ar`).
3. **Verificación de Propiedad:**
   - Google te proveerá un registro de texto (registro **TXT** de DNS).
   - Deberás copiar este registro y pegarlo en el panel de control de tu registrador de dominio (ej. Nic.ar, Hostinger, GoDaddy, Cloudflare).
   - Una vez propagado el cambio, haz clic en **Verificar** en Search Console.

---

## 2. Envío del Mapa del Sitio (Sitemap)
El **Sitemap** le provee a Google una lista organizada de todas las URLs válidas y activas de tu web, facilitando su rastreo.

* **En el proyecto Next.js:** El sitemap se genera dinámicamente en `/sitemap.xml` al compilar la aplicación.
* **Cómo enviarlo:**
  1. Entra a tu propiedad en Google Search Console.
  2. En el menú lateral izquierdo, haz clic en **Sitemaps**.
  3. En la sección "Añadir un nuevo sitemap", ingresa la URL: `https://shomer.com.ar/sitemap.xml`.
  4. Haz clic en **Enviar**. Google lo leerá periódicamente para detectar nuevas publicaciones o páginas agregadas.

---

## 3. Configuración del Archivo `robots.txt`
El archivo `robots.txt` le dice a los bots qué directorios pueden visitar y cuáles ignorar.

* **En el proyecto Next.js:** Se encuentra en `/robots.txt`.
* **Configuración recomendada:**
  - Permitir a todos los rastreadores públicos (`User-agent: *`, `Allow: /`).
  - Especificar la ubicación del sitemap.

---

## 4. Asegurar Metaetiquetas SEO
Para mostrar la información correcta en las cards de resultados de Google, cada página debe exportar sus metadatos (`Metadata`).

* **En el Módulo de Blog:**
  - El listado de blogs expone metadatos estáticos definidos en `src/app/blog/page.tsx`.
  - Cada entrada dinámica utiliza `generateMetadata()` en `src/app/blog/[slug]/page.tsx` para generar metadatos dinámicos del post (título, descripción, e imagen OpenGraph).

---

## 5. Canonical URLs y Consistencia de Dominio
Debes evitar que Google indexe la misma página con y sin prefijos (ej: `http://` vs `https://` o `www.` vs sin `www.`), ya que Google penaliza el contenido duplicado.

* **En tu Hosting (Vercel / Hostinger):**
  - Elige una versión canónica (por ejemplo, `https://shomer.com.ar`).
  - Configura redirecciones automáticas en el hosting para que cualquier intento de ingresar con `http://` o con `www.` redirija con estado **301 (Redirección Permanente)** al dominio canónico.
  - Asegúrate de habilitar el certificado **SSL (HTTPS)** (usualmente proveído de forma gratuita por Let's Encrypt o Cloudflare en la plataforma de hosting).

---

## 6. Solicitar Indexación Manual (Para acelerar el proceso)
Si has publicado un nuevo artículo de blog o una nueva página y quieres que aparezca en Google de inmediato sin esperar el rastreo mensual rutinario:
1. Copia la URL exacta de la página en cuestión.
2. Pégala en la barra de búsqueda de la parte superior de **Google Search Console** ("Inspeccionar cualquier URL...").
3. Si la página no está en el índice de Google, haz clic en **Solicitar indexación**. El robot de Google la rastreará y la incluirá en los resultados en unas pocas horas.
