import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "API Docs · ALLONS",
  description: "Integra ALLONS a tus sistemas. API REST con autenticación por token, webhooks y SDKs en camino.",
};

const ENDPOINTS = [
  {
    method: "GET",
    path: "/v1/events",
    desc: "Lista todos los eventos de tu cuenta.",
  },
  {
    method: "POST",
    path: "/v1/events",
    desc: "Crea un nuevo evento.",
  },
  {
    method: "GET",
    path: "/v1/events/:id/tickets",
    desc: "Obtiene los tipos de entrada de un evento.",
  },
  {
    method: "POST",
    path: "/v1/events/:id/tickets",
    desc: "Crea un nuevo tipo de entrada.",
  },
  {
    method: "GET",
    path: "/v1/events/:id/orders",
    desc: "Lista las órdenes de un evento.",
  },
  {
    method: "POST",
    path: "/v1/events/:id/scan",
    desc: "Valida un QR en puerta.",
  },
  {
    method: "GET",
    path: "/v1/payouts",
    desc: "Histórico de desembolsos a tu cuenta bancaria.",
  },
];

const METHOD_COLORS: Record<string, string> = {
  GET: "#0AA86B",
  POST: "#3D6BD7",
  PUT: "#D78A1F",
  DELETE: "#E2455A",
};

export default function ApiDocsPage() {
  return (
    <PageShell
      eyebrow="API Docs"
      title={
        <>
          Conecta ALLONS con{" "}
          <span style={{ color: "#F67010" }}>tus sistemas.</span>
        </>
      }
      subtitle="Una API REST sencilla, autenticada por token, con webhooks para eventos importantes. Disponible en el plan Empresarial."
    >
      <div
        style={{
          background: "#131516",
          color: "#fff",
          borderRadius: 18,
          padding: 28,
          marginTop: 40,
          marginBottom: 40,
          fontFamily: "var(--font-jetbrains)",
          fontSize: 13,
          lineHeight: 1.7,
          overflow: "auto",
        }}
      >
        <div style={{ color: "#6B6A70", marginBottom: 8 }}># Autenticación</div>
        <div>curl https://api.allons.app/v1/events \</div>
        <div>&nbsp;&nbsp;-H &quot;Authorization: Bearer sk_live_xxxxxxxxxxxxxxxx&quot;</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 60 }} className="api-cards">
        {[
          {
            title: "Autenticación",
            desc: "Tokens privados generados desde tu panel. Soporta tokens de prueba y producción.",
          },
          {
            title: "Webhooks",
            desc: "Recibe notificaciones cuando se vende una entrada, se valida un QR o se procesa un reembolso.",
          },
          {
            title: "Rate limits",
            desc: "100 req/min en plan Estándar. Sin límite en Empresarial.",
          },
        ].map((b) => (
          <div
            key={b.title}
            style={{
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 14,
              padding: 22,
            }}
          >
            <h3 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 600, fontSize: 16, margin: "0 0 6px", color: "#131516" }}>
              {b.title}
            </h3>
            <p style={{ fontSize: 13.5, color: "#494848", margin: 0, lineHeight: 1.55 }}>{b.desc}</p>
          </div>
        ))}
      </div>

      <h2
        style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "-0.02em",
          margin: "0 0 24px",
          color: "#131516",
        }}
      >
        Endpoints principales
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 80 }}>
        {ENDPOINTS.map((e) => (
          <div
            key={e.path + e.method}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr",
              gap: 18,
              alignItems: "center",
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 12,
              padding: "14px 18px",
            }}
            className="endpoint-row"
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 11,
                fontWeight: 600,
                background: `${METHOD_COLORS[e.method] ?? "#131516"}1A`,
                color: METHOD_COLORS[e.method] ?? "#131516",
                padding: "4px 10px",
                borderRadius: 6,
                textAlign: "center",
                letterSpacing: "0.05em",
              }}
            >
              {e.method}
            </span>
            <code
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 13,
                color: "#131516",
              }}
            >
              {e.path}
            </code>
            <span style={{ fontSize: 13.5, color: "#6B6A70" }}>{e.desc}</span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .api-cards { grid-template-columns: 1fr !important; }
          .endpoint-row { grid-template-columns: 80px 1fr !important; }
          .endpoint-row > span:last-child { grid-column: 1 / -1; }
        }
      `}</style>
    </PageShell>
  );
}
