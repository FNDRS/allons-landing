import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Trabajá con nosotros · ALLONS",
  description: "Estamos formando el equipo que va a cambiar cómo se viven los eventos en Honduras.",
};

const POSITIONS = [
  {
    title: "Ingeniero/a Full-Stack",
    location: "Remoto · Honduras",
    type: "Tiempo completo",
    desc: "Construye con nosotros la app y el dashboard. Stack: Next.js, TypeScript, PostgreSQL.",
  },
  {
    title: "Diseñador/a de Producto",
    location: "Remoto · Honduras",
    type: "Tiempo completo",
    desc: "Diseña la experiencia tanto del organizador como del asistente. Figma + sentido común.",
  },
  {
    title: "Customer Success",
    location: "Tegucigalpa o SPS",
    type: "Tiempo completo",
    desc: "El primer punto de contacto con organizadores. Empático, resolutivo y con buena vibra.",
  },
  {
    title: "Growth Marketing",
    location: "Remoto · Honduras",
    type: "Tiempo completo",
    desc: "Diseña y ejecuta el plan de adquisición. Pixel, contenido, partnerships y comunidad.",
  },
];

const PERKS = [
  "Trabajo 100% remoto en Honduras",
  "Equipo pequeño, decisiones rápidas",
  "Vacaciones flexibles",
  "Setup completo para trabajar desde donde quieras",
  "Bono por evento exitoso del equipo",
  "Crecimiento real, no en PowerPoint",
];

export default function TrabajaPage() {
  return (
    <PageShell
      eyebrow="Trabajá con nosotros"
      title={
        <>
          Construyamos juntos lo que{" "}
          <span style={{ color: "#F67010" }}>todavía no existe.</span>
        </>
      }
      subtitle="Estamos en los primeros capítulos de ALLONS. Si quieres hacer algo de lo que vayas a hablar en cinco años, este es el momento."
    >
      <h2
        style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "-0.02em",
          margin: "60px 0 24px",
          color: "#131516",
        }}
      >
        Posiciones abiertas
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 60 }}>
        {POSITIONS.map((p) => (
          <div
            key={p.title}
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr auto",
              gap: 24,
              alignItems: "center",
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 16,
              padding: "22px 24px",
            }}
            className="job-row"
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 600,
                  fontSize: 17,
                  margin: "0 0 4px",
                  color: "#131516",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#6B6A70", margin: 0 }}>{p.desc}</p>
            </div>
            <span style={{ fontSize: 13.5, color: "#494848" }}>{p.location}</span>
            <span style={{ fontSize: 13.5, color: "#494848" }}>{p.type}</span>
            <a
              href="mailto:hola@allons.app?subject=Aplicación: ${p.title}"
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                background: "#131516",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Aplicar
            </a>
          </div>
        ))}
      </div>

      <h2
        style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "-0.02em",
          margin: "0 0 24px",
          color: "#131516",
        }}
      >
        Lo que ofrecemos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          paddingBottom: 80,
        }}
        className="perks-grid"
      >
        {PERKS.map((perk) => (
          <div
            key={perk}
            style={{
              background: "#FAF7F2",
              border: "1px solid #EAE8E4",
              borderRadius: 14,
              padding: "18px 20px",
              fontSize: 14.5,
              color: "#2B2A2F",
              display: "flex",
              gap: 10,
            }}
          >
            <span style={{ color: "#F67010" }}>✓</span>
            {perk}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .job-row { grid-template-columns: 1fr !important; }
          .perks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
