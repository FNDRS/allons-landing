import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Registro de organizadores en ALLONS. Disponible próximamente.",
  alternates: {
    canonical: "/registro",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegistroPage() {
  return (
    <PageShell
      eyebrow="Crear cuenta"
      title={
        <>
          Estamos abriendo ALLONS{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>por invitación.</span>
        </>
      }
      subtitle="El registro público todavía no está abierto. Dejanos tus datos por correo y te avisamos cuando puedas crear tu primer evento."
    >
      <div style={{ marginTop: 40, paddingBottom: 80 }}>
        <a
          href="mailto:soporte@allonsapp.com?subject=Quiero crear mi cuenta en ALLONS"
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
          Solicitar invitación
        </a>
      </div>
    </PageShell>
  );
}
