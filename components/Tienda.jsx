import { ShoppingBag, BowlFood, Bone, Drop, ShirtFolded, ArrowRight } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const productos = [
  {
    icon: BowlFood,
    name: "Alimento premium",
    desc: "Piensos de alta calidad para perros y gatos, según edad y tamaño.",
    tag: "Perros y gatos",
  },
  {
    icon: Bone,
    name: "Snacks y premios",
    desc: "Golosinas naturales y saludables para consentir a tu mascota.",
    tag: "Snacks",
  },
  {
    icon: Drop,
    name: "Higiene y cuidado",
    desc: "Shampoos, cepillos y productos de aseo para una piel sana.",
    tag: "Higiene",
  },
  {
    icon: ShirtFolded,
    name: "Accesorios",
    desc: "Correas, camas, juguetes y complementos para su día a día.",
    tag: "Accesorios",
  },
];

export default function Tienda() {
  return (
    <section
      id="tienda"
      className="relative overflow-hidden py-24"
    >
      <img
        src="/imgs/vetpedros/tiendadepructos.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sun-pale/90 via-sun-pale/85 to-sun-pale/95"
        aria-hidden="true"
      />
      <WaveDivider fill="#FFFFFF" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-accent-pale/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-dark">
              <ShoppingBag size={16} aria-hidden="true" />
              Nuestra tienda
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
              Productos para su bienestar
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Un catálogo cuidado de alimentos, higiene y accesorios para que tu
              mascota tenga lo mejor, con asesoría de nuestro equipo.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map(({ icon: Icon, name, desc, tag }, i) => (
            <Reveal key={name} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:shadow-xl hover:shadow-accent/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-pale text-accent-dark transition-colors duration-300 group-hover:bg-accent-dark group-hover:text-white">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <span className="mt-5 inline-block w-fit rounded-full bg-accent-pale px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent-dark">
                  {tag}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold uppercase tracking-wide text-ink">
                  {name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="https://wa.me/51999888777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent-dark px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-night"
          >
            Visítanos en nuestra tienda
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
