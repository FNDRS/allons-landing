export function Hero() {
  return (
    <section
      style={{
        padding: "56px 0 84px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div>
          <span
            className="ds-chip-active"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px 5px 6px",
              background: "var(--color-snow)",
              border: "1px solid var(--color-line)",
              borderRadius: 999,
              color: "var(--color-gluon-grey)",
            }}
          >
            <span
              className="ds-chip-active"
              style={{
                background: "var(--color-gluon-grey)",
                color: "var(--color-liquid-lava)",
                padding: "3px 10px",
                borderRadius: 999,
                letterSpacing: "0.04em",
              }}
            >
              NUEVO
            </span>
            Panel PRO para organizadores 2026
          </span>

          <h1
            className="ds-display-xl"
            style={{
              margin: "22px 0 22px",
              color: "var(--color-gluon-grey)",
            }}
          >
            Crea, vende y{" "}
            <span style={{ color: "var(--color-liquid-lava)" }}>promociona</span>
            <br />
            tus eventos en Honduras.
          </h1>

          <p
            className="ds-lead"
            style={{
              color: "var(--color-dusty-grey)",
              maxWidth: 520,
              margin: "0 0 28px",
            }}
          >
            ALLONS conecta lo que organizas con quienes buscan experiencias en su ciudad. Publica un evento en minutos, cobra sin fricción y convierte asistentes en fans recurrentes.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="/registro"
              className="ds-btn ds-btn-active"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                borderRadius: 12,
                color: "var(--color-snow)",
                background: "var(--color-liquid-lava)",
                border: "1px solid transparent",
                cursor: "pointer",
              }}
            >
              Abrir mi cuenta gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/demo"
              className="ds-btn ds-btn-active"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                borderRadius: 12,
                color: "var(--color-gluon-grey)",
                background: "var(--color-snow)",
                border: "1px solid var(--color-line)",
                cursor: "pointer",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l12-7z" />
              </svg>
              Ver demo · 2 min
            </a>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            aspectRatio: "1",
            margin: "0 24px",
          }}
          aria-hidden
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at top right, rgba(246,112,16,0.14), transparent 60%), linear-gradient(135deg, var(--color-gluon-grey) 0%, #2B2A2F 100%)",
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 40px 80px -20px rgba(28,27,32,0.4)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 8px, transparent 8px 16px)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 28,
                left: 28,
                right: 28,
                height: "52%",
                borderRadius: 18,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%), repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 6px, rgba(255,255,255,0) 6px 12px), linear-gradient(135deg, #A81F0C 0%, #2B2A2F 100%)",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <div>
                <div
                  className="ds-chip"
                  style={{
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--color-liquid-lava)",
                  }}
                >
                  Vie · 11 Jul · 22:00
                </div>
                <div
                  className="ds-display-sm"
                  style={{
                    marginTop: 8,
                    color: "var(--color-snow)",
                  }}
                >
                  Jungla<br />en vivo.
                </div>
              </div>
              <div
                className="ds-chip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  opacity: 0.85,
                  color: "var(--color-snow)",
                }}
              >
                <span>SPS · Angeli Gardens</span>
                <span style={{ marginLeft: "auto" }}>L. 300</span>
              </div>
            </div>

            <div
              className="float-3"
              style={{
                position: "absolute",
                bottom: "48%",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "var(--color-gluon-grey)",
                color: "var(--color-snow)",
                borderRadius: 14,
                boxShadow: "0 10px 28px rgba(28,27,32,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="pulse-dot"
                style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-liquid-lava)", flexShrink: 0 }}
              />
              <span
                className="ds-chip"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                2 NUEVAS RESERVAS
              </span>
            </div>
          </div>

          <div style={{ position: "relative", padding: 28, pointerEvents: "none" }}>
            <div
              className="ds-chip"
              style={{
                letterSpacing: "0.04em",
                opacity: 0.55,
                textTransform: "uppercase",
                color: "var(--color-snow)",
              }}
            >
              Tu próximo evento
            </div>
            <div
              className="ds-display-sm"
              style={{
                marginTop: 8,
                color: "var(--color-snow)",
              }}
            >
              Allons Rave<br />Summer Edition.
            </div>
          </div>

          <div
            className="float-1"
            style={{
              position: "absolute",
              top: 32,
              right: -24,
              width: 200,
              background: "var(--color-snow)",
              color: "var(--color-gluon-grey)",
              borderRadius: 14,
              padding: "14px 16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(28,27,32,0.04)",
              zIndex: 10,
            }}
          >
            <div
              className="ds-chip"
              style={{ color: "var(--color-dusty-grey)", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              Ingreso hoy
            </div>
            <div className="ds-display-sm" style={{ marginTop: 4 }}>L. 128.4k</div>
            <div className="ds-chip" style={{ color: "var(--color-emerald-green)", marginTop: 3 }}>
              ▲ +12.4% vs ayer
            </div>
          </div>

          <div
            className="float-2"
            style={{
              position: "absolute",
              bottom: 60,
              left: -24,
              width: 200,
              background: "var(--color-snow)",
              color: "var(--color-gluon-grey)",
              borderRadius: 14,
              padding: "14px 16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(28,27,32,0.04)",
              zIndex: 10,
            }}
          >
            <div
              className="ds-chip"
              style={{ color: "var(--color-dusty-grey)", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              Tickets
            </div>
            <div className="ds-display-sm" style={{ marginTop: 4, display: "flex", alignItems: "baseline", gap: 4 }}>
              382
              <span className="ds-body" style={{ color: "var(--color-dusty-grey)" }}>
                / 450
              </span>
            </div>
            <div className="ds-chip" style={{ color: "var(--color-emerald-green)", marginTop: 3 }}>
              85% ocupación
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
