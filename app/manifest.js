import site from "@/site.config";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2563EB",
    lang: site.language,
    categories: ["health", "medical", "business"],
    icons: [
      {
        src: site.images.logo,
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}