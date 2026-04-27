import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type PageShellProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, subtitle, children }: PageShellProps) {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ padding: "80px 0 40px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            {eyebrow && (
              <div
                className="ds-chip-active"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--color-liquid-lava)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--color-liquid-lava)" }} />
                {eyebrow}
              </div>
            )}

            <h1
              className="ds-display-lg"
              style={{
                margin: "0 0 18px",
                color: "var(--color-gluon-grey)",
                maxWidth: 880,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="ds-lead"
                style={{
                  color: "var(--color-dusty-grey)",
                  maxWidth: 680,
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </section>

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
