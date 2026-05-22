import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts } from "@/data/posts";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BlogProgressBar, BlogShareButton } from "./BlogDetailClient";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Artículo no encontrado — Shomer Security",
    };
  }
  return {
    title: `${post.title} — Shomer Security`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between">
        <Navbar />
        <div className="max-w-[600px] mx-auto text-center py-40 px-6">
          <h1 className="font-display text-4xl uppercase mb-4">Artículo no encontrado</h1>
          <p className="text-brand-gray mb-8">El enlace al artículo es incorrecto o el artículo ha sido eliminado.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue px-6 py-3 rounded-sm font-semibold text-xs tracking-wider uppercase hover:bg-brand-blue hover:text-brand-black transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Get related posts (excluding the current one)
  const relatedPosts = posts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  const parseMarkdownInline = (text: string) => {
    return text
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
              <ArrowLeft className="w-4 h-4" /> Volver al blog
            </Link>

            <BlogShareButton />
          </div>

          {/* Tag & Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-gray mb-4">
            <span className="bg-brand-blue/15 border border-brand-blue/30 px-3 py-1 rounded-sm font-bold text-brand-blue uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none uppercase mb-8 text-brand-white">
            {post.title}
          </h1>

          {/* Author Box */}
          <div className="flex items-center gap-4 p-4 border border-brand-border bg-brand-surface rounded mb-10">
            <div className="w-10 h-10 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center font-mono text-sm font-bold text-brand-blue">
              {post.author.avatar}
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-white">{post.author.name}</div>
              <div className="text-[0.72rem] text-brand-gray font-mono">{post.author.role}</div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-[280px] sm:h-[400px] rounded border border-brand-border overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Rich Content body */}
          <div className="prose prose-invert max-w-none mb-16">
            {renderContent(post.content)}
          </div>

          {/* Conversion CTA Box */}
          <div className="border border-brand-blue/40 rounded-lg p-8 sm:p-12 bg-[linear-gradient(135deg,var(--color-brand-surface),rgba(0,191,255,0.06))] relative overflow-hidden mb-20 shadow-[0_0_40px_rgba(0,191,255,0.04)]">
            <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,191,255,0.08),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-brand-blue uppercase mb-3 block">
                  Seguridad Garantizada
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wide mb-3">
                  ¿Querés modernizar tu control de acceso?
                </h3>
                <p className="text-[0.88rem] text-brand-gray-light leading-relaxed max-w-[480px]">
                  Evaluamos la infraestructura de tu edificio o empresa sin costo. Obtené un plan a la medida de tus expensas y requerimientos técnicos.
                </p>
              </div>
              
              <Link 
                href="/#contacto" 
                className="whitespace-nowrap bg-brand-blue text-brand-black px-8 py-4 rounded-sm font-bold text-xs tracking-wider uppercase text-center hover:bg-brand-white hover:-translate-y-px transition-all"
              >
                Cotizar servicio gratis
              </Link>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="border-t border-brand-border/60 pt-16">
            <h4 className="font-display text-2xl uppercase tracking-wider mb-8 text-brand-white">
              Artículos Recomendados
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
                    Leer más →
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
