import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Cambios y novedades · ALLONS",
  description: "El registro público de todo lo que estamos construyendo en ALLONS. Lo nuevo, lo mejorado y lo que viene.",
};

const RELEASES = [
  {
    date: "27 abr 2026",
    tag: "Nuevo",
    title: "Lanzamiento beta de ALLONS",
    items: [
      "Creación de eventos con tipos de entrada ilimitados.",
      "Cobros con tarjeta y desembolsos semanales en HNL.",
      "App de organizador para escanear entradas en puerta.",
    ],
  },
  {
    date: "20 abr 2026",
    tag: "Mejora",
    title: "Reportes en tiempo real",
    items: [
      "El panel del organizador ahora se actualiza en vivo.",
      "Nuevo embudo de conversión por canal de venta.",
      "Filtros por tipo de entrada y rango de fechas.",
    ],
  },
  {
    date: "8 abr 2026",
    tag: "Mejora",
    title: "Códigos de descuento",
    items: [
      "Promociones por porcentaje, monto fijo o 2x1.",
      "Límite de usos por código y por usuario.",
      "Reporte de uso desde el panel.",
    ],
  },
  {
    date: "29 mar 2026",
    tag: "Nuevo",
    title: "App para asistentes",
    items: [
      "iOS y Android con compra de entradas integrada.",
      "Wallet de QR offline para presentar en puerta.",
      "Notificaciones de eventos en tu ciudad.",
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
      subtitle="Cada mejora, cada nueva función y cada arreglo: aquí queda registrado para que sepas exactamente qué cambia y cuándo."
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
