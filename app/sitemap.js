import site from "@/site.config";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function sitemap() {
  const url = (path) => `${site.url}${path}`;

  return [
    {
      url: url("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [url(site.images.hero), url(site.images.logo)],
    },
  ];
}