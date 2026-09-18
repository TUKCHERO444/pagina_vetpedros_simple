import { Stethoscope, ArrowRight, Sparkle } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden lg:flex lg:min-h-screen lg:items-center"
    >
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
        aria-hidden="true"
      >
        <img
          src="/imgs/vetpedros/banner1.jpeg"
          alt="Clínica veterinaria Vet Pedros en Chiclayo"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-sun-pale lg:hidden"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-sun-pale/95 via-sun-pale/65 to-transparent lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:pb-16 lg:px-8">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-soft bg-white/80 px-4 py-1.5 text-sm font-medium text-primary-deep backdrop-blur-sm">
              <Sparkle size={16} className="text-red" weight="fill" aria-hidden="true" />
              Tu veterinaria de confianza
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-wide text-ink sm:text-6xl lg:text-7xl">
              Cuidamos a tu mascota{" "}
              <span className="bg-gradient-to-r from-red-deep via-primary to-accent bg-clip-text text-transparent">
                como parte de tu familia
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              La seriedad de una clínica y la calidez de una familia, para la
              salud y el bienestar de tu mascota en cada etapa de su vida.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-red/20 transition-all duration-200 hover:bg-red-dark"
              >
                Nuestros servicios
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#tienda"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-red/20 transition-all duration-200 hover:bg-red-dark"
              >
                Tienda
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <Stethoscope size={20} className="text-primary-dark" aria-hidden="true" />
                +25 años de experiencia
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="relative h-56 w-full overflow-hidden sm:h-80 lg:hidden"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sun-pale to-transparent" />
        <img
          src="/imgs/vetpedros/banner1.jpeg"
          alt="Clínica veterinaria Vet Pedros en Chiclayo"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}