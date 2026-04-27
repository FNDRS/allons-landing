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
                {eyebrow}
              </div>
            )}

            <h1
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: "clamp(36px, 4.4vw, 60px)",
                letterSpacing: "-0.028em",
                lineHeight: 1.04,
                margin: "0 0 18px",
                color: "#131516",
                maxWidth: 880,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                style={{
                  fontSize: 18,
                  color: "#494848",
                  maxWidth: 680,
                  margin: 0,
                  lineHeight: 1.55,
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
