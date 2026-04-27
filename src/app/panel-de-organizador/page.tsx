import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Panel de organizador · ALLONS",
  description:
    "Un solo panel para crear, vender y operar tus eventos. Reportes en vivo, validación en puerta y control total desde tu celular.",
};

const SECTIONS = [
  {
    title: "Crea tu evento",
    desc: "Define tipos de entrada, agrega ubicación y publica en minutos.",
    bullets: [
      "Tipos de entrada ilimitados",
      "Programación de fechas y cupos",
      "Vista previa antes de publicar",
      "Publica en minutos",
    ],
  },
  {
    title: "Vende y promociona",
    desc: "Comparte tu link, lanza descuentos y mide cada canal de venta.",
    bullets: [
      "Link único por evento",
      "Códigos de descuento",
      "Reportes por canal",
    ],
  },
  {
    title: "Opera el día del evento",
    desc: "Escanea entradas, gestiona staff y resuelve incidencias en vivo.",
    bullets: [
      "Escaneo de QR ilimitado",
      "Permisos por colaborador",
      "Búsqueda manual en lista",
      "Bitácora de validaciones",
    ],
  },
  {
    title: "Mide y mejora",
    desc: "Reportes claros para entender qué funcionó y qué no, sin pelear con Excel.",
    bullets: [
      "Ventas e ingresos en vivo",
      "Embudo de conversión",
      "Asistencia vs vendido",
      "Exportación a CSV, PDF y Excel",
    ],
  },
];

export default function PanelPage() {
  return (
    <PageShell
      eyebrow="Panel de organizador"
      title={
        <>
          Tu evento, controlado{" "}
          <span style={{ color: "#F67010" }}>desde un solo lugar.</span>
        </>
      }
      subtitle="Olvídate de saltar entre apps, hojas de cálculo y mensajes de WhatsApp. Todo lo que necesitas para llenar la sala vive en el panel."
    >
      <div
        style={{
          background: "#131516",
          color: "#fff",
          borderRadius: 22,
          padding: "60px 40px",
          marginTop: 40,
          marginBottom: 60,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 16px",
          }}
        >
          Próximamente — vista previa
        </p>
        <h2
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          El dashboard que vas a abrir todos los días.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 18,
          paddingBottom: 80,
        }}
        className="panel-grid"
      >
        {SECTIONS.map((section, i) => (
          <div
            key={section.title}
            style={{
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 18,
              padding: 28,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 11,
                color: "#F67010",
                letterSpacing: "0.1em",
              }}
            >
              0{i + 1}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: "-0.015em",
                margin: "8px 0 8px",
                color: "#131516",
              }}
            >
              {section.title}
            </h3>
            <p style={{ fontSize: 15, color: "#494848", margin: "0 0 16px", lineHeight: 1.55 }}>
              {section.desc}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {section.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    fontSize: 14,
                    color: "#2B2A2F",
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#F67010" }}>›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .panel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
