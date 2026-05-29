import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts, Locale } from "@/data/posts";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BlogProgressBar, BlogShareButton } from "./BlogDetailClient";
import { Metadata } from "next";
import { cookies } from "next/headers";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const blogDetailTranslations = {
  es: {
    backToBlog: "Volver al blog",
    notFound: "Artículo no encontrado",
    notFoundDesc: "El enlace al artículo es incorrecto o el artículo ha sido eliminado.",
    guaranteed: "Seguridad Garantizada",
    ctaTitle: "¿Querés modernizar tu control de acceso?",
    ctaDesc: "Evaluamos la infraestructura de tu edificio o empresa sin costo. Obtené un plan a la medida de tus expensas y requerimientos técnicos.",
    ctaBtn: "Cotizar servicio gratis",
    recommended: "Artículos Recomendados",
    readMore: "Leer más →"
  },
  en: {
    backToBlog: "Back to blog",
    notFound: "Article not found",
    notFoundDesc: "The article link is incorrect or the article has been deleted.",
    guaranteed: "Guaranteed Security",
    ctaTitle: "Want to modernize your access control?",
    ctaDesc: "We evaluate the infrastructure of your building or company free of charge. Get a tailored plan.",
    ctaBtn: "Get a free quote",
    recommended: "Recommended Articles",
    readMore: "Read more →"
  },
  he: {
    backToBlog: "בחזרה לבלוג",
    notFound: "המאמר לא נמצא",
    notFoundDesc: "הקישור למאמר שגוי או שהמאמר נמחק.",
    guaranteed: "אבטחה מובטחת",
    ctaTitle: "רוצה למודרניזציה של בקרת הכניסה שלך?",
    ctaDesc: "אנו מעריכים את תשתית הבניין או החברה שלך ללא עלות. קבל תוכנית מותאמת אישית.",
    ctaBtn: "קבל הצעת מחיר חינם",
    recommended: "מאמרים מומלצים",
    readMore: "קרא עוד ←"
  },
  de: {
    backToBlog: "Zurück zum Blog",
    notFound: "Artikel nicht gefunden",
    notFoundDesc: "Der Artikellink ist falsch oder der Artikel wurde gelöscht.",
    guaranteed: "Garantierte Sicherheit",
    ctaTitle: "Möchten Sie Ihre Zutrittskontrolle modernisieren?",
    ctaDesc: "Wir bewerten die Infrastruktur Ihres Gebäudes oder Unternehmens kostenlos. Erhalten Sie einen maßgeschneiderten Plan.",
    ctaBtn: "Kostenloses Angebot anfordern",
    recommended: "Empfohlene Artikel",
    readMore: "Mehr lesen →"
  },
  ru: {
    backToBlog: "Назад в блог",
    notFound: "Статья не найдена",
    notFoundDesc: "Неверная ссылка или статья была удалена.",
    guaranteed: "Гарантированная безопасность",
    ctaTitle: "Хотите модернизировать контроль доступа?",
    ctaDesc: "Мы бесплатно оценим инфраструктуру вашего здания или компании. Получите индивидуальный план.",
    ctaBtn: "Получить расчет бесплатно",
    recommended: "Рекомендуемые статьи",
    readMore: "Читать далее →"
  },
  pt: {
    backToBlog: "Voltar ao blog",
    notFound: "Artigo não encontrado",
    notFoundDesc: "O link do artigo está incorreto ou o artigo foi excluído.",
    guaranteed: "Segurança Garantida",
    ctaTitle: "Quer modernizar seu controle de acesso?",
    ctaDesc: "Avaliamos a infraestrutura do seu edifício ou empresa sem custos. Obtenha um plano sob medida.",
    ctaBtn: "Cotar serviço grátis",
    recommended: "Artigos Recomendados",
    readMore: "Ler mais →"
  },
  it: {
    backToBlog: "Torna al blog",
    notFound: "Articolo non trovato",
    notFoundDesc: "Il link dell'articolo è errato o l'articolo è stato eliminato.",
    guaranteed: "Sicurezza Garantita",
    ctaTitle: "Vuoi modernizzare il tuo controllo accessi?",
    ctaDesc: "Valutiamo l'infrastruttura del tuo condominio o azienda gratuitamente. Ottieni un piano su misura.",
    ctaBtn: "Richiedi preventivo gratuito",
    recommended: "Articoli Consigliati",
    readMore: "Leggi di più →"
  }
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "es") as Locale;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Artículo no encontrado — Shomer Security",
    };
  }
  const localized = post.translations[lang] || post.translations["es"];
  return {
    title: `${localized.title} — Shomer Security`,
    description: localized.excerpt,
    openGraph: {
      title: localized.title,
      description: localized.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "es") as Locale;
  const tDetail = blogDetailTranslations[lang] || blogDetailTranslations["es"];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between">
        <Navbar />
        <div className="max-w-[600px] mx-auto text-center py-40 px-6">
          <h1 className="font-display text-4xl uppercase mb-4">{tDetail.notFound}</h1>
          <p className="text-brand-gray mb-8">{tDetail.notFoundDesc}</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue px-6 py-3 rounded-sm font-semibold text-xs tracking-wider uppercase hover:bg-brand-blue hover:text-brand-black transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> {tDetail.backToBlog}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Localize post
  const localized = post.translations[lang] || post.translations["es"];
  const localizedPost = {
    ...post,
    title: localized.title,
    excerpt: localized.excerpt,
    category: localized.category,
    readTime: localized.readTime,
    content: localized.content
  };

  // Get related posts (excluding the current one) and localize them
  const relatedPosts = posts
    .filter((p) => p.id !== post.id)
    .slice(0, 2)
    .map((p) => {
      const loc = p.translations[lang] || p.translations["es"];
      return {
        ...p,
        title: loc.title,
        excerpt: loc.excerpt,
        category: loc.category,
        readTime: loc.readTime,
        content: loc.content
      };
    });

  const escapeHtml = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const parseMarkdownInline = (text: string) => {
    return escapeHtml(text)
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-brand-white">$1</strong>')
      .replace(/`(.*?)`/g, '<code class="bg-white/5 border border-brand-border px-1 py-0.5 rounded font-mono text-xs text-brand-blue">$1</code>');
  };

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Headings
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={index} className="font-display text-2xl uppercase tracking-wider text-brand-white mt-10 mb-4">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("#### ")) {
        return (
          <h4 key={index} className="font-display text-xl uppercase tracking-wider text-brand-white mt-6 mb-3">
            {trimmed.replace("#### ", "")}
          </h4>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={index} className="font-display text-3xl uppercase tracking-wider text-brand-blue mt-12 mb-6 border-b border-brand-border/40 pb-2">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      // Bullet Lists
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split("\n").map(item => item.replace(/^[-*]\s+/, ""));
        return (
          <ul key={index} className="list-disc pl-5 my-6 space-y-3 text-brand-gray-light text-[0.95rem]">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdownInline(item) }} />
            ))}
          </ul>
        );
      }

      // Numbered Lists
      if (/^\d+\.\s+/.test(trimmed)) {
        const items = trimmed.split("\n").map(item => item.replace(/^\d+\.\s+/, ""));
        return (
          <ol key={index} className="list-decimal pl-5 my-6 space-y-3 text-brand-gray-light text-[0.95rem]">
            {items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdownInline(item) }} />
            ))}
          </ol>
        );
      }

      // Horizontal Rule
      if (trimmed === "---") {
        return <hr key={index} className="my-10 border-brand-border/60" />;
      }

      // Tables
      if (trimmed.includes("|") && trimmed.includes("\n")) {
        const lines = trimmed.split("\n");
        const headers = lines[0].split("|").map(h => h.trim()).filter(h => h !== "");
        const rows = lines.slice(2).map(line => line.split("|").map(r => r.trim()).filter(r => r !== ""));
        return (
          <div key={index} className="overflow-x-auto my-8 border border-brand-border rounded">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-brand-surface-2 border-b border-brand-border">
                  {headers.map((h, i) => (
                    <th key={i} className="p-4 text-brand-blue uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-brand-border/40 last:border-b-0 text-brand-gray-light">
                    {row.map((col, colIndex) => (
                      <td key={colIndex} className="p-4 font-sans text-sm">{col}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // Standard Paragraph
      return (
        <p 
          key={index} 
          className="text-brand-gray-light text-[0.95rem] leading-relaxed mb-6 font-light"
          dangerouslySetInnerHTML={{ __html: parseMarkdownInline(trimmed) }}
        />
      );
    });
  };

  return (
    <main className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between">
      {/* Reading Progress Indicator */}
      <BlogProgressBar />
      
      <Navbar />

      <article className="pt-32 pb-24 px-6 md:px-10 relative">
        <div className="absolute top-[10%] left-[-15%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,191,255,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          {/* Breadcrumbs & Share */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-brand-gray hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {tDetail.backToBlog}
            </Link>

            <BlogShareButton />
          </div>

          {/* Tag & Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-gray mb-4">
            <span className="bg-brand-blue/15 border border-brand-blue/30 px-3 py-1 rounded-sm font-bold text-brand-blue uppercase tracking-wider">
              {localizedPost.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {localizedPost.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {localizedPost.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] leading-none uppercase mb-8 text-brand-white">
            {localizedPost.title}
          </h1>

          {/* Author Box */}
          <div className="flex items-center gap-4 p-4 border border-brand-border bg-brand-surface rounded mb-10">
            <div className="w-10 h-10 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center font-mono text-sm font-bold text-brand-blue">
              {localizedPost.author.avatar}
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-white">{localizedPost.author.name}</div>
              <div className="text-[0.72rem] text-brand-gray font-mono">{localizedPost.author.role}</div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded border border-brand-border overflow-hidden mb-12">
            <Image
              src={localizedPost.image}
              alt={localizedPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Rich Content body */}
          <div className="prose prose-invert max-w-none mb-16">
            {renderContent(localizedPost.content)}
          </div>

          {/* Conversion CTA Box */}
          <div className="border border-brand-blue/40 rounded-lg p-8 sm:p-12 bg-[linear-gradient(135deg,var(--color-brand-surface),rgba(0,191,255,0.06))] relative overflow-hidden mb-20 shadow-[0_0_40px_rgba(0,191,255,0.04)]">
            <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,191,255,0.08),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-brand-blue uppercase mb-3 block">
                  {tDetail.guaranteed}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wide mb-3">
                  {tDetail.ctaTitle}
                </h3>
                <p className="text-[0.88rem] text-brand-gray-light leading-relaxed max-w-[480px]">
                  {tDetail.ctaDesc}
                </p>
              </div>
              
              <Link 
                href="/#contacto" 
                className="whitespace-nowrap bg-brand-blue text-brand-black px-8 py-4 rounded-sm font-bold text-xs tracking-wider uppercase text-center hover:bg-brand-white hover:-translate-y-px transition-all"
              >
                {tDetail.ctaBtn}
              </Link>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="border-t border-brand-border/60 pt-16">
            <h4 className="font-display text-2xl uppercase tracking-wider mb-8 text-brand-white">
              {tDetail.recommended}
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group block border border-brand-border bg-brand-surface rounded p-6 hover:border-brand-blue/50 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[0.65rem] font-mono tracking-wider uppercase text-brand-blue mb-2 block">
                      {related.category}
                    </span>
                    <h5 className="font-display text-lg uppercase tracking-wide mb-2 group-hover:text-brand-blue transition-colors duration-300 leading-snug">
                      {related.title}
                    </h5>
                    <p className="text-[0.78rem] text-brand-gray leading-relaxed mb-4 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                  
                  <span className="text-[0.7rem] font-mono tracking-wider uppercase text-brand-white group-hover:text-brand-blue transition-colors duration-300 inline-flex items-center gap-1.5 mt-auto">
                    {tDetail.readMore}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
