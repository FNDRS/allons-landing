import type { Metadata } from "next";
import { Urbanist, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://allonsapp.com";
const siteDescription =
  "ALLONS es la plataforma hondureña para crear, vender y llenar eventos. Ticketing, pagos, QR, reportes y desembolsos en HNL desde un solo lugar.";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "ALLONS",
  title: {
    default: "ALLONS · Ticketing, pagos y control para eventos en Honduras",
    template: "%s · ALLONS",
  },
  description: siteDescription,
  keywords: [
    "ALLONS",
    "allons honduras",
    "eventos honduras",
    "ticketing honduras",
    "venta de entradas honduras",
    "boletos honduras",
    "plataforma de eventos",
    "eventos Tegucigalpa",
    "eventos San Pedro Sula",
    "organizar eventos",
    "entradas con QR",
    "pagos para eventos",
    "desembolsos HNL",
  ],
  authors: [{ name: "ALLONS", url: siteUrl }],
  creator: "ALLONS",
  publisher: "ALLONS",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "es-HN": "/",
      es: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: siteUrl,
    siteName: "ALLONS",
    title: "ALLONS · Ticketing, pagos y control para eventos en Honduras",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ALLONS: ticketing, pagos y control para eventos en Honduras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALLONS · Ticketing, pagos y control para eventos en Honduras",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${urbanist.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
