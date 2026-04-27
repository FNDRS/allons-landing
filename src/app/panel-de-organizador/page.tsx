import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Panel de organizador",
  description:
    "Un solo panel para crear, vender y operar tus eventos. Reportes en vivo, validación en puerta y control total desde tu celular.",
  alternates: {
    canonical: "/panel-de-organizador",
  },
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
          <span style={{ color: "var(--color-liquid-lava)" }}>desde un solo lugar.</span>
        </>
      }
      subtitle="Olvídate de saltar entre apps, hojas de cálculo y mensajes de WhatsApp. Todo lo que necesitas para llenar la sala vive en el panel."
    >
      <div
        style={{
          background: "var(--color-gluon-grey)",
          color: "var(--color-snow)",
          borderRadius: 22,
          padding: "48px 40px",
          marginTop: 40,
          marginBottom: 48,
          textAlign: "center",
        }}
      >
        <p
          className="ds-chip-active"
          style={{
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 16px",
          }}
        >
          Próximamente — vista previa
        </p>
        <h2
          className="ds-display-md"
          style={{
            margin: 0,
            color: "var(--color-snow)",
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
              background: "var(--color-snow)",
              border: "1px solid var(--color-line)",
              borderRadius: 18,
              padding: 28,
            }}
          >
            <span
              className="ds-chip-active"
              style={{
                color: "var(--color-liquid-lava)",
                letterSpacing: "0.04em",
              }}
            >
              0{i + 1}
            </span>
            <h2
              className="ds-h2"
              style={{
                margin: "8px 0 8px",
                color: "var(--color-gluon-grey)",
              }}
            >
              {section.title}
            </h2>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", margin: "0 0 16px", lineHeight: 1.6 }}>
              {section.desc}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {section.bullets.map((b) => (
                <li
                  key={b}
                  className="ds-body"
                  style={{
                    color: "var(--color-ink-700)",
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "var(--color-liquid-lava)" }}>›</span>
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
