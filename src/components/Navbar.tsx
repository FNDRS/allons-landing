"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(251,251,251,0.94)" : "rgba(251,251,251,0.78)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
        transition: "border 160ms, background 160ms",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          gap: 36,
        }}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Allons" width={120} height={36} style={{ height: 32, width: "auto" }} priority />
        </Link>

        <div
          style={{
            display: "flex",
            gap: 26,
            marginLeft: 12,
          }}
          className="nav-links-desktop"
        >
          {[
            { label: "Producto", href: "/#features" },
            { label: "Cómo funciona", href: "/#flow" },
            { label: "Preguntas", href: "/#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ds-btn"
              style={{
                color: "var(--color-gluon-grey)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="/login"
            className="ds-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              borderRadius: 10,
              color: "var(--color-gluon-grey)",
              background: "transparent",
              border: "1px solid transparent",
              cursor: "pointer",
            }}
          >
            Iniciar sesión
          </a>
          <a
            href="/registro"
            className="ds-btn ds-btn-active"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              borderRadius: 10,
              color: "var(--color-snow)",
              background: "var(--color-liquid-lava)",
              border: "1px solid transparent",
              cursor: "pointer",
            }}
          >
            Empezar gratis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
