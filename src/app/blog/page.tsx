import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Blog · ALLONS",
  description: "Ideas, guías y aprendizajes para los que organizan eventos en Honduras y la región.",
};

const POSTS = [
  {
    slug: "como-llenar-tu-evento",
    category: "Estrategia",
    title: "Cómo llenar tu evento sin gastar fortuna en publicidad",
    excerpt:
      "Las tácticas que usan los organizadores que sold-outean sin presupuesto: comunidad, escasez bien usada y pixel.",
    readingTime: "6 min",
    date: "22 abr 2026",
  },
  {
    slug: "precios-de-entrada",
    category: "Operación",
    title: "Cómo poner precio a las entradas de tu evento",
    excerpt:
      "Una guía práctica para definir tipos de entrada, descuentos por tiempo y precios psicológicos que sí convierten.",
    readingTime: "8 min",
    date: "15 abr 2026",
  },
  {
    slug: "checklist-dia-del-evento",
    category: "Operación",
    title: "Checklist del día del evento (la versión que sí funciona)",
    excerpt:
      "30 cosas que tu yo del futuro va a agradecer haber hecho, desde el setup en puerta hasta el cierre de caja.",
    readingTime: "10 min",
    date: "5 abr 2026",
  },
  {
    slug: "redes-sociales-organizadores",
    category: "Marketing",
    title: "Las 5 plantillas de redes sociales que usan los organizadores que llenan",
    excerpt:
      "Reels, stories y carruseles probados para vender entradas sin sonar a comercial de TV.",
    readingTime: "7 min",
    date: "28 mar 2026",
  },
];

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title={
        <>
          Ideas para los que{" "}
          <span style={{ color: "#F67010" }}>hacen que pase.</span>
        </>
      }
      subtitle="Guías, casos reales y aprendizajes de organizadores en Honduras y la región. Sin paja, sin teorías de manual."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
          marginTop: 40,
          paddingBottom: 80,
        }}
        className="blog-grid"
      >
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 18,
              padding: 28,
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              transition: "border-color 160ms",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-jetbrains)", fontSize: 11, color: "#6B6A70", letterSpacing: "0.05em" }}>
              <span style={{ color: "#F67010", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {post.category}
              </span>
              <span>{post.date}</span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
                margin: 0,
                color: "#131516",
              }}
            >
              {post.title}
            </h3>
            <p style={{ fontSize: 15, color: "#494848", margin: 0, lineHeight: 1.55 }}>
              {post.excerpt}
            </p>
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 11,
                color: "#6B6A70",
                marginTop: "auto",
              }}
            >
              {post.readingTime} de lectura
            </span>
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
