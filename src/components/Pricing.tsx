"use client";

import { useState } from "react";

const CHECK = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F67010" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 13 4 4 10-10" />
  </svg>
);

const PLANS = [
  {
    name: "Starter",
    sub: "Para el primer evento o colectivos pequeños.",
    priceEvent: "Gratis",
    priceAnnual: "Gratis",
    unitEvent: null,
    unitAnnual: null,
    features: ["Hasta 2 eventos activos", "Ticketing básico + QR", "Comisión del 8%", "Soporte por correo"],
    cta: "Crear cuenta",
    ctaStyle: "outline" as const,
    featured: false,
  },
  {
    name: "Pro",
    sub: "Para productoras y venues que organizan seguido.",
    priceEvent: "5%",
    priceAnnual: "4%",
    unitEvent: "por ticket vendido",
    unitAnnual: "por ticket · plan anual",
    features: ["Eventos ilimitados", "Promociones y códigos avanzados", "Panel de analítica + reseñas", "Exportación de asistentes", "Soporte prioritario · 8h"],
    cta: "Empezar 14 días gratis",
    ctaStyle: "accent" as const,
    featured: true,
    tag: "Recomendado",
  },
  {
    name: "Scale",
    sub: "Para festivales, tours y operaciones en varias ciudades.",
    priceEvent: "A medida",
    priceAnnual: "A medida",
    unitEvent: null,
    unitAnnual: null,
    features: ["Comisión negociada", "Multi-equipo con roles", "API + integraciones", "Ejecutivo de cuenta dedicado", "Reportería contable avanzada"],
    cta: "Hablar con ventas",
    ctaStyle: "outline" as const,
    featured: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      style={{
        padding: "100px 0",
        background: "#fff",
        borderTop: "1px solid #EAE8E4",
        borderBottom: "1px solid #EAE8E4",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        {/* Kicker */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-jetbrains)",
            fontSize: 11,
            color: "#F67010",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: 14,
          }}
        >
          <span style={{ display: "inline-block", width: 20, height: 1, background: "#F67010" }} />
          Precios
        </div>

        {/* Head row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
            marginBottom: 36,
          }}
          className="price-head-row"
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: "clamp(32px, 3.6vw, 48px)",
                letterSpacing: "-0.028em",
                lineHeight: 1.05,
                margin: "0 0 10px",
                color: "#131516",
              }}
            >
              Empieza gratis.{" "}
              <span style={{ color: "#F67010", fontStyle: "italic" }}>Crece sin sorpresas.</span>
            </h2>
            <p style={{ fontSize: 17, color: "#494848", margin: 0 }}>
              Paga solo cuando vendas. Sin suscripciones obligatorias.
            </p>
          </div>

          {/* Toggle */}
          <div
            style={{
              display: "inline-flex",
              padding: 4,
              background: "#F3F3F3",
              borderRadius: 10,
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setAnnual(false)}
              style={{
                all: "unset",
                cursor: "pointer",
                padding: "8px 16px",
                fontSize: 13.5,
                fontWeight: 500,
                color: annual ? "#6B6A70" : "#131516",
                borderRadius: 7,
                background: annual ? "transparent" : "#fff",
                boxShadow: annual ? "none" : "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              Por evento
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                all: "unset",
                cursor: "pointer",
                padding: "8px 16px",
                fontSize: 13.5,
                fontWeight: 500,
                color: annual ? "#131516" : "#6B6A70",
                borderRadius: 7,
                background: annual ? "#fff" : "transparent",
                boxShadow: annual ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              Anual{" "}
              <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: 10.5, color: "#1E8755", marginLeft: 6 }}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }}
          className="pricing-grid"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? "#131516" : "#fff",
                color: plan.featured ? "#fff" : "#131516",
                border: plan.featured ? "1px solid #131516" : "1px solid #EAE8E4",
                borderRadius: 20,
                padding: 32,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transform: plan.featured ? "translateY(-8px)" : undefined,
                boxShadow: plan.featured ? "0 30px 60px -20px rgba(19,21,22,0.25)" : undefined,
              }}
            >
              {plan.tag && (
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "#F67010",
                    color: "#fff",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 10.5,
                    letterSpacing: "0.1em",
                    padding: "4px 10px",
                    borderRadius: 999,
                    textTransform: "uppercase",
                  }}
                >
                  {plan.tag}
                </span>
              )}

              <h3
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: "-0.015em",
                  margin: "0 0 6px",
                  color: plan.featured ? "#fff" : "#131516",
                }}
              >
                {plan.name}
              </h3>

              <div
                style={{
                  fontSize: 13,
                  color: plan.featured ? "rgba(255,255,255,0.55)" : "#6B6A70",
                  marginBottom: 22,
                }}
              >
                {plan.sub}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 700,
                    fontSize: 44,
                    letterSpacing: "-0.03em",
                    color: plan.featured ? "#fff" : "#131516",
                  }}
                >
                  {annual ? plan.priceAnnual : plan.priceEvent}
                </span>
                {(annual ? plan.unitAnnual : plan.unitEvent) && (
                  <span
                    style={{
                      fontSize: 14,
                      color: plan.featured ? "rgba(255,255,255,0.55)" : "#6B6A70",
                    }}
                  >
                    {annual ? plan.unitAnnual : plan.unitEvent}
                  </span>
                )}
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      color: plan.featured ? "rgba(255,255,255,0.8)" : "#2B2A2F",
                    }}
                  >
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 18px",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  background:
                    plan.ctaStyle === "accent"
                      ? "#F67010"
                      : plan.featured
                      ? "transparent"
                      : "#fff",
                  color:
                    plan.ctaStyle === "accent"
                      ? "#fff"
                      : plan.featured
                      ? "#fff"
                      : "#131516",
                  border:
                    plan.featured
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "1px solid #E7E7E7",
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .price-head-row { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
