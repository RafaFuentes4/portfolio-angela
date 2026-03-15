"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/* ─── Data ─── */

const stats = [
  { number: "6", label: "Ediciones CGS", icon: "🚀" },
  { number: "20+", label: "Eventos organizados", icon: "📅" },
  { number: "1.500+", label: "Participantes", icon: "👧" },
  { number: "700+", label: "Niñas en CGS", icon: "💜" },
];

const photos = [
  {
    src: "/photos/Google_6julio_2025_bajaresolucion-19.jpg",
    alt: "Angela en el retrato de Cyber Girl Squad con la camiseta de Yes We Tech",
    title: "Retrato — Cyber Girl Squad",
    tags: ["Yes We Tech", "Google GSEC"],
  },
  {
    src: "/photos/DSC09469.jpg",
    alt: "Angela junto a Rafa y compañera mostrando camisetas DIV A de Yes We Tech",
    title: "Equipo <DIV>A",
    tags: ["<DIV>A", "Yes We Tech"],
  },
  {
    src: "/photos/Google_6julio_2025_bajaresolucion-10.jpg",
    alt: "Equipo de monitoras en el punto de registro de Cyber Girl Squad",
    title: "Registration — Cyber Girl Squad",
    tags: ["Coordinación", "Google GSEC"],
  },
  {
    src: "/photos/Google_6julio_2025_bajaresolucion-56.jpg",
    alt: "Equipo Yes We Tech presenta en el escenario de Google GSEC con banner de Google",
    title: "Presentación en Google GSEC",
    tags: ["Google", "Presentación"],
  },
  {
    src: "/photos/Google_6julio_2025_bajaresolucion-60.jpg",
    alt: "Angela lidera dinámica grupal con decenas de niñas en el jardín de Google GSEC",
    title: "¡Todas las manos arriba!",
    tags: ["Dinámicas", "Google GSEC"],
  },
  {
    src: "/photos/Google_6julio_2025_bajaresolucion-65.jpg",
    alt: "Angela al frente de un grupo numeroso de niñas dando instrucciones",
    title: "Liderando al Grupo",
    tags: ["Liderazgo", "Coordinación"],
  },
  {
    src: "/photos/Google16-10-143.jpg",
    alt: "Angela sentada a la altura de las niñas hablando con ellas de tú a tú",
    title: "Cercanía con las Participantes",
    tags: ["Mentoría", "Empatía"],
  },
  {
    src: "/photos/yeswe_bajaresolucion_uvemtz_7febrero-36.jpg",
    alt: "Angela bailando y celebrando rodeada de adolescentes con gafas de corazón",
    title: "¡A Bailar! — Celebración",
    tags: ["Celebración", "Energía"],
  },
  {
    src: "/photos/yeswe_bajaresolucion_uvemtz_7febrero-39.jpg",
    alt: "Angela conversa y guía a un grupo de chicas en el jardín de Google GSEC",
    title: "Guiando al Grupo",
    tags: ["Guía", "Google GSEC"],
  },
  {
    src: "/photos/yeswe_bajaresolucion_uvemtz_7febrero-45.jpg",
    alt: "Angela co-impartiendo taller Most Infected Computer Ever de ciberseguridad",
    title: "Taller: Most Infected Computer Ever",
    tags: ["Ciberseguridad", "Taller STEM"],
  },
  {
    src: "/photos/empresa_yeswetech.PNG",
    alt: "Angela como Vocal en la junta directiva The Motherboard de Yes We Tech",
    title: "The Motherboard — Junta Directiva",
    tags: ["Yes We Tech", "Vocal"],
  },
];

const milestones = [
  {
    year: "2022",
    title: "Campamento de Verano",
    desc: "Monitora de grupo durante 10 días con niños de 9–15 años. Actividades de playa, deportes, vídeo creativo y dinámicas de equipo.",
  },
  {
    year: "Sep 2022",
    title: "Grado en Ing. de Sonido e Imagen — UMA",
    desc: "Comienza la carrera en la Universidad de Málaga. Especialidad dentro de Ingeniería de Telecomunicaciones.",
  },
  {
    year: "Sep 2023",
    title: "Coordinadora en Blueberry",
    desc: "Coordinadora de monitoras para Cyber Girl Squad en colaboración con Google y Yes We Tech en Google GSEC Málaga. 5 ediciones, 700+ participantes.",
  },
  {
    year: "Feb 2024",
    title: "Yes We Tech — Vocal",
    desc: "Se une a la junta directiva. Organiza 20+ eventos tecnológicos, incluyendo Ciberseñoras de Oro (75+ mujeres 60+) y Feria Biblioteca Cánovas (150 niños, 3–10 años).",
  },
  {
    year: "2024",
    title: "Cyber Girl Squad — 6 Ediciones",
    desc: "Co-organiza 6 ediciones de talleres STEAM para niñas de 6–16 años: Python, arte con IA, impresión 3D y ciberseguridad. 100+ participantes por edición.",
  },
  {
    year: "2026",
    title: "SpaceTech — PlayerOne Academy",
    desc: "Candidata a monitora tecnológica para gymkhana espacial con Scratch y Lego WeDo 2.0 en Google GSEC Málaga.",
  },
];

const skills = [
  { name: "Coordinación de eventos (20+)", level: 95 },
  { name: "Gestión de grupos infantiles (100+ niños)", level: 95 },
  { name: "Comunicación en público y dinámicas", level: 95 },
  { name: "Scratch y Lego WeDo 2.0", level: 90 },
  { name: "Video Editing y Audio Mixing", level: 80 },
  { name: "Python, C++, C, Arduino", level: 75 },
];

/* ─── Hero ─── */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-950 px-6 pb-12 pt-16 text-center">
      {/* decorative blurs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[60%] h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute right-[20%] top-[20%] h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* profile image */}
        <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/20">
          <Image
            src="/photos/Google_6julio_2025_bajaresolucion-19.jpg"
            alt="Angela Fuentes"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <Badge
          variant="secondary"
          className="mb-4 bg-white/15 text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm border-0"
        >
          Portfolio
        </Badge>

        <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Angela Fuentes
        </h1>
        <p className="mb-3 text-lg font-semibold text-yellow-400 sm:text-xl">
          Monitora Tecnológica &amp; Coordinadora de Eventos STEM
        </p>
        <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Estudiante de Ingeniería de Sonido e Imagen en la UMA. Vocal de Yes We
          Tech. Coordinadora de Cyber Girl Squad en Google GSEC Málaga.
          Organizadora de más de 20 talleres tecnológicos alcanzando a más de
          1.500 participantes.
        </p>

        {/* CV links */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://drive.google.com/file/d/1VQP4_-UCnDzrDY6DBlfffmmSRaUNhsiy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            CV Español
          </a>
          <a
            href="https://drive.google.com/file/d/1Wx99cQJKfazKiF_TjEf6iTQz5qgsNOR5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-5 py-2.5 text-sm font-semibold text-yellow-300 backdrop-blur-sm transition-colors hover:bg-yellow-400/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            CV English
          </a>
        </div>

        {/* stats */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((s) => (
            <div key={s.label} className="min-w-[90px] text-center">
              <div className="text-2xl">{s.icon}</div>
              <div className="text-2xl font-extrabold text-white">
                {s.number}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Photo Grid ─── */

export function PhotoGrid() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  return (
    <>
      <section id="galeria" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-gray-900">
          Galería
        </h2>
        <p className="mb-10 text-center text-sm text-gray-400">
          Momentos que definen mi trabajo como monitora y coordinadora
        </p>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <button
              key={photo.src}
              onClick={() => setSelected(photo)}
              className="group mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              <div className="relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* overlay on hover */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white">{photo.title}</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {photo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/25 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={900}
              height={600}
              className="max-h-[70vh] w-full object-contain"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <div className="p-5">
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                {selected.title}
              </h3>
              <p className="mb-3 text-sm text-gray-500">{selected.alt}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Timeline ─── */

export function Timeline() {
  return (
    <section
      id="trayectoria"
      className="bg-gray-50 px-6 py-16"
    >
      <h2 className="mb-2 text-center text-3xl font-extrabold text-gray-900">
        Trayectoria
      </h2>
      <p className="mb-10 text-center text-sm text-gray-400">
        Del voluntariado a la coordinación profesional
      </p>

      <div className="relative mx-auto max-w-2xl">
        {/* vertical line */}
        <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-purple-200 sm:left-1/2 sm:-translate-x-px" />

        {milestones.map((m, i) => (
          <div
            key={i}
            className={`relative mb-8 flex items-start gap-5 sm:gap-0 ${
              i % 2 === 0
                ? "sm:flex-row"
                : "sm:flex-row-reverse"
            }`}
          >
            {/* dot */}
            <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-extrabold text-white ring-4 ring-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              {m.year.slice(-2)}
            </div>

            {/* card */}
            <Card
              className={`flex-1 border-l-4 border-l-purple-600 sm:w-[calc(50%-2rem)] ${
                i % 2 === 0
                  ? "sm:mr-auto sm:pr-8 sm:text-right"
                  : "sm:ml-auto sm:pl-8 sm:text-left"
              }`}
            >
              <CardContent className="p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-purple-600">
                  {m.year}
                </p>
                <h3 className="mb-1 text-sm font-bold text-gray-900">
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500">
                  {m.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Skills ─── */

export function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="mb-2 text-center text-3xl font-extrabold text-gray-900">
        Habilidades Clave
      </h2>
      <p className="mb-10 text-center text-sm text-gray-400">
        Combinación única de competencias técnicas y humanas
      </p>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1.5">
              <span className="text-sm font-semibold text-gray-700">
                {skill.name}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Footer ─── */

export function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10 text-center">
      <p className="mb-1 text-xs text-white/50">
        Portfolio preparado para la entrevista de
      </p>
      <p className="mb-1 text-base font-bold text-yellow-400">
        SpaceTech — PlayerOne Academy
      </p>
      <p className="mb-5 text-xs text-white/40">
        Google GSEC Málaga — Marzo 2026
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {["Yes We Tech", "Blueberry", "Google GSEC", "UMA"].map((org) => (
          <span
            key={org}
            className="rounded-full bg-white/10 px-3.5 py-1 text-[11px] text-white/60"
          >
            {org}
          </span>
        ))}
      </div>
    </footer>
  );
}
