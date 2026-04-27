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
          <span style={{ color: "#F67010" }}>lista pronto.</span>
        </>
      }
      subtitle="Estamos preparando una vista rápida para que veas cómo se crea un evento, se venden entradas y se valida el QR en puerta."
    >
      <div style={{ marginTop: 40, paddingBottom: 80 }}>
        <a
          href="/#features"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 22px",
            borderRadius: 12,
            fontWeight: 600,
            fontSize: 15,
            color: "#fff",
            background: "#F67010",
          }}
        >
          Ver funcionalidades
        </a>
      </div>
    </PageShell>
  );
}
