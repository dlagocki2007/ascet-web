"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Loader2 } from "lucide-react"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // 🛡️ Honeypot (anty-bot)
    const formData = new FormData(e.currentTarget)
    if (formData.get("company")) {
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Błąd podczas zapisu")
      }

      setIsSuccess(true)
      setEmail("")
    } catch {
      setError("Coś poszło nie tak. Spróbuj ponownie.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="newsletter"
      ref={ref}
      className="relative min-h-screen py-32 bg-black flex items-center"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {!isSuccess ? (
            <>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                ASCET™
              </h2>

              <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed">
                To nie jest newsletter. To początek drogi.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 🛡️ Honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Twój adres e-mail"
                    required
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
                  />
                </motion.div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-400"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-white text-black font-medium tracking-wider rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Trwa…</span>
                    </>
                  ) : (
                    "Rozpocznij proces"
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            /* ✨ ZEN SUCCESS STATE (1c) */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center mt-12"
            >
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mb-8 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </motion.div>

              <p className="text-2xl md:text-3xl tracking-wide text-white/80">
                Zapisano.
              </p>

              <p className="text-sm mt-3 text-white/40 tracking-wide">
                Proces się rozpoczął.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
