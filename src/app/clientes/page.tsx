import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Clientes · ALLONS",
  description: "Productoras, salas, comunidades y emprendedores que ya están construyendo eventos con ALLONS.",
};

const STORIES = [
  {
    org: "Productora Sala Norte",
    type: "Conciertos · Tegucigalpa",
    quote:
      "Antes pasábamos los viernes haciendo cuentas en Excel. Ahora vemos las ventas en vivo y podemos cerrar el evento tranquilos.",
    person: "Ana Mejía, productora",
    metric: "+38%",
    metricNote: "vs venta del año anterior",
  },
  {
    org: "Comunidad TechHN",
    type: "Meetups · San Pedro Sula",
    quote:
      "Manejamos meetups gratis y workshops pagos en la misma cuenta. El escaneo en puerta nos quitó horas de trabajo manual.",
    person: "Diego Lara, organizador",
    metric: "12",
    metricNote: "eventos en 4 meses",
  },
  {
    org: "Festival Catracho",
    type: "Festival multi-fecha",
    quote:
      "Vendimos 3,200 entradas en un fin de semana. ALLONS aguantó el pico sin caerse y los desembolsos llegaron puntuales.",
    person: "Marcela Reyes, dirección",
    metric: "3,200",
    metricNote: "entradas en 72 horas",
  },
];

export default function ClientesPage() {
  return (
    <PageShell
      eyebrow="Clientes"
      title={
        <>
          Los que ya están{" "}
          <span style={{ color: "#F67010" }}>llenando con ALLONS.</span>
        </>
      }
      subtitle="Productoras, comunidades, salas y emprendedores que confiaron en ALLONS para mover sus eventos."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 18,
          marginTop: 40,
          paddingBottom: 80,
        }}
      >
        {STORIES.map((story) => (
          <div
            key={story.org}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 200px",
              gap: 32,
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 22,
              padding: 32,
              alignItems: "center",
            }}
            className="story-row"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#F67010",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {story.type}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.015em",
                  margin: "0 0 14px",
                  color: "#131516",
                }}
              >
                {story.org}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "#2B2A2F",
                  lineHeight: 1.65,
                  margin: "0 0 14px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{story.quote}&rdquo;
              </p>
              <p style={{ fontSize: 13.5, color: "#6B6A70", margin: 0 }}>
                — {story.person}
              </p>
            </div>

            <div
              style={{
                background: "#FAF7F2",
                borderRadius: 16,
                padding: 22,
                textAlign: "center",
                border: "1px solid #EAE8E4",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 800,
                  fontSize: 36,
                  letterSpacing: "-0.02em",
                  color: "#F67010",
                  lineHeight: 1,
                }}
              >
                {story.metric}
              </div>
              <p style={{ fontSize: 12.5, color: "#6B6A70", margin: "8px 0 0", lineHeight: 1.4 }}>
                {story.metricNote}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .story-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
