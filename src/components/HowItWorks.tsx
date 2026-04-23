const STEPS = [
  { num: "01 · PUBLICA", title: "Crea tu evento en 4 min", desc: "Título, fecha, lugar, fotos y categorías. El formulario guiado te previene olvidos." },
  { num: "02 · DIFUNDE", title: "Llega a la audiencia correcta", desc: "ALLONS empuja tu evento a usuarios con intereses afines en tu ciudad, sin pagar ads." },
  { num: "03 · VENDE", title: "Reservas + pagos en un clic", desc: "Checkout optimizado para móvil. Los asistentes compran en segundos, sin abandonar." },
  { num: "04 · COBRA", title: "Desembolsos semanales", desc: "Todos los viernes, directo a tu banco. Facturas y reportes listos para contabilidad." },
];

export function HowItWorks() {
  return (
    <section id="flow" style={{ paddingTop: 0, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            background: "radial-gradient(circle at 80% -40%, rgba(246,112,16,0.24), transparent 60%), linear-gradient(135deg, #131516 0%, #2B2A2F 100%)",
            color: "#fff",
            borderRadius: 28,
            padding: "72px",
            position: "relative",
            overflow: "hidden",
          }}
          className="flow-card"
        >
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
              position: "relative",
            }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#F67010" }} />
            Cómo funciona
          </div>

          <h2
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 700,
              fontSize: "clamp(32px, 3.6vw, 48px)",
              letterSpacing: "-0.028em",
              lineHeight: 1.05,
              margin: "0 0 18px",
              color: "#fff",
              maxWidth: 700,
              position: "relative",
            }}
          >
            De la idea al lleno total en{" "}
            <span style={{ color: "#F67010", fontStyle: "italic" }}>4 pasos.</span>
          </h2>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 620, margin: "0 0 40px", position: "relative" }}>
            Sin desarrolladores, sin contratos largos, sin hojas de Excel. Sube tu evento por la mañana y vende la primera entrada antes del almuerzo.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              position: "relative",
            }}
            className="flow-steps"
          >
            {STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 11,
                    color: "#F67010",
                    letterSpacing: "0.1em",
                    marginBottom: 14,
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: "-0.015em",
                    margin: "0 0 8px",
                    color: "#fff",
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .flow-card { padding: 48px 28px !important; border-radius: 22px !important; }
          .flow-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
