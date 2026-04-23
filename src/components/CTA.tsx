export function CTA() {
  return (
    <section style={{ paddingTop: 20, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(246,112,16,0.18), transparent 50%), linear-gradient(135deg, #131516 0%, #2B2A2F 100%)",
            color: "#fff",
            borderRadius: 28,
            padding: "80px 72px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
          className="cta-card"
        >
          <h2
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 68px)",
              letterSpacing: "-0.035em",
              lineHeight: 1,
              margin: "0 0 20px",
              color: "#fff",
            }}
          >
            Tu próximo lleno total
            <br />
            empieza{" "}
            <span style={{ color: "#F67010", fontStyle: "italic" }}>hoy.</span>
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 540,
              margin: "0 auto 32px",
            }}
          >
            Configura tu primer evento en menos de 5 minutos. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>

          <div style={{ display: "inline-flex", gap: 12 }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 22px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                color: "#fff",
                background: "#F67010",
                border: "1px solid transparent",
                cursor: "pointer",
              }}
            >
              Abrir mi panel gratis
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 22px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid transparent",
                cursor: "pointer",
              }}
            >
              Hablar con ventas
            </a>
          </div>

          <div
            style={{
              marginTop: 20,
              fontFamily: "var(--font-jetbrains)",
              fontSize: 11.5,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.05em",
            }}
          >
            PRIMER EVENTO 100% GRATIS · SOPORTE EN ESPAÑOL · DESEMBOLSOS EN HNL
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
