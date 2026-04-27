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
          <span style={{ color: "#F67010" }}>llenan salas.</span>
        </>
      }
      subtitle="ALLONS nació porque organizar un evento en Honduras todavía se siente como armar un rompecabezas y mucho trabajo en papel o excel. Queremos cambiar eso."
    >
      <div
        style={{
          background: "#FAF7F2",
          border: "1px solid #EAE8E4",
          borderRadius: 22,
          padding: "48px 40px",
          marginTop: 40,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
            color: "#131516",
          }}
        >
          Nuestra historia
        </h2>
        <p style={{ fontSize: 16, color: "#2B2A2F", lineHeight: 1.7, margin: "0 0 14px" }}>
          ALLONS empezó en una conversación entre amigos que organizaban eventos pequeños en Tegucigalpa. Cada vez que querían vender entradas, terminaban usando tres herramientas distintas: una para crear el flyer, otra para cobrar, otra para llevar la lista en la puerta.
        </p>
        <p style={{ fontSize: 16, color: "#2B2A2F", lineHeight: 1.7, margin: "0 0 14px" }}>
          Las plataformas globales eran caras, complicadas, y ni siquiera entendían lempiras. Decidimos construir lo que nos hubiera gustado tener.
        </p>
        <p style={{ fontSize: 16, color: "#2B2A2F", lineHeight: 1.7, margin: 0 }}>
          Hoy ALLONS es una plataforma que cualquier organizador en Honduras puede usar para crear, vender y operar su evento sin pelearse con la tecnología.
        </p>
      </div>

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
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 600,
                fontSize: 18,
                margin: "0 0 8px",
                color: "#131516",
              }}
            >
              {v.title}
            </h3>
            <p style={{ fontSize: 15, color: "#494848", margin: 0, lineHeight: 1.6 }}>
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
