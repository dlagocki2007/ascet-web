"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-24 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.a
            href="#newsletter"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-12 py-5 border-2 border-white/20 hover:border-white/40 rounded-lg text-lg tracking-wider transition-colors group"
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">Enter ASCET</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">ASCET™</h2>
          <p className="text-lg text-white/50">Discipline Is Freedom</p>
          <p className="text-sm text-white/30 pt-8">© 2025 ASCET™. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
