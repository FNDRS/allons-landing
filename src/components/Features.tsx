function Ic({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "color-mix(in srgb, var(--color-liquid-lava) 12%, transparent)",
        color: "var(--color-liquid-lava)",
        display: "grid",
        placeItems: "center",
        marginBottom: 16,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function IcDark({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "rgba(246,112,16,0.15)",
        color: "var(--color-liquid-lava)",
        display: "grid",
        placeItems: "center",
        marginBottom: 16,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

const STROKE = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function Features() {
  return (
    <section id="features" style={{ padding: "100px 0" }}>
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
          Producto
        </div>

        <h1
          className="ds-display-lg"
          style={{
            margin: "0 0 18px",
            color: "var(--color-gluon-grey)",
            maxWidth: 780,
          }}
        >
          Todo lo que necesitas para{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>llenar la sala.</span>
        </h1>

        <p className="ds-lead" style={{ color: "var(--color-dusty-grey)", maxWidth: 620, margin: "0 0 40px" }}>
          Publicas tu evento, vendes entradas y revisas cómo va todo desde un mismo lugar. Sin saltar entre apps ni armar reportes a mano en excel.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "minmax(220px, auto)",
            gap: 16,
          }}
          className="bento-grid"
        >
          <div
            className="bento-t1"
            style={{
              background: "var(--color-gluon-grey)",
              border: "1px solid var(--color-gluon-grey)",
              borderRadius: 20,
              padding: 26,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              color: "var(--color-snow)",
            }}
          >
            <IcDark>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
              </svg>
            </IcDark>
            <h2
              className="ds-display-sm"
              style={{
                margin: "0 0 10px",
                color: "var(--color-snow)",
              }}
            >
              Un panel que ya se siente como tu oficina.
            </h2>
            <p className="ds-lead" style={{ color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: 420 }}>
              Ingresos, reservas y reseñas actualizándose en tiempo real. Con gráficos claros y acciones rápidas cuando algo necesita tu atención.
            </p>

            <div
              style={{
                marginTop: 22,
                background: "#2B2A2F",
                borderRadius: 14,
                padding: 14,
                border: "1px solid #3A3940",
                display: "grid",
                gap: 10,
              }}
            >
              {[
                { label: "Ingresos mensuales", value: "L. 487k", delta: "▲ 12%", up: true },
                { label: "Tickets vendidos", value: "3,214", delta: "▲ 8%", up: true },
                { label: "Calificación promedio", value: "4.82 / 5", delta: null, up: false },
              ].map((row) => (
                <div
                  key={row.label}
                  className="ds-body"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 10,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  <span>{row.label}</span>
                  <b className="ds-h2" style={{ color: "var(--color-snow)" }}>
                    {row.value}{" "}
                    {row.delta && (
                      <span style={{ color: "var(--color-emerald-green)" }}>{row.delta}</span>
                    )}
                  </b>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-t2" style={{ background: "var(--color-snow)", border: "1px solid var(--color-line)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" />
                <path d="M14 6v12" strokeDasharray="1.5 2.5" />
              </svg>
            </Ic>
            <h2 className="ds-h2" style={{ margin: "0 0 8px", color: "var(--color-gluon-grey)" }}>Ticketing flexible</h2>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", margin: 0, maxWidth: 340 }}>
              Crea entradas VIP, general, palco, graderías. Aplica códigos, cupos por persona y reservas con pago en línea o en el local.
            </p>
          </div>

          <div className="bento-t3" style={{ background: "var(--color-snow)", border: "1px solid var(--color-line)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <path d="M3 10h18M16 15h2" />
              </svg>
            </Ic>
            <h2 className="ds-h2" style={{ margin: "0 0 8px", color: "var(--color-gluon-grey)" }}>Cobra en Lempiras, al instante</h2>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", margin: 0, maxWidth: 340 }}>
              Desembolsos semanales a tu BAC o Ficohsa. Comisión desde 5%. Sin mínimos, sin costos ocultos, sin tarjetas de crédito bloqueadas.
            </p>
          </div>

          <div className="bento-t4" style={{ background: "var(--color-snow)", border: "1px solid var(--color-line)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M3 12V4h8l10 10-8 8Z" />
                <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
              </svg>
            </Ic>
            <h2 className="ds-h2" style={{ margin: "0 0 8px", color: "var(--color-gluon-grey)" }}>Promociones</h2>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", margin: 0 }}>
              Early-bird, códigos por comunidad, descuentos por volumen.
            </p>
          </div>

          <div className="bento-t5" style={{ background: "var(--color-snow)", border: "1px solid var(--color-line)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <circle cx="9" cy="8" r="4" />
                <path d="M2 21a7 7 0 0 1 14 0" />
                <circle cx="17" cy="8" r="3" />
                <path d="M22 20a5 5 0 0 0-5-5" />
              </svg>
            </Ic>
            <h2 className="ds-h2" style={{ margin: "0 0 8px", color: "var(--color-gluon-grey)" }}>Audiencia propia</h2>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", margin: 0 }}>
              Sigue a tus fans, notifícales nuevos eventos, mide su LTV.
            </p>
          </div>

          <div className="bento-t6" style={{ background: "var(--color-snow)", border: "1px solid var(--color-line)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M12 3.5 14.3 9l5.7.5-4.3 3.9 1.3 5.6L12 16.3 6.9 19l1.3-5.6L4 9.5 9.7 9Z" />
              </svg>
            </Ic>
            <h2 className="ds-h2" style={{ margin: "0 0 8px", color: "var(--color-gluon-grey)" }}>Reseñas y NPS</h2>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", margin: 0 }}>
              Recoge feedback post-evento. Entiende qué mejora y qué enamora.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bento-t1, .bento-t2, .bento-t3, .bento-t4, .bento-t5, .bento-t6 { grid-column: span 2 !important; }
        }
        .bento-t1 { grid-column: span 3; grid-row: span 2; }
        .bento-t2 { grid-column: span 3; }
        .bento-t3 { grid-column: span 3; }
        .bento-t4 { grid-column: span 2; }
        .bento-t5 { grid-column: span 2; }
        .bento-t6 { grid-column: span 2; }
      `}</style>
    </section>
  );
}
