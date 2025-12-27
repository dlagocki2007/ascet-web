"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface RoadmapPhase {
  phase: string
  title: string
  date: string
  description: string
  isCurrent?: boolean
  milestones?: { date: string; description: string }[]
}

const roadmapData: RoadmapPhase[] = [
  {
    phase: "FAZA I — FUNDAMENT",
    title: "Oficjalne uruchomienie strony ASCET.pl",
    date: "28.12.2025",
    description: "Strona jako punkt odniesienia. Manifest, filozofia, struktura.",
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
        description: "Publikacja poradników i protokołów. Systemy działania: ciało, umysł, proces.",
      },
    ],
  },
  {
    phase: "FAZA III — NARZĘDZIE",
    title: "Premiera aplikacji ASCET — wersja 1",
    date: "Koniec stycznia 2026",
    description: "Prosty system wspierający dyscyplinę. Bez rozpraszaczy.",
  },
  {
    phase: "FAZA IV — ROZSZERZENIE",
    title: "Premiera aplikacji ASCET #2",
    date: "Druga połowa lutego 2026",
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
    title: "Pierwszy pakiet eBooków ASCET",
    date: "Czerwiec 2026",
    description: "Zamknięte systemy i protokoły.",
    milestones: [
      {
        date: "Wrzesień 2026",
        description: "Program „ASCET — Rok Dyscypliny”. Jeden proces. Jedna ścieżka.",
      },
    ],
  },
  {
    phase: "FAZA VII — ARCHIWUM",
    title: "Biblioteka Premium ASCET",
    date: "Grudzień 2026",
    description: "Archiwum wiedzy i systemów dla tych, którzy zostali.",
  },
]

function RoadmapNode({ phase, index }: { phase: RoadmapPhase; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connection line to next node */}
      {index < roadmapData.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="absolute left-1/2 top-full w-px h-32 bg-gradient-to-b from-white/30 to-transparent origin-top"
          style={{ transform: "translateX(-0.5px)" }}
        />
      )}

      {/* Node circle */}
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={
            phase.isCurrent
              ? {
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }
              : {}
          }
          transition={
            phase.isCurrent
              ? {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
              : {}
          }
          className={`w-24 h-24 rounded-full border-2 flex items-center justify-center relative ${
            phase.isCurrent ? "border-white bg-white/5" : "border-white/30 bg-black"
          }`}
        >
            {/* Halo / ripple for current phase (subtle, slow) */}
            {phase.isCurrent && (
              <motion.div
                aria-hidden
                initial={{ scale: 0.9, opacity: 0.25 }}
                animate={{ scale: [0.9, 1.6, 0.9], opacity: [0.18, 0.6, 0.18] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 35%, transparent 60%)',
                  filter: 'blur(18px)'
                }}
              />
            )}
          {/* Inner circle */}
          <div
            className={`w-16 h-16 rounded-full border ${
              phase.isCurrent ? "border-white/50 bg-white/10" : "border-white/20"
            }`}
          />

          {/* Center dot */}
          <div className={`absolute w-3 h-3 rounded-full ${phase.isCurrent ? "bg-white" : "bg-white/40"}`} />

          {/* "NOW" indicator for current phase */}
          {phase.isCurrent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-8 text-xs tracking-[0.3em] text-white/60"
            >
              NOW
            </motion.div>
          )}
        </motion.div>

        {/* Phase content */}
        <div className="mt-12 text-center max-w-md">
          <h3 className="text-xl font-bold tracking-tight mb-2">{phase.phase}</h3>
          <p className="text-sm text-white/40 mb-4 tracking-wide">{phase.date}</p>
          <h4 className="text-lg font-medium mb-3 leading-tight">{phase.title}</h4>
          <p className="text-sm text-white/60 leading-relaxed">{phase.description}</p>

          {/* Milestones */}
          {phase.milestones && (
            <div className="mt-6 space-y-3">
              {phase.milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 + idx * 0.2 }}
                  className="text-left border-l-2 border-white/20 pl-4 py-2"
                >
                  <p className="text-xs text-white/40 mb-1">{milestone.date}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative min-h-screen py-32 bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">Roadmap</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Ścieżka, nie plan. Dyscyplina, nie marketing.
          </p>
        </motion.div>

        {/* Roadmap nodes */}
        <div className="space-y-32">
          {roadmapData.map((phase, index) => (
            <RoadmapNode key={index} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
