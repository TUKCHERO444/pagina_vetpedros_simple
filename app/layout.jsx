import "./globals.css";
import site from "@/site.config";

const imageUrl = (path) => `${site.url}${path}`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: {
    canonical: "/",
    languages: { es: "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Clínica Veterinaria en Chiclayo`,
    description: site.description,
    images: [
      {
        url: imageUrl(site.images.hero),
        alt: `${site.name} — clínica veterinaria en Chiclayo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Clínica Veterinaria en Chiclayo`,
    description: site.description,
    images: [imageUrl(site.images.hero)],
  },
  icons: {
    icon: site.images.logo,
    apple: site.images.logo,
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": site.address.regionCode,
    "geo.placename": site.address.city,
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

const vetPedrosSchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "@id": `${site.url}/#veterinarycare`,
  name: site.legalName,
  alternateName: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.telephone,
  priceRange: "$$",
  image: [imageUrl(site.images.logo), imageUrl(site.images.hero)],
  logo: imageUrl(site.images.logo),
  slogan: site.slogan,
  foundingDate: site.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: `https://www.openstreetmap.org/?mlat=${site.geo.lat}&mlon=${site.geo.lng}#map=17/${site.geo.lat}/${site.geo.lng}`,
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: Object.values(site.socials),
  areaServed: [
    { "@type": "City", name: site.address.city },
    { "@type": "AdministrativeArea", name: site.address.region },
  ],
  medicalSpecialty: "VeterinaryMedicine",
  availableService: site.services.map((s) => ({
    "@type": "MedicalProcedure",
    name: s,
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang={site.language}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vetPedrosSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
