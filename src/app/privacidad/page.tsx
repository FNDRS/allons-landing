import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo recopilamos, usamos y protegemos tus datos personales en ALLONS.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SECTIONS = [
  {
    title: "1. Introducción",
    body: [
      "En ALLONS valoramos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos la información personal que nos proporcionas al utilizar la Plataforma.",
    ],
  },
  {
    title: "2. Información que recopilamos",
    body: [
      "Recopilamos los siguientes tipos de información:",
      "• Información de cuenta: nombre, correo electrónico, número de teléfono, RTN o DNI, cuenta bancaria.",
      "• Información de eventos: datos del evento que publicas como organizador.",
      "• Información de pago: procesamos pagos a través de proveedores certificados; ALLONS no almacena datos completos de tarjetas de crédito o débito.",
      "• Información de uso: registros de inicio de sesión, dispositivos, navegador, dirección IP y patrones de navegación.",
    ],
  },
  {
    title: "3. Cómo usamos tu información",
    body: [
      "Utilizamos tu información para los siguientes fines:",
      "• Operar la Plataforma y procesar transacciones.",
      "• Prevenir fraude y garantizar la seguridad del servicio.",
      "• Enviar notificaciones operativas y comunicaciones del servicio.",
      "• Mejorar la experiencia del producto mediante análisis agregados.",
      "• Cumplir con obligaciones legales y regulatorias en Honduras.",
    ],
  },
  {
    title: "4. Compartir información",
    body: [
      "No vendemos tu información personal. Solo compartimos datos con:",
      "• Proveedores de servicios (procesadores de pago, infraestructura, comunicación) bajo acuerdos de confidencialidad.",
      "• Autoridades competentes cuando lo requiera la ley.",
      "• Organizadores: si compras una entrada, el organizador del evento recibe tu nombre y correo para fines del evento.",
    ],
  },
  {
    title: "5. Almacenamiento y seguridad",
    body: [
      "Almacenamos tus datos en servidores seguros con cifrado en tránsito (TLS) y en reposo. Aplicamos controles de acceso, auditoría y monitoreo continuo.",
      "Aunque tomamos todas las medidas razonables, ningún sistema es 100% inmune. Te recomendamos cuidar tus credenciales y notificarnos cualquier acceso sospechoso.",
    ],
  },
  {
    title: "6. Tus derechos",
    body: [
      "Como usuario, tienes derecho a:",
      "• Acceder a la información personal que tenemos sobre ti.",
      "• Solicitar la corrección de datos inexactos.",
      "• Solicitar la eliminación de tu cuenta y de tus datos personales (sujeto a obligaciones legales de conservación).",
      "• Oponerte al tratamiento de tus datos para fines de marketing.",
      "Para ejercer estos derechos, escríbenos a soporte@allonsapp.com.",
    ],
  },
  {
    title: "7. Cookies y tecnologías similares",
    body: [
      "Usamos cookies para mantener tu sesión iniciada, recordar preferencias y medir el uso del producto. Puedes configurar tu navegador para rechazar cookies, aunque algunas funciones de la Plataforma pueden dejar de funcionar.",
    ],
  },
  {
    title: "8. Retención de datos",
    body: [
      "Conservamos tus datos mientras tu cuenta esté activa y por el tiempo necesario para cumplir con obligaciones legales, contables o de seguridad.",
    ],
  },
  {
    title: "9. Menores de edad",
    body: [
      "ALLONS no está dirigida a menores de 18 años. No recopilamos intencionalmente datos de menores. Si crees que un menor nos ha proporcionado información, contáctanos para eliminarla.",
    ],
  },
  {
    title: "10. Cambios a esta política",
    body: [
      "Podemos actualizar esta política para reflejar mejoras o cambios legales. Publicaremos la nueva versión en esta página con la fecha de actualización.",
    ],
  },
  {
    title: "11. Contacto",
    body: [
      "Si tienes dudas sobre esta política o sobre cómo manejamos tus datos, escríbenos a soporte@allonsapp.com.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <PageShell
      eyebrow="Política de privacidad"
      title="Cómo cuidamos tus datos."
      subtitle="Última actualización: 27 de abril de 2026."
    >
      <div style={{ maxWidth: 760, paddingBottom: 80, marginTop: 40 }}>
        {SECTIONS.map((s) => (
          <div key={s.title} style={{ marginBottom: 32 }}>
            <h2
              className="ds-h2"
              style={{
                margin: "0 0 12px",
                color: "var(--color-gluon-grey)",
              }}
            >
              {s.title}
            </h2>
            {s.body.map((p, i) => (
              <p
                key={i}
                className="ds-body"
                style={{
                  color: "var(--color-ink-700)",
                  lineHeight: 1.7,
                  margin: "0 0 12px",
                  whiteSpace: "pre-line",
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
