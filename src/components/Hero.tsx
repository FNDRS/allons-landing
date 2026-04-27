export function Hero() {
  return (
    <section
      style={{
        padding: "56px 0 84px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left — copy */}
        <div>
          {/* Eyebrow */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px 5px 6px",
              background: "#fff",
              border: "1px solid #EAE8E4",
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 500,
              color: "#2B2A2F",
            }}
          >
            <span
              style={{
                background: "#131516",
                color: "#F67010",
                fontFamily: "var(--font-jetbrains)",
                fontSize: 10.5,
                padding: "3px 7px",
                borderRadius: 999,
                letterSpacing: "0.06em",
              }}
            >
              NUEVO
            </span>
            Panel PRO para organizadores 2026
          </span>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 800,
              fontSize: "clamp(44px, 5.8vw, 78px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: "22px 0 22px",
              color: "#131516",
            }}
          >
            Crea, vende y{" "}
            <span style={{ color: "#F67010", fontStyle: "bold" }}>promociona</span>
            <br />
            tus eventos en Honduras.
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#494848",
              maxWidth: 520,
              margin: "0 0 28px",
              lineHeight: 1.5,
            }}
          >
            ALLONS conecta lo que organizas con quienes buscan experiencias en su ciudad. Publica un evento en minutos, cobra sin fricción y convierte asistentes en fans recurrentes.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#"
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
                border: "1px solid transparent",
                cursor: "pointer",
              }}
            >
              Abrir mi cuenta gratis
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 22px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                color: "#131516",
                background: "#fff",
                border: "1px solid #E7E7E7",
                cursor: "pointer",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l12-7z" />
              </svg>
              Ver demo · 2 min
            </a>
          </div>

          {/* Meta stats */}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              paddingTop: 24,
              borderTop: "1px solid #EAE8E4",
            }}
          >
            {[
              { k: "ORGANIZADORES", v: "1,240+" },
              { k: "TICKETS VENDIDOS", v: "842K" },
              { k: "CIUDADES", v: "14" },
              { k: "COMISIÓN DESDE", v: "5%" },
            ].map((stat) => (
              <div key={stat.k}>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 10.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6B6A70",
                    marginBottom: 4,
                  }}
                >
                  {stat.k}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                    color: "#131516",
                  }}
                >
                  {stat.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dark art card
             Outer: position relative, no overflow (so floating cards show)
             Inner: overflow hidden to clip gradient + hatching + poster
        */}
        <div
          style={{
            position: "relative",
            aspectRatio: "1",
            /* extra padding so cards that poke out don't get clipped by the grid */
            margin: "0 24px",
          }}
          aria-hidden
        >
          {/* Inner clipping layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at top right, rgba(246,112,16,0.14), transparent 60%), linear-gradient(135deg, #131516 0%, #2B2A2F 100%)",
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 40px 80px -20px rgba(19,21,22,0.4)",
            }}
          >
            {/* Hatching */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 8px, transparent 8px 16px)",
                pointerEvents: "none",
              }}
            />
            {/* Event poster */}
            <div
              style={{
                position: "absolute",
                bottom: 28,
                left: 28,
                right: 28,
                height: "52%",
                borderRadius: 18,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%), repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 6px, rgba(255,255,255,0) 6px 12px), linear-gradient(135deg, #A81F0C 0%, #2B2A2F 100%)",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F67010" }}>
                  Vie · 11 Jul · 22:00
                </div>
                <div style={{ fontFamily: "var(--font-urbanist)", fontWeight: 800, fontSize: 26, letterSpacing: "-0.025em", lineHeight: 1.02, marginTop: 8, color: "#fff" }}>
                  Jungla<br />en vivo.
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-jetbrains)", fontSize: 11, opacity: 0.85, color: "#fff" }}>
                <span>SPS · Angeli Gardens</span>
                <span style={{ marginLeft: "auto" }}>L. 300</span>
              </div>
            </div>

            {/* Floating card 3 — live (stays inside) */}
            <div
              className="float-3"
              style={{
                position: "absolute",
                bottom: "48%",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#131516",
                color: "#fff",
                borderRadius: 14,
                boxShadow: "0 10px 28px rgba(19,21,22,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="pulse-dot"
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#F67010", flexShrink: 0 }}
              />
              <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: 11.5, color: "rgba(255,255,255,0.75)" }}>
                2 NUEVAS RESERVAS
              </span>
            </div>
          </div>

          {/* Label + title sit on top of inner layer */}
          <div style={{ position: "relative", padding: 28, pointerEvents: "none" }}>
            <div
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 10.5,
                letterSpacing: "0.1em",
                opacity: 0.55,
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Tu próximo evento
            </div>
            <div
              style={{
                marginTop: 10,
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                color: "#fff",
              }}
            >
              Allons Rave<br />Summer Edition.
            </div>
          </div>

          {/* Floating card 1 — revenue (top right, centered on edge) */}
          <div
            className="float-1"
            style={{
              position: "absolute",
              top: 32,
              right: -24,
              width: 190,
              background: "#fff",
              color: "#131516",
              borderRadius: 14,
              padding: "14px 16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(19,21,22,0.04)",
              fontSize: 13,
              zIndex: 10,
            }}
          >
            <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: 10.5, color: "#6B6A70", letterSpacing: "0.06em", textTransform: "uppercase" }}>Ingreso hoy</div>
            <div style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", marginTop: 4 }}>L. 128.4k</div>
            <div style={{ color: "#1E8755", fontFamily: "var(--font-jetbrains)", fontSize: 11.5, marginTop: 3 }}>▲ +12.4% vs ayer</div>
          </div>

          {/* Floating card 2 — tickets (bottom left, centered on edge) */}
          <div
            className="float-2"
            style={{
              position: "absolute",
              bottom: 60,
              left: -24,
              width: 200,
              background: "#fff",
              color: "#131516",
              borderRadius: 14,
              padding: "14px 16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(19,21,22,0.04)",
              fontSize: 13,
              zIndex: 10,
            }}
          >
            <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: 10.5, color: "#6B6A70", letterSpacing: "0.06em", textTransform: "uppercase" }}>Tickets</div>
            <div style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", marginTop: 4, display: "flex", alignItems: "baseline", gap: 4 }}>
              382<span style={{ fontSize: 12, color: "#6B6A70", fontWeight: 500 }}>/ 450</span>
            </div>
            <div style={{ color: "#1E8755", fontFamily: "var(--font-jetbrains)", fontSize: 11.5, marginTop: 3 }}>85% ocupación</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
