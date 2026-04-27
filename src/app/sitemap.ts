import type { MetadataRoute } from "next";

const siteUrl = "https://allonsapp.com";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/funcionalidades", priority: 0.9, changeFrequency: "monthly" },
  { path: "/panel-de-organizador", priority: 0.85, changeFrequency: "monthly" },
  { path: "/cambios-novedades", priority: 0.6, changeFrequency: "weekly" },
  { path: "/sobre-nosotros", priority: 0.7, changeFrequency: "monthly" },
  { path: "/centro-de-ayuda", priority: 0.6, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-27");

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
