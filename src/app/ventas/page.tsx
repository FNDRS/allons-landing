import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Hablar con ventas",
  description: "Contacta al equipo de ALLONS para organizar tu próximo evento.",
  alternates: {
    canonical: "/ventas",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function VentasPage() {
  return (
    <PageShell
      eyebrow="Hablar con ventas"
      title={
        <>
          Contanos qué evento querés{" "}
          <span style={{ color: "#F67010" }}>mover con ALLONS.</span>
        </>
      }
      subtitle="Por ahora atendemos ventas por correo. Mandanos el nombre del evento, ciudad, fecha estimada y cantidad esperada de asistentes."
    >
      <div style={{ marginTop: 40, paddingBottom: 80 }}>
        <a
          href="mailto:hola@allonsapp.com?subject=Quiero hablar con ventas de ALLONS"
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
          Escribir a ventas
        </a>
      </div>
    </PageShell>
  );
}
