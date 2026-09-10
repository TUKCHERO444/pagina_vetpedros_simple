import "./globals.css";

export const metadata = {
  title: "Vet Pedros | Tu Mascota, Tu Familia",
  description: "Clínica veterinaria integral: consultas, urgencias y tienda para el bienestar de tus mascotas.",
  icons: {
    icon: "/imgs/vetpedros/logovetpedros.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
