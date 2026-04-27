import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        padding: "60px 0 40px",
        borderTop: "1px solid var(--color-line)",
        marginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: 40,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="Allons" width={110} height={34} style={{ height: 30, width: "auto" }} />
            </Link>
            <p className="ds-body" style={{ color: "var(--color-dusty-grey)", maxWidth: 320, margin: "14px 0 0" }}>
              Conectamos a quienes crean eventos con quienes buscan experiencias en su ciudad.
            </p>
          </div>

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
              <h2
                className="ds-h2"
                style={{
                  margin: "0 0 14px",
                  color: "var(--color-gluon-grey)",
                }}
              >
                {col.title}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link, i) => (
                  <li key={link}>
                    <Link
                      href={col.hrefs[i]}
                      className="ds-body"
                      style={{ color: "var(--color-dusty-grey)" }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="footer-bottom ds-body"
          style={{
            paddingTop: 26,
            borderTop: "1px solid var(--color-line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "var(--color-dusty-grey)",
          }}
        >
          <span>© 2026 ALLONS · Hecho en Honduras con orgullo.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link target="_blank" href="https://www.instagram.com/allons.hn?igsh=MWNjbGpqeGduaHQ0NA==" style={{ color: "var(--color-dusty-grey)" }}>
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
