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
            background: "radial-gradient(circle at 80% -40%, rgba(246,112,16,0.24), transparent 60%), linear-gradient(135deg, var(--color-gluon-grey) 0%, #2B2A2F 100%)",
            color: "var(--color-snow)",
            borderRadius: 28,
            padding: "72px",
            position: "relative",
            overflow: "hidden",
          }}
          className="flow-card"
        >
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
              position: "relative",
            }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--color-liquid-lava)" }} />
            Cómo funciona
          </div>

          <h1
            className="ds-display-lg"
            style={{
              margin: "0 0 18px",
              color: "var(--color-snow)",
              maxWidth: 700,
              position: "relative",
            }}
          >
            De la idea al lleno total en{" "}
            <span style={{ color: "var(--color-liquid-lava)" }}>4 pasos.</span>
          </h1>

          <p
            className="ds-lead"
            style={{ color: "rgba(255,255,255,0.65)", maxWidth: 620, margin: "0 0 40px", position: "relative" }}
          >
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
                  className="ds-chip-active"
                  style={{
                    color: "var(--color-liquid-lava)",
                    letterSpacing: "0.04em",
                    marginBottom: 14,
                  }}
                >
                  {step.num}
                </div>
                <h2
                  className="ds-h2"
                  style={{
                    margin: "0 0 8px",
                    color: "var(--color-snow)",
                  }}
                >
                  {step.title}
                </h2>
                <p
                  className="ds-body"
                  style={{ color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.6 }}
                >
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
