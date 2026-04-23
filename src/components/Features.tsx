function Ic({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#FFF1E6",
        color: "#F67010",
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
        color: "#F67010",
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
          Producto
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
            maxWidth: 780,
          }}
        >
          Todo lo que necesitas para{" "}
          <span style={{ color: "#F67010", fontStyle: "italic" }}>llenar la sala.</span>
        </h2>

        <p style={{ fontSize: 17, color: "#494848", maxWidth: 620, margin: "0 0 40px" }}>
          Desde la primera publicación hasta el cierre de caja: ALLONS reúne ticketing, marketing, pagos y análisis en un solo panel diseñado para organizadores.
        </p>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "minmax(220px, auto)",
            gap: 16,
          }}
          className="bento-grid"
        >
          {/* T1 — featured dashboard tile */}
          <div
            className="bento-t1"
            style={{
              background: "#131516",
              border: "1px solid #131516",
              borderRadius: 20,
              padding: 26,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              color: "#fff",
            }}
          >
            <IcDark>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
              </svg>
            </IcDark>
            <h3 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.015em", margin: "0 0 8px", color: "#fff" }}>
              Un panel que ya se siente como tu oficina.
            </h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: 420 }}>
              Ingresos, reservas y reseñas actualizándose en tiempo real. Con gráficos claros y acciones rápidas cuando algo necesita tu atención.
            </p>

            {/* Dashboard mini-preview */}
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
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 10,
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  <span>{row.label}</span>
                  <b style={{ color: "#fff", fontFamily: "var(--font-urbanist)", fontSize: 15, letterSpacing: "-0.01em" }}>
                    {row.value}{" "}
                    {row.delta && (
                      <span style={{ color: "#7EE8A7" }}>{row.delta}</span>
                    )}
                  </b>
                </div>
              ))}
            </div>
          </div>

          {/* T2 — Ticketing */}
          <div className="bento-t2" style={{ background: "#fff", border: "1px solid #EAE8E4", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" />
                <path d="M14 6v12" strokeDasharray="1.5 2.5" />
              </svg>
            </Ic>
            <h3 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", margin: "0 0 8px" }}>Ticketing flexible</h3>
            <p style={{ fontSize: 14, color: "#494848", margin: 0, maxWidth: 340 }}>
              Crea entradas VIP, general, palco, graderías. Aplica códigos, cupos por persona y reservas con pago en línea o en el local.
            </p>
          </div>

          {/* T3 — Pagos */}
          <div className="bento-t3" style={{ background: "#fff", border: "1px solid #EAE8E4", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <path d="M3 10h18M16 15h2" />
              </svg>
            </Ic>
            <h3 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", margin: "0 0 8px" }}>Cobra en Lempiras, al instante</h3>
            <p style={{ fontSize: 14, color: "#494848", margin: 0, maxWidth: 340 }}>
              Desembolsos semanales a tu BAC o Ficohsa. Comisión desde 5%. Sin mínimos, sin costos ocultos, sin tarjetas de crédito bloqueadas.
            </p>
          </div>

          {/* T4 — Promociones */}
          <div className="bento-t4" style={{ background: "#fff", border: "1px solid #EAE8E4", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M3 12V4h8l10 10-8 8Z" />
                <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
              </svg>
            </Ic>
            <h3 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", margin: "0 0 8px" }}>Promociones</h3>
            <p style={{ fontSize: 14, color: "#494848", margin: 0 }}>
              Early-bird, códigos por comunidad, descuentos por volumen.
            </p>
          </div>

          {/* T5 — Audiencia */}
          <div className="bento-t5" style={{ background: "#fff", border: "1px solid #EAE8E4", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <circle cx="9" cy="8" r="4" />
                <path d="M2 21a7 7 0 0 1 14 0" />
                <circle cx="17" cy="8" r="3" />
                <path d="M22 20a5 5 0 0 0-5-5" />
              </svg>
            </Ic>
            <h3 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", margin: "0 0 8px" }}>Audiencia propia</h3>
            <p style={{ fontSize: 14, color: "#494848", margin: 0 }}>
              Sigue a tus fans, notifícales nuevos eventos, mide su LTV.
            </p>
          </div>

          {/* T6 — Reseñas */}
          <div className="bento-t6" style={{ background: "#fff", border: "1px solid #EAE8E4", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column" }}>
            <Ic>
              <svg viewBox="0 0 24 24" width="18" height="18" {...STROKE}>
                <path d="M12 3.5 14.3 9l5.7.5-4.3 3.9 1.3 5.6L12 16.3 6.9 19l1.3-5.6L4 9.5 9.7 9Z" />
              </svg>
            </Ic>
            <h3 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", margin: "0 0 8px" }}>Reseñas y NPS</h3>
            <p style={{ fontSize: 14, color: "#494848", margin: 0 }}>
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
