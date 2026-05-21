import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidad — Shomer Security",
  description: "Política de privacidad y protección de datos personales de Shomer Security SRL, conforme a la Ley 25.326 de Argentina.",
  robots: "index, follow",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <header className="border-b border-brand-border px-6 md:px-10 py-5">
        <Link href="/" className="inline-block">
          <Image src="/images/SHOMER.png" alt="Shomer Security" width={120} height={44} className="h-9 w-auto object-contain" />
        </Link>
      </header>

      <main className="max-w-[760px] mx-auto px-6 py-16 md:py-24">
        <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-4">Legal</div>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none uppercase mb-10">
          Política de<br /><em className="text-brand-blue not-italic">Privacidad</em>
        </h1>

        <div className="flex flex-col gap-10 text-[0.92rem] text-brand-gray-light leading-relaxed">
          <p className="text-brand-gray text-xs font-mono tracking-widest uppercase">Última actualización: Mayo 2026</p>

          <Section title="1. Responsable del tratamiento">
            <p>
              <strong className="text-brand-white">Shomer Security SRL</strong> (en adelante "Shomer", "nosotros" o "la empresa") es
              responsable del tratamiento de los datos personales recolectados a través del sitio web{" "}
              <span className="text-brand-blue">shomer-web.vercel.app</span> y del dominio{" "}
              <span className="text-brand-blue">shomer.com.ar</span>.
            </p>
            <p>Contacto: <a href="mailto:info@shomer.com.ar" className="text-brand-blue hover:underline">info@shomer.com.ar</a></p>
          </Section>

          <Section title="2. Datos que recopilamos">
            <p>A través del formulario de contacto recopilamos:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 mt-2 ml-2">
              <li>Nombre y apellido</li>
              <li>Número de teléfono</li>
              <li>Dirección de correo electrónico</li>
              <li>Tipo de espacio (edificio, empresa, country, hotel)</li>
              <li>Consulta o mensaje libre (opcional)</li>
            </ul>
            <p className="mt-3">
              También podemos recopilar datos de navegación de forma anónima y agregada mediante herramientas de análisis web
              (Google Analytics o similares), incluyendo tipo de dispositivo, navegador, páginas visitadas y duración de la sesión.
            </p>
          </Section>

          <Section title="3. Finalidad del tratamiento">
            <p>Los datos recopilados se utilizan exclusivamente para:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 mt-2 ml-2">
              <li>Responder a consultas comerciales enviadas a través del formulario de contacto</li>
              <li>Agendar visitas técnicas o presentaciones del servicio</li>
              <li>Enviar información sobre planes, precios y novedades de Shomer, únicamente si el usuario lo solicita</li>
              <li>Mejorar la experiencia del sitio web mediante análisis de uso anónimo</li>
            </ul>
            <p className="mt-3">
              No utilizamos los datos para publicidad de terceros ni los cedemos a empresas externas sin consentimiento expreso.
            </p>
          </Section>

          <Section title="4. Base legal del tratamiento">
            <p>
              El tratamiento de datos se realiza en cumplimiento de la{" "}
              <strong className="text-brand-white">Ley N° 25.326 de Protección de Datos Personales</strong> de la República
              Argentina y sus normas reglamentarias. La base legal es el consentimiento del usuario al completar el formulario de
              contacto o al navegar el sitio web.
            </p>
          </Section>

          <Section title="5. Conservación de datos">
            <p>
              Los datos personales se conservan durante el tiempo necesario para gestionar la consulta y, en caso de contratación
              del servicio, durante la vigencia del vínculo comercial y el plazo legal aplicable posterior. Los datos de usuarios que
              no contraten el servicio se eliminan dentro de los 12 meses desde la última comunicación.
            </p>
          </Section>

          <Section title="6. Derechos del titular">
            <p>De conformidad con la Ley 25.326, el titular de los datos tiene derecho a:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 mt-2 ml-2">
              <li><strong className="text-brand-white">Acceso:</strong> conocer qué datos personales tenemos sobre usted</li>
              <li><strong className="text-brand-white">Rectificación:</strong> corregir datos inexactos o incompletos</li>
              <li><strong className="text-brand-white">Supresión:</strong> solicitar la eliminación de sus datos</li>
              <li><strong className="text-brand-white">Confidencialidad:</strong> oponerse al tratamiento para fines comerciales</li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, enviá un correo a{" "}
              <a href="mailto:info@shomer.com.ar" className="text-brand-blue hover:underline">info@shomer.com.ar</a>{" "}
              con el asunto "Datos Personales" indicando tu nombre completo y el derecho que querés ejercer. Respondemos dentro
              de los 5 días hábiles.
            </p>
            <p className="mt-3">
              La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la
              atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por el
              incumplimiento de las normas vigentes en materia de protección de datos personales.
            </p>
          </Section>

          <Section title="7. Seguridad de la información">
            <p>
              Adoptamos medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no
              autorizados, pérdida, alteración o divulgación. La comunicación entre el sitio y el usuario utiliza protocolo HTTPS
              con cifrado TLS.
            </p>
          </Section>

          <Section title="8. Cookies y tecnologías similares">
            <p>
              El sitio puede utilizar cookies de análisis anónimo para medir el tráfico y mejorar la experiencia. No utilizamos
              cookies de rastreo de terceros para publicidad personalizada. Podés configurar tu navegador para rechazar cookies sin
              que esto afecte la funcionalidad del sitio.
            </p>
          </Section>

          <Section title="9. Cambios en esta política">
            <p>
              Podemos actualizar esta política en cualquier momento. La fecha de última actualización siempre estará indicada al
              inicio de este documento. El uso continuado del sitio tras la publicación de cambios implica la aceptación de los
              mismos.
            </p>
          </Section>

          <Section title="10. Contacto">
            <p>
              Ante cualquier duda sobre esta política o sobre el tratamiento de tus datos personales, contactanos:
            </p>
            <ul className="flex flex-col gap-1 mt-2 ml-2">
              <li>Email: <a href="mailto:info@shomer.com.ar" className="text-brand-blue hover:underline">info@shomer.com.ar</a></li>
              <li>Teléfono: <a href="tel:+541179994444" className="text-brand-blue hover:underline">+54 11 7999-4444</a></li>
            </ul>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border">
          <Link href="/" className="text-sm font-mono tracking-widest uppercase text-brand-blue hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl uppercase tracking-wide text-brand-white mb-3">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
