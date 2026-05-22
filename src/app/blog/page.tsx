import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts } from "@/data/posts";
import { BlogClient } from "./BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog y Novedades sobre Seguridad — Shomer Security",
  description: "Artículos de análisis, guías de prevención y las últimas novedades sobre control de acceso inteligente para el mercado argentino.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between">
      <Navbar />
      <BlogClient posts={posts} />
      <Footer />
    </main>
  );
}

