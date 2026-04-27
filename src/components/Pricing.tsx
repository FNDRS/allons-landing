"use client";

import { useState } from "react";

const CHECK = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-liquid-lava)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        background: "var(--color-snow)",
        borderTop: "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="ds-chip-active"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--color-liquid-lava)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--color-liquid-lava)" }} />
          Precios
        </div>

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
            <h1
              className="ds-display-lg"
              style={{
                margin: "0 0 10px",
                color: "var(--color-gluon-grey)",
              }}
            >
              Empieza gratis.{" "}
              <span style={{ color: "var(--color-liquid-lava)" }}>Crece sin sorpresas.</span>
            </h1>
            <p className="ds-lead" style={{ color: "var(--color-dusty-grey)", margin: 0 }}>
              Paga solo cuando vendas. Sin suscripciones obligatorias.
            </p>
          </div>

          <div
            style={{
              display: "inline-flex",
              padding: 4,
              background: "var(--color-ink-100)",
              borderRadius: 10,
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setAnnual(false)}
              className={annual ? "ds-chip" : "ds-chip-active"}
              style={{
                all: "unset",
                cursor: "pointer",
                padding: "8px 16px",
                color: annual ? "var(--color-dusty-grey)" : "var(--color-gluon-grey)",
                borderRadius: 7,
                background: annual ? "transparent" : "var(--color-snow)",
                boxShadow: annual ? "none" : "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              Por evento
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={annual ? "ds-chip-active" : "ds-chip"}
              style={{
                all: "unset",
                cursor: "pointer",
                padding: "8px 16px",
                color: annual ? "var(--color-gluon-grey)" : "var(--color-dusty-grey)",
                borderRadius: 7,
                background: annual ? "var(--color-snow)" : "transparent",
                boxShadow: annual ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              Anual{" "}
              <span className="ds-chip" style={{ color: "var(--color-emerald-green)", marginLeft: 6 }}>
                -20%
              </span>
            </button>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }}
          className="pricing-grid"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? "var(--color-gluon-grey)" : "var(--color-snow)",
                color: plan.featured ? "var(--color-snow)" : "var(--color-gluon-grey)",
                border: plan.featured ? "1px solid var(--color-gluon-grey)" : "1px solid var(--color-line)",
                borderRadius: 20,
                padding: 32,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transform: plan.featured ? "translateY(-8px)" : undefined,
                boxShadow: plan.featured ? "0 30px 60px -20px rgba(28,27,32,0.25)" : undefined,
              }}
            >
              {plan.tag && (
                <span
                  className="ds-chip-active"
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "var(--color-liquid-lava)",
                    color: "var(--color-snow)",
                    letterSpacing: "0.04em",
                    padding: "4px 10px",
                    borderRadius: 999,
                    textTransform: "uppercase",
                  }}
                >
                  {plan.tag}
                </span>
              )}

              <h2
                className="ds-h2"
                style={{
                  margin: "0 0 6px",
                  color: plan.featured ? "var(--color-snow)" : "var(--color-gluon-grey)",
                }}
              >
                {plan.name}
              </h2>

              <div
                className="ds-body"
                style={{
                  color: plan.featured ? "rgba(255,255,255,0.55)" : "var(--color-dusty-grey)",
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
                  className="ds-display-md"
                  style={{
                    color: plan.featured ? "var(--color-snow)" : "var(--color-gluon-grey)",
                  }}
                >
                  {annual ? plan.priceAnnual : plan.priceEvent}
                </span>
                {(annual ? plan.unitAnnual : plan.unitEvent) && (
                  <span
                    className="ds-body"
                    style={{
                      color: plan.featured ? "rgba(255,255,255,0.55)" : "var(--color-dusty-grey)",
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
                    className="ds-body"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      color: plan.featured ? "rgba(255,255,255,0.8)" : "var(--color-ink-700)",
                    }}
                  >
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta === "Hablar con ventas" ? "/ventas" : "/registro"}
                className="ds-btn ds-btn-active"
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 18px",
                  borderRadius: 10,
                  cursor: "pointer",
                  background:
                    plan.ctaStyle === "accent"
                      ? "var(--color-liquid-lava)"
                      : plan.featured
                      ? "transparent"
                      : "var(--color-snow)",
                  color:
                    plan.ctaStyle === "accent"
                      ? "var(--color-snow)"
                      : plan.featured
                      ? "var(--color-snow)"
                      : "var(--color-gluon-grey)",
                  border:
                    plan.featured
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "1px solid var(--color-line)",
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
