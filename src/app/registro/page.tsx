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
          <span style={{ color: "#F67010" }}>por invitación.</span>
        </>
      }
      subtitle="El registro público todavía no está abierto. Dejanos tus datos por correo y te avisamos cuando puedas crear tu primer evento."
    >
      <div style={{ marginTop: 40, paddingBottom: 80 }}>
        <a
          href="mailto:hola@allonsapp.com?subject=Quiero crear mi cuenta en ALLONS"
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
          Solicitar invitación
        </a>
      </div>
    </PageShell>
  );
}
