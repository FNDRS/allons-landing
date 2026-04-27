import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Precios · ALLONS",
  description:
    "Sin cuota mensual, sin costo de activación. Solo pagas una pequeña comisión cuando vendes una entrada.",
};

const PLANS = [
  {
    name: "Gratuito",
    price: "Gratis",
    desc: "Para eventos sin costo de entrada.",
    fee: "0%",
    feeNote: "Sin comisión por entrada gratuita.",
    features: [
      "Eventos ilimitados",
      "Lista de asistentes",
      "Escaneo de QR en puerta",
      "Soporte por correo",
    ],
    highlight: false,
  },
  {
    name: "Estándar",
    price: "5%",
    priceSuffix: "+ L. 5",
    desc: "Para eventos con venta de entradas. La comisión se cobra al asistente.",
    fee: "5% + L. 5",
    feeNote: "Por entrada vendida. Sin cuota mensual.",
    features: [
      "Todo lo del plan gratuito",
      "Cobros con tarjeta",
      "Desembolsos semanales en HNL",
      "Códigos de descuento",
      "Reportes en tiempo real",
      "Soporte por WhatsApp",
    ],
    highlight: true,
  },
  {
    name: "Empresarial",
    price: "A medida",
    desc: "Para productoras con alto volumen, festivales o varias salas.",
    fee: "Negociable",
    feeNote: "Tarifa según volumen anual.",
    features: [
      "Todo lo del plan estándar",
      "Cuenta multi-organizador",
      "Manager dedicado",
      "Integración con tus sistemas",
      "Acceso a API",
      "SLA y soporte prioritario",
    ],
    highlight: false,
  },
];

export default function PreciosPage() {
  return (
    <PageShell
      eyebrow="Precios"
      title={
        <>
          Sin cuotas. Sin sorpresas.{" "}
          <span style={{ color: "#F67010" }}>Solo pagas cuando vendes.</span>
        </>
      }
      subtitle="Olvídate de cuotas mensuales o costos de activación. ALLONS gana cuando tú ganas."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
          margin: "40px 0 80px",
        }}
        className="pricing-grid"
      >
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            style={{
              background: plan.highlight ? "#131516" : "#fff",
              color: plan.highlight ? "#fff" : "#131516",
              border: `1px solid ${plan.highlight ? "#131516" : "#EAE8E4"}`,
              borderRadius: 22,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {plan.highlight && (
              <span
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "#F67010",
                  color: "#fff",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                Más popular
              </span>
            )}

            <h3
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 600,
                fontSize: 18,
                margin: "0 0 6px",
              }}
            >
              {plan.name}
            </h3>

            <p
              style={{
                fontSize: 14,
                color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6B6A70",
                margin: "0 0 20px",
              }}
            >
              {plan.desc}
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 700,
                  fontSize: 40,
                  letterSpacing: "-0.02em",
                }}
              >
                {plan.price}
              </span>
              {plan.priceSuffix && (
                <span style={{ fontSize: 16, color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6B6A70" }}>
                  {plan.priceSuffix}
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: 13,
                color: plan.highlight ? "rgba(255,255,255,0.6)" : "#6B6A70",
                margin: "0 0 24px",
              }}
            >
              {plan.feeNote}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
              {plan.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontSize: 14,
                    color: plan.highlight ? "rgba(255,255,255,0.85)" : "#2B2A2F",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "#F67010", marginTop: 2 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              style={{
                marginTop: "auto",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px 18px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 14,
                background: plan.highlight ? "#F67010" : "transparent",
                color: plan.highlight ? "#fff" : "#131516",
                border: plan.highlight ? "1px solid #F67010" : "1px solid #131516",
              }}
            >
              {plan.name === "Empresarial" ? "Hablar con ventas" : "Empezar gratis"}
            </a>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#FAF7F2",
          border: "1px solid #EAE8E4",
          borderRadius: 22,
          padding: 32,
          marginBottom: 80,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 600,
            fontSize: 22,
            margin: "0 0 12px",
            color: "#131516",
          }}
        >
          Preguntas comunes
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="pricing-faq">
          {[
            {
              q: "¿Quién paga la comisión?",
              a: "Por defecto se le suma al precio del asistente, así tú recibes el monto íntegro. También puedes absorberla si prefieres.",
            },
            {
              q: "¿Hay costo de activación?",
              a: "No. Crear cuenta, publicar tu evento y empezar a vender es gratis.",
            },
            {
              q: "¿Cuándo recibo mi dinero?",
              a: "Cada viernes procesamos los desembolsos. Llega a tu cuenta bancaria en máximo 2 días hábiles.",
            },
            {
              q: "¿Qué pasa con eventos gratuitos?",
              a: "ALLONS no cobra nada por entradas gratuitas. Úsalo libre para reuniones, capacitaciones o eventos comunitarios.",
            },
          ].map((f) => (
            <div key={f.q}>
              <h4 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 600, fontSize: 15, margin: "0 0 6px", color: "#131516" }}>
                {f.q}
              </h4>
              <p style={{ fontSize: 14, color: "#494848", margin: 0, lineHeight: 1.55 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-faq { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
