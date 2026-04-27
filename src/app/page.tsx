import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crea, vende y llena tus eventos en Honduras",
  description:
    "ALLONS reúne ticketing, pagos, QR, reportes y desembolsos en HNL para organizadores de eventos en Honduras.",
  alternates: {
    canonical: "/",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://allonsapp.com/#organization",
      name: "ALLONS",
      url: "https://allonsapp.com",
      logo: "https://allonsapp.com/favicon.ico",
      sameAs: ["https://www.instagram.com/allons.hn"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "hola@allonsapp.com",
          contactType: "customer support",
          areaServed: "HN",
          availableLanguage: ["es"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://allonsapp.com/#website",
      url: "https://allonsapp.com",
      name: "ALLONS",
      inLanguage: "es-HN",
      publisher: {
        "@id": "https://allonsapp.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://allonsapp.com/#app",
      name: "ALLONS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      description:
        "Plataforma hondureña para crear, vender y operar eventos con ticketing, pagos, QR, reportes y desembolsos en HNL.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "HNL",
      },
      areaServed: {
        "@type": "Country",
        name: "Honduras",
      },
      provider: {
        "@id": "https://allonsapp.com/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        {/* <LogoStrip /> */}
        <Features />
        <HowItWorks />
        {/* <Reviews /> */}
        {/* <Pricing /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
