import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Términos y condiciones · ALLONS",
  description: "Términos y condiciones de uso de la plataforma ALLONS.",
};

const SECTIONS = [
  {
    title: "1. Aceptación de los términos",
    body: [
      "Al crear una cuenta o utilizar la plataforma ALLONS (en adelante, “la Plataforma”), el usuario acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguno de los puntos aquí descritos, debe abstenerse de utilizar el servicio.",
      "Estos términos aplican tanto a organizadores de eventos como a asistentes que adquieren entradas a través de ALLONS.",
    ],
  },
  {
    title: "2. Descripción del servicio",
    body: [
      "ALLONS es una plataforma tecnológica que permite a organizadores crear, publicar, vender y gestionar eventos, así como cobrar entradas en línea. ALLONS actúa exclusivamente como intermediario tecnológico y de pago. La realización del evento, su contenido y la relación contractual con los asistentes es responsabilidad del organizador.",
    ],
  },
  {
    title: "3. Cuenta de usuario",
    body: [
      "Para utilizar la Plataforma, el usuario debe registrar una cuenta proporcionando información veraz, completa y actualizada. El usuario es responsable de mantener la confidencialidad de sus credenciales y de toda actividad realizada bajo su cuenta.",
      "ALLONS se reserva el derecho de suspender o cerrar cuentas que incumplan estos términos o que sean utilizadas con fines fraudulentos.",
    ],
  },
  {
    title: "4. Comisiones y pagos",
    body: [
      "ALLONS cobra una comisión por cada entrada vendida a través de la Plataforma, según el plan vigente del organizador. Las comisiones aplicables se detallan en la sección de Precios.",
      "Los desembolsos a la cuenta bancaria del organizador se procesan según el calendario establecido (semanalmente cada viernes). Los tiempos de acreditación dependen del banco receptor.",
    ],
  },
  {
    title: "5. Política de reembolsos",
    body: [
      "Cada organizador define la política de reembolsos de su evento. ALLONS procesa los reembolsos solicitados de acuerdo con dicha política, descontando el monto correspondiente del próximo desembolso al organizador.",
      "ALLONS no es responsable por la no ejecución, modificación o cancelación de un evento por parte del organizador.",
    ],
  },
  {
    title: "6. Obligaciones del organizador",
    body: [
      "El organizador se compromete a publicar información veraz sobre su evento, cumplir con la legislación hondureña aplicable, atender las solicitudes de sus asistentes y entregar el servicio o experiencia ofrecida.",
      "El organizador es el único responsable del cumplimiento de obligaciones tributarias derivadas de la venta de sus entradas.",
    ],
  },
  {
    title: "7. Obligaciones del asistente",
    body: [
      "El asistente acepta que la entrada adquirida es personal e intransferible (salvo que el organizador permita lo contrario) y se compromete a presentar el QR correspondiente para acceder al evento.",
    ],
  },
  {
    title: "8. Propiedad intelectual",
    body: [
      "Todos los derechos sobre la Plataforma, incluyendo logos, marcas, código fuente, diseños e interfaces, pertenecen a ALLONS o a sus licenciantes. Su uso indebido está prohibido.",
    ],
  },
  {
    title: "9. Limitación de responsabilidad",
    body: [
      "ALLONS no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de la Plataforma, salvo en los casos en que la legislación aplicable así lo establezca.",
    ],
  },
  {
    title: "10. Modificaciones",
    body: [
      "ALLONS podrá modificar estos términos en cualquier momento. Las modificaciones serán publicadas en esta página y entrarán en vigor a partir de su publicación.",
    ],
  },
  {
    title: "11. Ley aplicable y jurisdicción",
    body: [
      "Estos términos se rigen por las leyes de la República de Honduras. Cualquier controversia derivada de su interpretación o cumplimiento será resuelta ante los tribunales competentes de Tegucigalpa, Honduras.",
    ],
  },
  {
    title: "12. Contacto",
    body: [
      "Para cualquier consulta sobre estos términos, escríbenos a hola@allons.app.",
    ],
  },
];

export default function TerminosPage() {
  return (
    <PageShell
      eyebrow="Términos y condiciones"
      title="Términos del servicio."
      subtitle="Última actualización: 27 de abril de 2026."
    >
      <div style={{ maxWidth: 760, paddingBottom: 80, marginTop: 40 }}>
        {SECTIONS.map((s) => (
          <div key={s.title} style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: "-0.015em",
                margin: "0 0 12px",
                color: "#131516",
              }}
            >
              {s.title}
            </h2>
            {s.body.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: 15,
                  color: "#2B2A2F",
                  lineHeight: 1.7,
                  margin: "0 0 12px",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
