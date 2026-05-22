# Registro de Tipografías — Shomer Web

Este documento detalla la evolución de la tipografía utilizada en el sitio web de Shomer Security, registrando tanto las fuentes originales como las nuevas seleccionadas para el look premium final.

---

## 1. Tipografías Actuales (Look Premium / Apple & Verkada Style)
Implementadas el 22 de mayo de 2026 para elevar la estética hacia un producto de software e IoT de alta gama.

*   **Títulos y Encabezados (Display):** **`Outfit`** (`next/font/google`)
    *   *Clase CSS/Tailwind:* `font-display` (mapeada a `var(--font-outfit)`)
    *   *Estilo:* Sans-serif geométrica basada en círculos perfectos, curvas limpias y proporciones sofisticadas. Emula fuentes premium con licencia como *Euclid Circular* o la tipografía de Apple.
    *   *Ajustes de espaciado:* Se configuró con interlineado elegante `leading-[1.1]` y espaciado normal-amplio `tracking-wide` en títulos grandes para una lectura cómoda y lujosa.
*   **Texto de Cuerpo (Body):** **`Inter`** (`next/font/google`)
    *   *Clase CSS/Tailwind:* `font-body` (mapeada a `var(--font-inter)`)
    *   *Estilo:* Una de las tipografías más nítidas y respetadas del ecosistema tecnológico (usada por Verkada, Figma y Vercel). Ofrece máxima legibilidad en tamaños pequeños.
*   **Elementos Técnicos y CCTV (Monospace):** **`Space Mono`** (Sin cambios)
    *   *Clase CSS/Tailwind:* `font-mono` (mapeada a `var(--font-space-mono)`)
    *   *Estilo:* Monospaciada digital, excelente para el HUD de las cámaras de seguridad, timestamps y contadores numéricos.

---

## 2. Tipografías Originales (Look Industrial / Deportivo)
La configuración inicial del sitio, de naturaleza más ruidosa e industrial.

*   **Títulos y Encabezados (Display):** **`Bebas Neue`**
    *   *Estilo:* Fuente condensada, angosta, muy alta y de impacto. Por defecto en mayúsculas. Ideal para marcas deportivas u letreros de advertencia tradicionales.
    *   *Detalles de estilo:* Requería interlineados extremadamente ajustados (`leading-[0.92]`) para no separarse verticalmente.
*   **Texto de Cuerpo (Body):** **`DM Sans`**
    *   *Estilo:* Sans-serif geométrica con un carácter un poco más amigable y suave.
*   **Elementos Técnicos y CCTV (Monospace):** **`Space Mono`**

---

## 3. ¿Cómo revertir al look original si fuera necesario?

Si por alguna razón comercial o de diseño se decide volver a las fuentes industriales originales, los cambios se pueden revertir en Git usando los commits del historial, o modificando manualmente el código de la siguiente manera:

### Manualmente:
1.  **En `src/app/layout.tsx`:**
    *   Reemplazar la importación de `Outfit` e `Inter` por `Bebas_Neue` y `DM_Sans`.
    *   Inicializar `bebasNeue` con `weight: "400"`, `variable: "--font-bebas-neue"`.
    *   Inicializar `dmSans` con `variable: "--font-dm-sans"`.
    *   Aplicar `${bebasNeue.variable} ${dmSans.variable}` en la clase del `<body>`.
2.  **En `src/app/globals.css`:**
    *   Cambiar `--font-display: var(--font-outfit), sans-serif;` por `--font-display: var(--font-bebas-neue), sans-serif;`.
    *   Cambiar `--font-body: var(--font-inter), sans-serif;` por `--font-body: var(--font-dm-sans), sans-serif;`.
3.  **En `src/components/Hero.tsx`:**
    *   Ajustar el título principal de `leading-[1.1]` de vuelta a `leading-[0.92]`.
