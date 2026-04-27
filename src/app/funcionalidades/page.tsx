import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description:
    "Todo lo que ALLONS pone en tus manos para crear, vender y manejar eventos: ticketing, pagos, escaneo y reportes en vivo.",
  alternates: {
    canonical: "/funcionalidades",
  },
};

const FEATURES = [
  {
    group: "Venta de entradas",
    items: [
      {
        title: "Tipos de entrada ilimitados",
        desc: "General, VIP, early bird, cortesías. Define cupos, precios y fechas de vigencia para cada uno.",
      },
      {
        title: "Códigos de descuento",
        desc: "Crea promociones por porcentaje, monto fijo o 2x1. Limita por cantidad de usos o por fecha.",
      },
      {
        title: "Pago en el local",
        desc: "Reserva cupo en línea y cobra en puerta. Útil para eventos comunitarios o ventas presenciales.",
      },
      {
        title: "Lista de espera automática",
        desc: "Si tu evento se llena, los siguientes interesados quedan en cola y reciben aviso si se libera espacio.",
      },
    ],
  },
  {
    group: "Cobros y desembolsos",
    items: [
      {
        title: "Pagos con tarjeta",
        desc: "Aceptamos Visa y Mastercard, débito y crédito. Procesamiento cifrado y sin almacenar datos sensibles.",
      },
      {
        title: "Desembolsos en HNL",
        desc: "Cada viernes recibes el dinero acumulado en tu cuenta BAC, Ficohsa o Banpaís. Máximo 2 días hábiles.",
      },
      {
        title: "Reembolsos configurables",
        desc: "Tú defines la política. ALLONS procesa el movimiento y lo descuenta del próximo desembolso.",
      },
      {
        title: "Facturación con RTN",
        desc: "Generamos la factura para ti y tus compradores corporativos. Sin papeleo manual.",
      },
    ],
  },
  {
    group: "Operación del evento",
    items: [
      {
        title: "Escaneo de QR en puerta",
        desc: "Desde la app del organizador. Validas en milisegundos y sabes al instante si la entrada ya fue usada.",
      },
      {
        title: "Múltiples staff con permisos",
        desc: "Invita a tu equipo. Define quién vende, quién escanea y quién ve los reportes.",
      },
      {
        title: "Reportes en tiempo real",
        desc: "Ventas, ingresos y asistencia se actualizan en vivo. Sin refrescar, sin exportar a Excel.",
      },
      {
        title: "Mapa de asientos",
        desc: "Para eventos numerados, define tu plano y deja que cada asistente elija su lugar.",
      },
    ],
  },
];

export default function FuncionalidadesPage() {
  return (
    <PageShell
      eyebrow="Funcionalidades"
      title={
        <>
          Todo lo que necesitas{" "}
          <span style={{ color: "var(--color-liquid-lava)" }}>en un solo lugar.</span>
        </>
      }
      subtitle="Desde la primera publicación hasta el cierre de caja, ALLONS te da las herramientas para que tu evento se vea profesional y se llene rápido."
    >
      <div style={{ paddingBottom: 80 }}>
        {FEATURES.map((section) => (
          <div key={section.group} style={{ marginTop: 60 }}>
            <h2
              className="ds-display-md"
              style={{
                margin: "0 0 24px",
                color: "var(--color-gluon-grey)",
              }}
            >
              {section.group}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
              }}
              className="features-grid"
            >
              {section.items.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "var(--color-snow)",
                    border: "1px solid var(--color-line)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <h2
                    className="ds-h2"
                    style={{
                      margin: "0 0 8px",
                      color: "var(--color-gluon-grey)",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="ds-body"
                    style={{
                      color: "var(--color-dusty-grey)",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
