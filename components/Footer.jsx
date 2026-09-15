import {
  PawPrint,
  Phone,
  WhatsappLogo,
  MapPin,
  FacebookLogo,
} from "@phosphor-icons/react/ssr";

const servicios = [
  "Consultas",
  "Vacunación",
  "Urgencias",
  "Análisis",
  "Cirugía",
  "Peluquería",
];

const enlaces = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tienda", label: "Tienda" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Footer() {
  return (
    <footer className="bg-sun-pale/80 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <a
            href="#inicio"
            className="flex items-center gap-2"
            aria-label="Vet Pedros — Inicio"
          >
            <img
              src="/imgs/vetpedros/logovetpedros.png"
              alt=""
              className="h-10 w-auto"
              aria-hidden="true"
            />
            <span className="font-heading text-2xl font-bold uppercase tracking-wide">
              <span className="text-accent-dark">Vet</span>
              <span className="text-red">Pedros</span>
            </span>
            <PawPrint weight="fill" className="text-primary" size={22} aria-hidden="true" />
          </a>
          <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
            Clínica veterinaria y tienda para el bienestar de tu
            mascota. Un cuidado claro y cristalino.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: FacebookLogo, label: "Facebook", href: "https://www.facebook.com/VetPdros/" },
              { icon: WhatsappLogo, label: "WhatsApp", href: "https://wa.me/51943841602" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-red/20 text-ink-muted transition-all duration-200 hover:border-red hover:bg-red hover:text-white"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-ink">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2">
            {servicios.map((s) => (
              <li key={s}>
                <a
                  href="#servicios"
                  className="text-sm text-ink-muted transition-colors hover:text-ember-dark"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-ink">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              { icon: MapPin, text: "Elvira García y García 198, José Olaya, Chiclayo" },
              { icon: Phone, text: "+51 943 841 602" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2 text-sm text-ink-muted">
                <Icon size={18} className="mt-0.5 shrink-0 text-ember" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {enlaces.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full border border-red/20 px-3 py-1 text-xs text-ink-muted transition-colors hover:border-red hover:text-red-dark"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ember/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Vet Pedros. Todos los derechos reservados.
          </p>
          <p className="text-sm text-ink-muted">
            Hecho con cariño para las mascotas.
          </p>
        </div>
      </div>
    </footer>
  );
}