import {
  Stethoscope,
  Syringe,
  FirstAidKit,
  TestTube,
  PawPrint,
  Heart,
} from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const servicios = [
  {
    icon: Stethoscope,
    title: "Consultas",
    desc: "Atención general y chequeos periódicos con diagnóstico claro y trato cercano.",
    image: "/imgs/vetpedros/saladeatencion1.jpeg",
  },
  {
    icon: Syringe,
    title: "Vacunación",
    desc: "Plan de vacunación completo y a tiempo para cada etapa de vida de tu mascota.",
    image: "/imgs/servicios/vacunacion.jpg",
  },
  {
    icon: FirstAidKit,
    title: "Urgencias",
    desc: "Atención rápida ante emergencias con prioridad en la estabilización y el bienestar.",
    image: "/imgs/servicios/urgencias.jpg",
    tone: "red",
  },
  {
    icon: TestTube,
    title: "Análisis",
    desc: "Laboratorio y estudios para un diagnóstico preciso, con resultados claros.",
    image: "/imgs/vetpedros/laboratorio.jpeg",
  },
  {
    icon: Heart,
    title: "Cirugía",
    desc: "Procedimientos quirúrgicos seguros con seguimiento y cuidado postoperatorio.",
    image: "/imgs/vetpedros/saladecirugia.jpeg",
  },
  {
    icon: PawPrint,
    title: "Peluquería",
    desc: "Baño, corte y cuidado estético para que tu mascota se vea y se sienta genial.",
    image: "/imgs/servicios/peluqueria.jpg",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative bg-surface py-24">
      <WaveDivider fill="#FFFFFF" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-deep">
            <Stethoscope size={16} aria-hidden="true" />
            Servicios
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
            Atención veterinaria integral
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Todo lo que tu mascota necesita, en un solo lugar y con el cariño
            que merece. Nuestro equipo combina experiencia y vocación para
            cuidarla en cada etapa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, title, desc, image, tone }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="group h-full flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-sm transition-colors duration-300 ${
                      tone === "red"
                        ? "bg-red-pale/90 text-red-dark group-hover:bg-red group-hover:text-white"
                        : "bg-primary-pale/90 text-primary-dark group-hover:bg-primary group-hover:text-white"
                    }`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                    {desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
