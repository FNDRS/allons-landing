import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo de ALLONS. Disponible próximamente.",
  alternates: {
    canonical: "/demo",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DemoPage() {
  return (
    <PageShell
      eyebrow="Demo"
      title={
        <>
          La demo de ALLONS estará{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>lista pronto.</span>
        </>
      }
      subtitle="Estamos preparando una vista rápida para que veas cómo se crea un evento, se venden entradas y se valida el QR en puerta."
    >
      <div style={{ marginTop: 40, paddingBottom: 80 }}>
        <a
          href="/#features"
          className="ds-btn ds-btn-active"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 22px",
            borderRadius: 12,
            color: "var(--color-snow)",
            background: "var(--color-liquid-lava)",
          }}
        >
          Ver funcionalidades
        </a>
      </div>
    </PageShell>
  );
}
