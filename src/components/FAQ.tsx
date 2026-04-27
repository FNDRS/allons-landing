"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Puedo tener varios eventos activos al mismo tiempo?",
    a: "Sí, sin límite. Cada evento tiene su propio panel, su propio link de venta y sus propios reportes. Puedes manejarlos todos desde la misma cuenta.",
  },

  {
    q: "¿Cómo llega la entrada al asistente?",
    a: "Al completar la compra, el sistema le manda el QR por correo de forma automática. También puede descargarlo desde el link de confirmación.",
  },

  {
    q: "¿Qué pasa si cancelo mi evento?",
    a: "Puedes cancelarlo desde el panel en cualquier momento. ALLONS notifica a los compradores y, si tu política lo indica, gestiona los reembolsos sin que tengas que hacer nada manual.",
  },

  {
    q: "¿Cómo compran las entradas los asistentes?",
    a: "Todo pasa desde la app de ALLONS, disponible para iOS y Android. Buscan el evento, eligen su entrada, pagan y listo: el QR queda guardado ahí mismo para presentarlo en la puerta.",
  },

  {
    q: "¿Cómo valido las entradas en la puerta?",
    a: "Desde la misma app de ALLONS en modo organizador. Escaneas el QR del asistente y la app te indica al instante si es válido, ya fue usado o es falso.",
  },

  {
    q: "¿Puedo ver en tiempo real cuántas entradas se han vendido?",
    a: "Sí. El panel del organizador se actualiza en vivo. Ves ventas, ingresos y asistencia conforme va pasando, sin necesidad de refrescar ni exportar nada.",
  },

  {
    q: "¿Mis datos y los de mis compradores están seguros?",
    a: "Sí. Las transacciones van cifradas y no almacenamos datos de tarjeta. Cumplimos con los estándares de seguridad de pagos en línea.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "flex-start" }}
          className="faq-grid"
        >
          <div>
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
              Preguntas frecuentes
            </div>

            <h1
              className="ds-display-lg"
              style={{
                margin: "0 0 18px",
                color: "var(--color-gluon-grey)",
              }}
            >
              Antes de{" "}
              <span style={{ color: "var(--color-liquid-lava)" }}>empezar.</span>
            </h1>

            <p className="ds-lead" style={{ color: "var(--color-dusty-grey)", marginTop: 10 }}>
              ¿Algo más? Escríbenos a{" "}
              <a
                href="mailto:soporte@allonsapp.com"
                style={{ color: "var(--color-liquid-lava)", textDecoration: "underline" }}
              >
                soporte@allonsapp.com
              </a>
              .
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--color-line)" }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid var(--color-line)",
                  padding: "20px 0",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <h2
                    className="ds-h2"
                    style={{
                      margin: 0,
                      color: "var(--color-gluon-grey)",
                      fontWeight: open === i ? 600 : 500,
                    }}
                  >
                    {faq.q}
                  </h2>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: open === i ? "var(--color-gluon-grey)" : "var(--color-ink-100)",
                      color: open === i ? "var(--color-snow)" : "var(--color-ink-700)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      transform: open === i ? "rotate(45deg)" : "none",
                      transition: "transform 200ms, background 200ms",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </div>

                <div
                  className="ds-body"
                  style={{
                    maxHeight: open === i ? 220 : 0,
                    overflow: "hidden",
                    transition: "max-height 260ms ease",
                    color: "var(--color-dusty-grey)",
                    paddingTop: open === i ? 12 : 0,
                    lineHeight: 1.6,
                  }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
      `}</style>
    </section>
  );
}
