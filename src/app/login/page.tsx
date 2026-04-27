import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Acceso al panel de ALLONS. Disponible próximamente.",
  alternates: {
    canonical: "/login",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginPage() {
  return (
    <PageShell
      eyebrow="Iniciar sesión"
      title={
        <>
          El acceso al panel estará{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>disponible pronto.</span>
        </>
      }
      subtitle="Estamos preparando el login de organizadores. Por ahora, si querés acceso temprano, escribinos y te agregamos a la lista."
    >
      <div style={{ marginTop: 40, paddingBottom: 80 }}>
        <a
          href="mailto:soporte@allonsapp.com?subject=Quiero acceso temprano a ALLONS"
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
          Pedir acceso temprano
        </a>
      </div>
    </PageShell>
  );
}
