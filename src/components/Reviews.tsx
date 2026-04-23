const QUOTES = [
  {
    text: "«Pasamos de vender por WhatsApp a llenar Angeli Gardens tres viernes seguidos. El panel nos cambió la vida — ya no perdemos ingresos por caos.»",
    name: "Jorge Torres",
    role: "Angeli Gardens · San Pedro Sula",
    initials: "JT",
    avatarStyle: { background: "linear-gradient(135deg, #F67010, #721103)" },
  },
  {
    text: "«Organizamos la 21K en Roatán con ALLONS y vendimos 743 inscripciones en tres semanas. El checkout móvil fue decisivo.»",
    name: "Alejandra Mejía",
    role: "21K Roatán · Organizadora",
    initials: "AM",
    avatarStyle: { background: "linear-gradient(135deg, #1E6F5B, #0F3D32)" },
  },
  {
    text: "«El reporte de reseñas nos mostró en dónde fallábamos en la apertura de puertas. En dos eventos pasamos de 4.3 a 4.8.»",
    name: "Daniel Cálix",
    role: "Catracho Fest · Tegucigalpa",
    initials: "DC",
    avatarStyle: { background: "linear-gradient(135deg, #2E1B5E, #13082E)" },
  },
];

function StarSVG() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M12 3.5 14.3 9l5.7.5-4.3 3.9 1.3 5.6L12 16.3 6.9 19l1.3-5.6L4 9.5 9.7 9Z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section style={{ padding: "100px 0" }}>
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
          Testimonios
        </div>

        <h2
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: "clamp(32px, 3.6vw, 48px)",
            letterSpacing: "-0.028em",
            lineHeight: 1.05,
            margin: "0 0 40px",
            color: "#131516",
            maxWidth: 780,
          }}
        >
          Organizadores que{" "}
          <span style={{ color: "#F67010", fontStyle: "italic" }}>ya no volvieron atrás.</span>
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
          className="quote-grid"
        >
          {QUOTES.map((q) => (
            <div
              key={q.name}
              style={{
                background: "#fff",
                border: "1px solid #EAE8E4",
                borderRadius: 18,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {/* Stars */}
              <div style={{ color: "#EABA1E", display: "flex", gap: 1 }}>
                {Array.from({ length: 5 }).map((_, i) => <StarSVG key={i} />)}
              </div>

              <blockquote
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 500,
                  fontSize: 17,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.4,
                  margin: 0,
                  color: "#131516",
                }}
              >
                {q.text}
              </blockquote>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: "auto",
                  paddingTop: 8,
                  borderTop: "1px solid #EAE8E4",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    ...q.avatarStyle,
                    color: "#fff",
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 600,
                    fontSize: 13,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {q.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{q.name}</div>
                  <div style={{ fontSize: 12, color: "#6B6A70" }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .quote-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
