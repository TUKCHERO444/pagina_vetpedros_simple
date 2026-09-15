import { Heart, Users, HandHeart, PawPrint } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const stats = [
  { value: "+25", label: "años cuidando mascotas" },
  { value: "+5.000", label: "pacientes atendidos" },
  { value: "100%", label: "trato con cariño" },
];

const fotos = [
  { src: "/imgs/vetpedros/doctor1.jpeg", alt: "Equipo veterinario de Vet Pedros" },
  { src: "/imgs/vetpedros/doctor2.jpeg", alt: "Equipo veterinario de Vet Pedros" },
  { src: "/imgs/vetpedros/pareddetitulos.jpeg", alt: "Títulos y certificaciones" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative bg-paper py-24">
      <WaveDivider fill="#F8FBFF" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface-soft via-paper to-primary-pale p-10 shadow-lg shadow-primary/5">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-light/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-4">
                <img
                  src="/imgs/vetpedros/logovetpedros.png"
                  alt=""
                  className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-md"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-heading text-2xl font-bold uppercase tracking-wide">
                    <span className="text-accent-dark">Vet</span>
                    <span className="text-red">Pedros</span>
                    <PawPrint weight="fill" className="ml-1.5 inline text-primary" size={20} aria-hidden="true" />
                  </p>
                  <p className="text-sm text-ink-muted">
                    Un cuidado claro y cristalino
                  </p>
                </div>
              </div>
              <p className="relative mt-6 leading-relaxed text-ink-muted">
                Somos un equipo de veterinarios y cuidadores que ve a cada
                mascota como parte de la familia. Combinamos tecnología,
                experiencia y mucha vocación para brindar atención de salud
                y bienestar en un ambiente limpio, luminoso y
                confiable.
              </p>
              <div className="relative mt-6 flex flex-wrap gap-4">
                {[
                  { icon: Heart, text: "Amor por los animales" },
                  { icon: Users, text: "Equipo especializado" },
                  { icon: HandHeart, text: "Atención humana" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-primary-deep backdrop-blur-sm"
                  >
                    <Icon size={18} aria-hidden="true" />
                    {text}
                  </span>
                ))}
              </div>

              <div className="relative mt-8 grid grid-cols-3 gap-3">
                {fotos.map(({ src, alt }) => (
                  <div key={src} className="overflow-hidden rounded-xl">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="h-24 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-deep">
                Nosotros
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
                Más que una clínica, una familia
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Nuestra misión es que cada mascota reciba el mejor cuidado
                posible y que cada dueño se sienta seguro y acompañado en cada
                paso.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 90}>
                  <div className="rounded-2xl border border-line bg-surface-soft p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-soft">
                    <p className="font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
