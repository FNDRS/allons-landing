import { ImageResponse } from "next/og";

export const alt = "ALLONS: ticketing, pagos y control para eventos en Honduras";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF9F7",
          color: "#131516",
          padding: 72,
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -90,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#F67010",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "#131516",
            opacity: 0.08,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#F67010",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            ALLONS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 860 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#F67010",
              fontWeight: 700,
            }}
          >
            Eventos en Honduras
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 0.98,
              letterSpacing: "-0.055em",
              fontWeight: 800,
            }}
          >
            Ticketing, pagos y control para llenar tu evento.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 24,
            color: "#494848",
            alignItems: "center",
          }}
        >
          <span>QR en puerta</span>
          <span style={{ color: "#F67010" }}>•</span>
          <span>Reportes en vivo</span>
          <span style={{ color: "#F67010" }}>•</span>
          <span>Desembolsos en HNL</span>
        </div>
      </div>
    ),
    size,
  );
}
