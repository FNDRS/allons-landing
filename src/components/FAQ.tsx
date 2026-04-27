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
          {/* Left */}
          <div>
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
              Preguntas frecuentes
            </div>

            <h2
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: "clamp(32px, 3.6vw, 48px)",
                letterSpacing: "-0.028em",
                lineHeight: 1.05,
                margin: "0 0 18px",
                color: "#131516",
              }}
            >
              Antes de{" "}
              <span style={{ color: "#F67010", fontStyle: "italic" }}>empezar.</span>
            </h2>

            <p style={{ fontSize: 17, color: "#494848", marginTop: 10 }}>
              ¿Algo más? Escríbenos a{" "}
              <a
                href="mailto:hola@allons.app"
                style={{ color: "#F67010", textDecoration: "underline" }}
              >
                hola@allons.app
              </a>
              .
            </p>
          </div>

          {/* Right — accordion */}
          <div style={{ borderTop: "1px solid #EAE8E4" }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid #EAE8E4",
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
                  <h4
                    style={{
                      fontFamily: "var(--font-urbanist)",
                      fontWeight: 600,
                      fontSize: 17,
                      letterSpacing: "-0.01em",
                      margin: 0,
                      color: "#131516",
                    }}
                  >
                    {faq.q}
                  </h4>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: open === i ? "#131516" : "#F3F3F3",
                      color: open === i ? "#fff" : "#2B2A2F",
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
                  style={{
                    maxHeight: open === i ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 260ms ease",
                    color: "#494848",
                    fontSize: 14.5,
                    paddingTop: open === i ? 12 : 0,
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
