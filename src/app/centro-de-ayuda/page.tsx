import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const SUPPORT_EMAIL = "soporte@allonsapp.com";

export const metadata: Metadata = {
  title: "Centro de ayuda",
  description: "Escribinos y te respondemos.",
  alternates: {
    canonical: "/centro-de-ayuda",
  },
};

export default function CentroDeAyudaPage() {
  return (
    <PageShell
      eyebrow="Centro de ayuda"
      title={
        <>
          ¿Necesitás{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>ayuda?</span>
        </>
      }
      subtitle="Por ahora el canal principal es el correo. Contanos qué necesitás y te respondemos."
    >
      <div
        style={{
          marginTop: 40,
          paddingBottom: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="ds-h2"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "20px 28px",
            borderRadius: 16,
            background: "var(--color-snow)",
            border: "1px solid var(--color-line)",
            color: "var(--color-gluon-grey)",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "var(--color-liquid-lava)" }}>@</span>
          {SUPPORT_EMAIL}
        </a>
      </div>
    </PageShell>
  );
}
