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
  Nuevo: "var(--color-liquid-lava)",
  Mejora: "var(--color-emerald-green)",
  Arreglo: "var(--color-azure)",
};

export default function CambiosPage() {
  return (
    <PageShell
      eyebrow="Cambios y novedades"
      title={
        <>
          Lo que estamos{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>construyendo.</span>
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
              borderTop: i === 0 ? "1px solid var(--color-line)" : "none",
              borderBottom: "1px solid var(--color-line)",
            }}
            className="changelog-row"
          >
            <div>
              <span
                className="ds-body"
                style={{
                  color: "var(--color-dusty-grey)",
                }}
              >
                {release.date}
              </span>
              <div style={{ marginTop: 8 }}>
                <span
                  className="ds-chip-active"
                  style={{
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    background: `color-mix(in srgb, ${COLORS[release.tag] ?? "var(--color-gluon-grey)"} 12%, transparent)`,
                    color: COLORS[release.tag] ?? "var(--color-gluon-grey)",
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {release.tag}
                </span>
              </div>
            </div>

            <div>
              <h2
                className="ds-h2"
                style={{
                  margin: "0 0 12px",
                  color: "var(--color-gluon-grey)",
                }}
              >
                {release.title}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {release.items.map((item) => (
                  <li
                    key={item}
                    className="ds-body"
                    style={{
                      color: "var(--color-ink-700)",
                      display: "flex",
                      gap: 10,
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: "var(--color-liquid-lava)", marginTop: 2 }}>•</span>
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
