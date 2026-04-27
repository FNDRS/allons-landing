import Image from "next/image";
import Link from "next/link";

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
            <Link href="/">
              <Image src="/logo.png" alt="Allons" width={110} height={34} style={{ height: 30, width: "auto" }} />
            </Link>
            <p style={{ fontSize: 14, color: "#494848", maxWidth: 320, margin: "14px 0 0" }}>
              Conectamos a quienes crean eventos con quienes buscan experiencias en su ciudad.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Producto",
              links: ["Funcionalidades", "Panel de organizador", "Cambios & novedades"],
              hrefs: ["/funcionalidades", "/panel-de-organizador", "/cambios-novedades"],
            },
            {
              title: "Empresa",
              links: ["Sobre nosotros", "Centro de ayuda"],
              hrefs: ["/sobre-nosotros", "/centro-de-ayuda"],
            },
            {
              title: "Legal",
              links: ["Términos", "Privacidad"],
              hrefs: ["/terminos", "/privacidad"],
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
                    <Link href={col.hrefs[i]} style={{ fontSize: 13.5, color: "#494848" }}>
                      {link}
                    </Link>
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
            <Link target="_blank" href="https://www.instagram.com/allons.hn?igsh=MWNjbGpqeGduaHQ0NA==" style={{ color: "#6B6A70" }}>
              Instagram
            </Link>
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
