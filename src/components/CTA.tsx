export function CTA() {
  return (
    <section style={{ paddingTop: 20, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(246,112,16,0.18), transparent 50%), linear-gradient(135deg, var(--color-gluon-grey) 0%, #2B2A2F 100%)",
            color: "var(--color-snow)",
            borderRadius: 28,
            padding: "80px 72px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
          className="cta-card"
        >
          <h1
            className="ds-display-xl"
            style={{
              margin: "0 0 20px",
              color: "var(--color-snow)",
            }}
          >
            Tu próximo <span style={{ color: "var(--color-liquid-lava)" }}>sold out</span>
            <br />
            empieza{" "}
            <span style={{ color: "var(--color-liquid-lava)" }}>hoy.</span>
          </h1>

          <p
            className="ds-lead"
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: 540,
              margin: "0 auto 32px",
            }}
          >
            Configura tu primer evento en menos de 5 minutos. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>

          <div style={{ display: "inline-flex", gap: 12 }}>
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
              Abrir mi panel gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/ventas"
              className="ds-btn ds-btn-active"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                borderRadius: 12,
                color: "var(--color-snow)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid transparent",
                cursor: "pointer",
              }}
            >
              Hablar con ventas
            </a>
          </div>

          <div
            className="ds-chip-active"
            style={{
              marginTop: 20,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.04em",
            }}
          >
            EVENTOS ILIMITADOS · SOPORTE EN ESPAÑOL · DESEMBOLSOS EN HNL
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .cta-card { padding: 48px 28px !important; border-radius: 22px !important; }
        }
      `}</style>
    </section>
  );
}
