export function Footer() {
  return (
    <footer
      style={{
        padding: "60px 0 40px",
        borderTop: "1px solid #EAE8E4",
        marginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: 40,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          {/* About */}
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "#131516",
                  color: "#F67010",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 800,
                  fontSize: 17,
                  letterSpacing: "-0.04em",
                }}
              >
                A
              </div>
              <div
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 800,
                  fontSize: 18,
                  letterSpacing: "-0.03em",
                  color: "#131516",
                }}
              >
                ALLONS<span style={{ color: "#F67010" }}>.</span>
              </div>
            </a>
            <p style={{ fontSize: 14, color: "#494848", maxWidth: 320, margin: "14px 0 0" }}>
              Conectamos a quienes crean eventos con quienes buscan experiencias en su ciudad.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Producto",
              links: ["Funcionalidades", "Precios", "Panel de organizador", "Cambios & novedades"],
              hrefs: ["#features", "#pricing", "#", "#"],
            },
            {
              title: "Empresa",
              links: ["Sobre nosotros", "Blog", "Clientes", "Trabajá con nosotros"],
              hrefs: ["#", "#", "#", "#"],
            },
            {
              title: "Recursos",
              links: ["Centro de ayuda", "API docs", "Términos", "Privacidad"],
              hrefs: ["#", "#", "#", "#"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h5
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 600,
                  fontSize: 14,
                  margin: "0 0 14px",
                  color: "#131516",
                }}
              >
                {col.title}
              </h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a href={col.hrefs[i]} style={{ fontSize: 13.5, color: "#494848" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: 26,
            borderTop: "1px solid #EAE8E4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#6B6A70",
            fontFamily: "var(--font-jetbrains)",
          }}
          className="footer-bottom"
        >
          <span>© 2026 ALLONS · Hecho en Honduras con orgullo.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Instagram", "TikTok", "X"].map((s) => (
              <a key={s} href="#" style={{ color: "#6B6A70" }}>{s}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
