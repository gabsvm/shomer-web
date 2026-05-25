"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Post } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";

interface BlogClientProps {
  posts: Post[];
}

const blogTranslations = {
  es: {
    tag: "Knowledge Hub",
    title: "Blog & Tecnología de Seguridad",
    desc: "Artículos de análisis, guías de prevención y las últimas novedades sobre control de acceso inteligente para el mercado argentino.",
    searchPlaceholder: "Buscar artículos...",
    categories: {
      Todos: "Todos",
      Seguridad: "Seguridad",
      Consorcios: "Consorcios",
      Tecnología: "Tecnología",
      "Casos de Éxito": "Casos de Éxito"
    },
    noResults: "No se encontraron artículos",
    noResultsDesc: "Probá buscando con otros términos o seleccionando otra categoría.",
    clearFilters: "Limpiar filtros"
  },
  en: {
    tag: "Knowledge Hub",
    title: "Blog & Security Technology",
    desc: "Analysis articles, prevention guides, and the latest news on smart access control.",
    searchPlaceholder: "Search articles...",
    categories: {
      Todos: "All",
      Seguridad: "Security",
      Consorcios: "Condos",
      Tecnología: "Technology",
      "Casos de Éxito": "Success Stories"
    },
    noResults: "No articles found",
    noResultsDesc: "Try searching with other terms or selecting another category.",
    clearFilters: "Clear filters"
  },
  he: {
    tag: "Knowledge Hub",
    title: "בלוג וטכנולוגיית אבטחה",
    desc: "מאמרי ניתוח, מדריכי מניעה והחדשות האחרונות בנושא בקרת כניסה חכמה.",
    searchPlaceholder: "חפש מאמרים...",
    categories: {
      Todos: "הכל",
      Seguridad: "אבטחה",
      Consorcios: "בתים משותפים",
      Tecnología: "טכנולוגיה",
      "Casos de Éxito": "סיפורי הצלחה"
    },
    noResults: "לא נמצאו מאמרים",
    noResultsDesc: "נסה לחפש מונחים אחרים או לבחור קטגוריה אחרת.",
    clearFilters: "נקה מסננים"
  },
  de: {
    tag: "Knowledge Hub",
    title: "Blog & Sicherheitstechnologie",
    desc: "Analyseartikel, Präventionsleitfäden und die neuesten Nachrichten zur intelligenten Zutrittskontrolle.",
    searchPlaceholder: "Artikel suchen...",
    categories: {
      Todos: "Alle",
      Seguridad: "Sicherheit",
      Consorcios: "Gemeinschaften",
      Tecnología: "Technologie",
      "Casos de Éxito": "Erfolgsgeschichten"
    },
    noResults: "Keine Artikel gefunden",
    noResultsDesc: "Versuchen Sie es mit anderen Begriffen oder wählen Sie eine andere Kategorie.",
    clearFilters: "Filter löschen"
  },
  ru: {
    tag: "Knowledge Hub",
    title: "Блог и технологии безопасности",
    desc: "Аналитические статьи, руководства по профилактике и последние новости в области умного контроля доступа.",
    searchPlaceholder: "Поиск статей...",
    categories: {
      Todos: "Все",
      Seguridad: "Безопасность",
      Consorcios: "ТСЖ",
      Tecnología: "Технологии",
      "Casos de Éxito": "Кейсы"
    },
    noResults: "Статьи не найдены",
    noResultsDesc: "Попробуйте использовать другие ключевые слова или выбрать другую категорию.",
    clearFilters: "Сбросить фильтры"
  },
  pt: {
    tag: "Knowledge Hub",
    title: "Blog & Tecnologia de Segurança",
    desc: "Artigos de análise, guias de prevenção e as últimas novidades sobre controle de acesso inteligente.",
    searchPlaceholder: "Buscar artigos...",
    categories: {
      Todos: "Todos",
      Seguridad: "Segurança",
      Consorcios: "Condomínios",
      Tecnología: "Tecnologia",
      "Casos de Éxito": "Casos de Sucesso"
    },
    noResults: "Nenhum artigo encontrado",
    noResultsDesc: "Tente pesquisar com outros termos ou selecionar outra categoria.",
    clearFilters: "Limpar filtros"
  },
  it: {
    tag: "Knowledge Hub",
    title: "Blog & Tecnologia di Sicurezza",
    desc: "Articoli di analisi, guide di prevenzione e le ultime novità sul controllo accessi intelligente.",
    searchPlaceholder: "Cerca articoli...",
    categories: {
      Todos: "Tutti",
      Seguridad: "Sicurezza",
      Consorcios: "Condomini",
      Tecnología: "Tecnologia",
      "Casos de Éxito": "Storie di Successo"
    },
    noResults: "Nessun articolo trovato",
    noResultsDesc: "Prova a cercare altri termini o a selezionare un'altra categoria.",
    clearFilters: "Cancella filtri"
  }
};

export function BlogClient({ posts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const { language } = useLanguage();
  const tBlog = blogTranslations[language] || blogTranslations["es"];

  const categories = ["Todos", "Seguridad", "Consorcios", "Tecnología", "Casos de Éxito"];

  // Localize posts content
  const localizedPosts = posts.map((post) => {
    const localized = post.translations[language] || post.translations["es"];
    return {
      ...post,
      title: localized.title,
      excerpt: localized.excerpt,
      category: localized.category,
      readTime: localized.readTime,
      content: localized.content
    };
  });

  // Filter posts based on search query and selected category
  const filteredPosts = localizedPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const localizedSelectedCategory = tBlog.categories[selectedCategory as keyof typeof tBlog.categories] || selectedCategory;
    const matchesCategory =
      selectedCategory === "Todos" || post.category === localizedSelectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden flex-grow">
      {/* Background ambient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,191,255,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,230,118,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs tracking-[0.2em] text-brand-blue uppercase mb-3 block">
            {tBlog.tag}
          </span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase mb-6">
            {tBlog.title.split("&")[0]} & <br /><em className="text-brand-blue not-italic">{tBlog.title.split("&")[1] || ""}</em>
          </h1>
          <p className="text-base md:text-lg text-brand-gray-light leading-relaxed max-w-[600px] font-light">
            {tBlog.desc}
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-10 pb-8 border-b border-brand-border/60">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 border rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer
                  ${selectedCategory === cat 
                    ? "border-brand-blue bg-brand-blue-dim text-brand-white" 
                    : "border-brand-border bg-black/20 text-brand-gray hover:text-brand-gray-light hover:border-brand-gray"
                  }`}
              >
                {tBlog.categories[cat as keyof typeof tBlog.categories] || cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-[320px] order-1 md:order-2">
            <input
              type="text"
              placeholder={tBlog.searchPlaceholder}
              aria-label={tBlog.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-brand-border rounded px-4 py-2.5 pl-10 text-sm text-white outline-none focus:border-brand-blue transition-colors"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" />
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded overflow-hidden bg-brand-surface border border-brand-border hover:border-brand-blue/50 hover:shadow-[0_8px_30px_rgba(0,191,255,0.05)] transition-all duration-300 h-full"
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  {/* Post Image */}
                  <div className="relative w-full h-[200px] overflow-hidden bg-brand-surface border-b border-brand-border">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-sm border border-brand-border/60 px-3 py-1 rounded-sm text-[0.65rem] font-mono font-bold tracking-wider text-brand-blue uppercase">
                      {post.category}
                    </div>
                  </div>

                  {/* Post Info */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Meta */}
                      <div className="flex gap-4 items-center text-[0.7rem] text-brand-gray font-mono mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-xl uppercase tracking-wide mb-3 leading-tight group-hover:text-brand-blue transition-colors duration-300">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[0.83rem] text-brand-gray leading-relaxed mb-6 font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Arrow */}
                    <div className="flex items-center justify-between pt-4 border-t border-brand-border/40 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center font-mono text-[0.68rem] font-bold text-brand-blue">
                          {post.author.avatar}
                        </div>
                        <div>
                          <div className="text-[0.78rem] font-medium text-brand-white leading-none mb-0.5">
                            {post.author.name}
                          </div>
                          <div className="text-[0.65rem] text-brand-gray font-mono">
                            {post.author.role}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-brand-blue group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-brand-border/60 rounded bg-brand-surface/20">
            <p className="text-lg text-brand-gray-light font-light mb-2">{tBlog.noResults}</p>
            <p className="text-xs text-brand-gray">{tBlog.noResultsDesc}</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("Todos"); }}
              className="mt-6 font-mono text-xs tracking-wider uppercase text-brand-blue hover:text-brand-white underline cursor-pointer"
            >
              {tBlog.clearFilters}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
