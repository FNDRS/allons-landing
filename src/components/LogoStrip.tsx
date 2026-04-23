const ORGS = [
  "Angeli Gardens",
  "Arena Bantrab",
  "Teatro Bonilla",
  "21K Roatán",
  "West Bay",
  "Catracho Fest",
];

export function LogoStrip() {
  return (
    <section
      style={{
        padding: "32px 0 20px",
        borderTop: "1px solid #EAE8E4",
        borderBottom: "1px solid #EAE8E4",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            textAlign: "center",
            fontFamily: "var(--font-jetbrains)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#6B6A70",
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          Confían en ALLONS productoras, venues y colectivos en toda Honduras
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
            paddingBottom: 20,
          }}
        >
          {ORGS.map((org) => (
            <div
              key={org}
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "-0.02em",
                color: "#9B9A9F",
                opacity: 0.85,
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  background: "#9B9A9F",
                  opacity: 0.4,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {org}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
