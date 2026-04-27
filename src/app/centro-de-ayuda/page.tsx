import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Centro de ayuda · ALLONS",
  description: "Guías, tutoriales y respuestas para que saques el máximo provecho de ALLONS.",
};

const TOPICS = [
  {
    title: "Empezando",
    desc: "Crea tu cuenta y publica tu primer evento.",
    icon: "🚀",
    articles: [
      "Cómo crear tu cuenta de organizador",
      "Verificación de identidad y RTN",
      "Publicar tu primer evento en 5 minutos",
      "Configurar tu cuenta bancaria",
    ],
  },
  {
    title: "Venta y entradas",
    desc: "Tipos de entrada, descuentos y reembolsos.",
    icon: "🎟️",
    articles: [
      "Crear diferentes tipos de entrada",
      "Configurar códigos de descuento",
      "Política de reembolsos",
      "Pago en el local vs venta en línea",
    ],
  },
  {
    title: "Cobros y desembolsos",
    desc: "Cómo recibes tu dinero y cuándo.",
    icon: "💸",
    articles: [
      "Calendario de desembolsos",
      "Cambiar de cuenta bancaria",
      "Cómo se calcula la comisión",
      "Facturación con RTN",
    ],
  },
  {
    title: "Día del evento",
    desc: "Validación en puerta y operación en vivo.",
    icon: "📲",
    articles: [
      "Escaneo de QR con la app",
      "Permisos para staff y validadores",
      "Qué hacer si un asistente no encuentra su QR",
      "Cierre de caja del evento",
    ],
  },
  {
    title: "Reportes y datos",
    desc: "Lee tus números y exporta lo que necesites.",
    icon: "📊",
    articles: [
      "Reporte de ventas en vivo",
      "Embudo de conversión",
      "Exportar lista de asistentes",
      "Asistencia vs vendido",
    ],
  },
  {
    title: "Para asistentes",
    desc: "La app del usuario que compra entradas.",
    icon: "🙋",
    articles: [
      "Descargar la app de ALLONS",
      "Comprar una entrada",
      "Encontrar mi QR de acceso",
      "Pedir un reembolso",
    ],
  },
];

export default function CentroDeAyudaPage() {
  return (
    <PageShell
      eyebrow="Centro de ayuda"
      title={
        <>
          ¿En qué te podemos{" "}
          <span style={{ color: "#F67010" }}>echar la mano?</span>
        </>
      }
      subtitle="Encuentra la respuesta rápido. Y si lo que buscas no está aquí, escríbenos a hola@allons.app."
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #EAE8E4",
          borderRadius: 16,
          padding: "18px 22px",
          marginTop: 32,
          marginBottom: 60,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B6A70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Buscar artículos, guías o preguntas…"
          style={{
            border: "none",
            outline: "none",
            fontSize: 15,
            flex: 1,
            background: "transparent",
            color: "#131516",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
          paddingBottom: 80,
        }}
        className="help-grid"
      >
        {TOPICS.map((topic) => (
          <div
            key={topic.title}
            style={{
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 26, marginBottom: 10 }}>{topic.icon}</div>
            <h3
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 600,
                fontSize: 17,
                margin: "0 0 6px",
                color: "#131516",
              }}
            >
              {topic.title}
            </h3>
            <p style={{ fontSize: 13.5, color: "#6B6A70", margin: "0 0 16px" }}>
              {topic.desc}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {topic.articles.map((article) => (
                <li key={article}>
                  <a
                    href="#"
                    style={{
                      fontSize: 14,
                      color: "#2B2A2F",
                      textDecoration: "none",
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: "#F67010" }}>›</span>
                    {article}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 980px) {
          .help-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 720px) {
          .help-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
