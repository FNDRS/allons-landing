import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Cambios y novedades",
  description: "El registro público de todo lo que estamos construyendo en ALLONS. Lo nuevo, lo mejorado y lo que viene.",
  alternates: {
    canonical: "/cambios-novedades",
  },
};

const RELEASES = [
  {
    date: "27 abr 2026",
    tag: "Nuevo",
    title: "Lanzamiento de la landing page",
    items: [
      "Publicamos la primera versión de allonsapp.com.",
      "Incluye información para organizadores, preguntas frecuentes y los primeros detalles del producto.",
      "Seguiremos actualizando esta sección conforme avancemos con el lanzamiento de la app.",
    ],
  },
];

const COLORS: Record<string, string> = {
  Nuevo: "#F67010",
  Mejora: "#0AA86B",
  Arreglo: "#3D6BD7",
};

export default function CambiosPage() {
  return (
    <PageShell
      eyebrow="Cambios y novedades"
      title={
        <>
          Lo que estamos{" "}
          <span style={{ color: "#F67010" }}>construyendo.</span>
        </>
      }
      subtitle="Por ahora estamos preparando el terreno. El primer paso fue lanzar esta landing para contar qué viene con ALLONS."
    >
      <div style={{ marginTop: 40, paddingBottom: 80 }}>
        {RELEASES.map((release, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: 32,
              padding: "32px 0",
              borderTop: i === 0 ? "1px solid #EAE8E4" : "none",
              borderBottom: "1px solid #EAE8E4",
            }}
            className="changelog-row"
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 12,
                  color: "#6B6A70",
                  letterSpacing: "0.05em",
                }}
              >
                {release.date}
              </span>
              <div style={{ marginTop: 8 }}>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: `${COLORS[release.tag] ?? "#131516"}1A`,
                    color: COLORS[release.tag] ?? "#131516",
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {release.tag}
                </span>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.015em",
                  margin: "0 0 12px",
                  color: "#131516",
                }}
              >
                {release.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {release.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 15,
                      color: "#2B2A2F",
                      display: "flex",
                      gap: 10,
                      lineHeight: 1.55,
                    }}
                  >
                    <span style={{ color: "#F67010", marginTop: 2 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .changelog-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </PageShell>
  );
}
