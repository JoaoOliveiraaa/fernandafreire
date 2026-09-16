"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "#sobre", label: "SOBRE" },
    { href: "#experiencias", label: "EXPERIÊNCIAS" },
    { href: "#servicos", label: "SERVIÇOS" },
    { href: "#galeria", label: "GALERIA" },
    { href: "#contato", label: "CONTATO" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dish.jpg"
          alt="Prato sofisticado"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-20 py-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/FERNANDAFREIRE_LOGO_BRANCO.png"
              alt="Fernanda Freire"
              width={684}
              height={387}
              priority
              className="h-14 md:h-20 w-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-12 font-[var(--font-montserrat)] text-sm tracking-[0.2em] text-primary-foreground/90"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-primary-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:hidden text-primary-foreground z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm" />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-8"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="font-[var(--font-montserrat)] text-lg tracking-[0.3em] text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[var(--font-montserrat)] text-[10px] md:text-xs tracking-[0.3em] text-primary-foreground/80 mb-6 leading-relaxed max-w-2xl mx-auto"
        >
          CHEF GASTRONOMIA BRASILEIRA · CONSULTORA DE CARDÁPIOS PARA RESTAURANTES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-tight leading-[0.95] mb-5"
        >
          <span className="block">Fernanda</span>
          <span className="block italic font-normal">Freire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-[var(--font-montserrat)] text-sm md:text-base tracking-[0.25em] text-primary-foreground/90 mb-8"
        >
          CHEF & CONSULTORA GASTRONÔMICA
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-primary-foreground/90 font-light italic max-w-2xl mx-auto leading-relaxed mb-6"
        >
          Gastronomia autoral entre território, técnica e memória.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-sm md:text-base text-primary-foreground/75 font-light max-w-xl mx-auto leading-relaxed"
        >
          Criação de experiências gastronômicas, menus e produtos para eventos,
          marcas e projetos que valorizam ingredientes, identidade e uma cozinha
          feita com intenção.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12"
        >
          <a
            href="#contato"
            className="inline-block font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-primary-foreground border border-primary-foreground/40 px-10 py-4 hover:bg-primary-foreground hover:text-primary transition-all duration-500"
          >
            AGENDAR EXPERIÊNCIA
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-primary-foreground/60"
        >
          <span className="font-[var(--font-montserrat)] text-[10px] tracking-[0.3em] rotate-90 origin-center">SCROLL</span>
          <svg className="w-4 h-8" viewBox="0 0 16 32" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="1" y="1" width="14" height="24" rx="7" />
            <motion.circle
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ cy: [8, 16, 8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
