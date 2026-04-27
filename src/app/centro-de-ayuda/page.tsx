import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const SUPPORT_EMAIL = "hola@allonsapp.com";

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
          <span style={{ color: "#F67010" }}>ayuda?</span>
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
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "22px 32px",
            borderRadius: 16,
            background: "#fff",
            border: "1px solid #EAE8E4",
            fontFamily: "var(--font-urbanist)",
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: "-0.02em",
            color: "#131516",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#F67010" }}>@</span>
          {SUPPORT_EMAIL}
        </a>
      </div>
    </PageShell>
  );
}
