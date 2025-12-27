"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

interface NavigationProps {
  isVisible: boolean
  onCartClick: () => void
  cartCount: number
}

export function Navigation({ isVisible, onCartClick, cartCount }: NavigationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Left: Brand */}
              <Link href="/" className="text-2xl font-bold tracking-tighter">
                ASCET™
              </Link>

              {/* Center: Navigation links */}
              <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
                <Link href="#philosophy" className="hover:text-white/60 transition-colors">
                  Philosophy
                </Link>
                <Link href="#protocols" className="hover:text-white/60 transition-colors">
                  Protocols
                </Link>
                <Link href="#library" className="hover:text-white/60 transition-colors">
                  Library
                </Link>
                <Link href="#shop" className="hover:text-white/60 transition-colors">
                  Shop
                </Link>
                <Link href="#app" className="hover:text-white/60 transition-colors">
                  App
                </Link>
              </div>

              {/* Right: Cart */}
              <button onClick={onCartClick} className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black rounded-full text-xs flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
