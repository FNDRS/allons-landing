import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "ALLONS nació en Honduras con una idea simple: que organizar un evento sea tan emocionante como vivirlo.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
};

const VALUES = [
  {
    title: "Hecho aquí",
    desc: "Diseñado, programado y operado en Honduras. Entendemos el mercado porque somos parte de él.",
  },
  {
    title: "Sin letra chica",
    desc: "Lo que ves es lo que pagas. Cero cuotas escondidas, cero contratos perpetuos.",
  },
  {
    title: "Cerca del organizador",
    desc: "Te respondemos en español, en horario que conoces y por los canales que usas todos los días.",
  },
  {
    title: "Construyendo en abierto",
    desc: "Cuando sumamos algo o lo arreglamos, lo dejamos por escrito en Cambios & novedades. Así sabes qué tocamos y por qué.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <PageShell
      eyebrow="Sobre nosotros"
      title={
        <>
          Una herramienta hondureña para los que{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>llenan salas.</span>
        </>
      }
      subtitle="ALLONS nació porque organizar un evento en Honduras todavía se siente como armar un rompecabezas y mucho trabajo en papel o excel. Queremos cambiar eso."
    >
      <div
        style={{
          background: "color-mix(in srgb, var(--color-liquid-lava) 6%, var(--color-snow))",
          border: "1px solid var(--color-line)",
          borderRadius: 22,
          padding: "40px 36px",
          marginTop: 40,
          marginBottom: 48,
        }}
      >
        <h2
          className="ds-display-md"
          style={{
            margin: "0 0 18px",
            color: "var(--color-gluon-grey)",
          }}
        >
          Nuestra historia
        </h2>
        <p className="ds-lead" style={{ color: "var(--color-ink-700)", lineHeight: 1.7, margin: "0 0 14px" }}>
          ALLONS empezó en una conversación entre amigos que organizaban eventos pequeños en Tegucigalpa. Cada vez que querían vender entradas, terminaban usando tres herramientas distintas: una para crear el flyer, otra para cobrar, otra para llevar la lista en la puerta.
        </p>
        <p className="ds-lead" style={{ color: "var(--color-ink-700)", lineHeight: 1.7, margin: "0 0 14px" }}>
          Las plataformas globales eran caras, complicadas, y ni siquiera entendían lempiras. Decidimos construir lo que nos hubiera gustado tener.
        </p>
        <p className="ds-lead" style={{ color: "var(--color-ink-700)", lineHeight: 1.7, margin: 0 }}>
          Hoy ALLONS es una plataforma que cualquier organizador en Honduras puede usar para crear, vender y operar su evento sin pelearse con la tecnología.
        </p>
      </div>

      <h2
        className="ds-display-md"
        style={{
          margin: "60px 0 24px",
          color: "var(--color-gluon-grey)",
        }}
      >
        En qué creemos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 18,
          paddingBottom: 80,
        }}
        className="values-grid"
      >
        {VALUES.map((v) => (
          <div
            key={v.title}
            style={{
              background: "var(--color-snow)",
              border: "1px solid var(--color-line)",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h2
              className="ds-h2"
              style={{
                margin: "0 0 8px",
                color: "var(--color-gluon-grey)",
              }}
            >
              {v.title}
            </h2>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", margin: 0, lineHeight: 1.6 }}>
              {v.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
