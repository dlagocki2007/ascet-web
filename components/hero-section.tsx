"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/ascet-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-white text-7xl md:text-9xl font-bold tracking-tight"
        >
          ASCET™
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-6 text-white/80 text-xl md:text-2xl tracking-wide"
        >
          Discipline Is Freedom
        </motion.p>
      </motion.div>
    </section>
  )
}
