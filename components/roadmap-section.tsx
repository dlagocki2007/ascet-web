"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RoadmapPhase {
  phase: string;
  title: string;
  date: string;
  description: string;
  isCurrent?: boolean;
  milestones?: { date: string; description: string }[];
}

const roadmapData: RoadmapPhase[] = [
  {
    phase: "FAZA I — FUNDAMENT",
    title: "Uruchomienie ASCET.pl",
    date: "28.12.2025",
    description: "Punkt odniesienia. Manifest, filozofia, struktura.",
    isCurrent: true,
  },
  {
    phase: "FAZA II — TOŻSAMOŚĆ",
    title: "Start marki osobistej ASCET™",
    date: "01.01.2026",
    description: "Publiczne rozpoczęcie drogi. Dyscyplina jako praktyka codzienna.",
    milestones: [
      {
        date: "Styczeń 2026",
        description:
          "Publikacja poradników i protokołów. Systemy: ciało, umysł, proces.",
      },
    ],
  },
  {
    phase: "FAZA III — NARZĘDZIE",
    title: "Premiera aplikacji ASCET — v1",
    date: "Koniec stycznia 2026",
    description: "Prosty system wspierający dyscyplinę. Bez rozpraszaczy.",
  },
  {
    phase: "FAZA IV — ROZSZERZENIE",
    title: "Premiera aplikacji ASCET #2",
    date: "Luty 2026",
    description: "Uzupełnienie ekosystemu. Integracja procesów.",
  },
  {
    phase: "FAZA V — UTRWALENIE",
    title: "Merch ASCET™ — pierwszy drop",
    date: "Maj 2026",
    description: "Przedmioty użytkowe. Symbol, nie trend.",
  },
  {
    phase: "FAZA VI — SYSTEM",
    title: "Pakiet eBooków ASCET",
    date: "Czerwiec 2026",
    description: "Zamknięte systemy i protokoły.",
    milestones: [
      {
        date: "Wrzesień 2026",
        description:
          "Program „ASCET — Rok Dyscypliny”. Jedna ścieżka. Jeden proces.",
      },
    ],
  },
  {
    phase: "FAZA VII — ARCHIWUM",
    title: "Biblioteka Premium ASCET",
    date: "Grudzień 2026",
    description: "Archiwum wiedzy dla tych, którzy zostali.",
  },
];

function RoadmapNode({
  phase,
  index,
}: {
  phase: RoadmapPhase;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative"
    >
      {/* CONNECTION LINE */}
      {index < roadmapData.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute left-1/2 top-full w-px h-40 bg-gradient-to-b from-white/20 to-transparent origin-top"
        />
      )}

      {/* NODE */}
      <div className="flex flex-col items-center">
        <motion.div
          animate={
            phase.isCurrent
              ? { opacity: [0.6, 1, 0.6] }
              : {}
          }
          transition={
            phase.isCurrent
              ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
              : {}
          }
          className={`w-24 h-24 rounded-full border flex items-center justify-center ${
            phase.isCurrent
              ? "border-white/80 bg-white/5"
              : "border-white/30"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full border ${
              phase.isCurrent
                ? "border-white/50 bg-white/10"
                : "border-white/20"
            }`}
          />
        </motion.div>

        {/* TEXT */}
        <div className="mt-14 text-center max-w-md">
          <p className="text-xs tracking-[0.3em] text-white/40 mb-2">
            {phase.phase}
          </p>
          <h3 className="text-xl font-medium mb-2">{phase.title}</h3>
          <p className="text-sm text-white/40 mb-4">{phase.date}</p>
          <p className="text-sm text-white/60 leading-relaxed">
            {phase.description}
          </p>

          {phase.milestones && (
            <div className="mt-8 space-y-4">
              {phase.milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.2 }}
                  className="border-l border-white/20 pl-4 text-left"
                >
                  <p className="text-xs text-white/40 mb-1">
                    {milestone.date}
                  </p>
                  <p className="text-sm text-white/70">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-48 bg-black overflow-hidden"
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-40"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            Roadmap
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Ścieżka, nie plan. Dyscyplina, nie marketing.
          </p>
        </motion.div>

        {/* NODES */}
        <div className="space-y-40">
          {roadmapData.map((phase, index) => (
            <RoadmapNode key={index} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
