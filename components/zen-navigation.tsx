"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

interface ZenNavigationProps {
  isVisible: boolean
}

const navItems = [
  { label: "ASCET™", href: "#hero" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Newsletter", href: "#newsletter" },
]

export function ZenNavigation({ isVisible }: ZenNavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Vertical side navigation */}
          <motion.nav
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          >
            <div className="flex flex-col items-start gap-1">
              {/* Navigation glyphs */}
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative py-3"
                >
                  <div className="flex items-center gap-4">
                    {/* Glyph - minimal circle */}
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        opacity: hoveredIndex === index ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-2 h-2 rounded-full border border-white"
                    />

                    {/* Label appears on hover */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm tracking-wider whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              ))}
            </div>
          </motion.nav>

          {/* Top bar for mobile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/20 border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-8 py-4">
              <div className="flex items-center justify-center">
                {/* Centered brand */}
                <Link href="/" className="text-xl font-bold tracking-[0.3em]">
                  ASCET™
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Mobile menu - minimal bottom nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden"
          >
            <div className="flex items-center gap-1 px-4 py-3 rounded-full backdrop-blur-2xl bg-black/40 border border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-xs tracking-wider opacity-60 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
