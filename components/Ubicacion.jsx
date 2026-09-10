import { MapPin, Clock, Phone, WhatsappLogo, Envelope } from "@phosphor-icons/react/ssr";
import Mapa from "@/components/Mapa";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const contact = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Ejemplo 123, San Miguel, Lima",
    href: "#",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(01) 555-1234",
    href: "tel:+5115551234",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "999 888 777",
    href: "https://wa.me/51999888777",
  },
  {
    icon: Envelope,
    label: "Email",
    value: "hola@vetpedros.com",
    href: "mailto:hola@vetpedros.com",
  },
];

const horarios = [
  { day: "Lunes a Viernes", hours: "8:00 – 19:00" },
  { day: "Sábados", hours: "9:00 – 17:00" },
];

export default function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-gradient-to-br from-paper via-surface-soft to-primary-pale py-24"
    >
      <WaveDivider fill="#F8FBFF" />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[380px] w-[380px] rounded-full bg-accent-soft/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-deep">
            Ubicación y contacto
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
            Visítanos o escríbenos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Estamos cerca de ti. Agenda tu cita o resuelve cualquier duda.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full min-h-[320px] flex-col rounded-2xl border border-line bg-paper p-2 shadow-lg shadow-primary/5 lg:p-3">
              <div className="h-[320px] overflow-hidden rounded-xl lg:h-auto lg:flex-1">
                <Mapa />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/imgs/vetpedros/entradaprincipal.jpeg"
                  alt="Entrada de Vet Pedros"
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contact.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-pale text-primary-dark transition-colors group-hover:bg-primary-deep group-hover:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Clock size={22} className="text-primary-dark" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-ink">
                    Horarios
                  </h3>
                </div>
                <ul className="mt-4 divide-y divide-line">
                  {horarios.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <span className="text-ink-muted">{h.day}</span>
                      <span className="font-medium text-ink">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
