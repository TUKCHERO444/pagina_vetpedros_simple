"use client";

import { useEffect, useState } from "react";
import { List, X, PawPrint } from "@phosphor-icons/react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tienda", label: "Tienda" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-sun-pale/60 bg-sun-pale/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ember-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#ubicacion"
            className="rounded-full bg-red-deep px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red/20 transition-all duration-200 hover:bg-red-night"
          >
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="rounded-md p-2 text-ink transition-colors hover:text-ember-dark lg:hidden"
        >
          {open ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <List size={26} aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-sun-pale/60 bg-sun-pale/80 backdrop-blur-md lg:hidden">
          <nav
            className="flex flex-col gap-1 px-4 py-4"
            aria-label="Menú móvil"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-ember-pale hover:text-ember-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ubicacion"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-red-deep px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-red-night"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}