"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Recorte editorial e equilibrado: comida em destaque, a Fernanda, o processo e
// a experiência — sem pratos de clientes de consultoria (esses vivem só no case).
const galleryImages = [
  { src: "/images/projetos/js-moqueca.jpg", alt: "Moqueca de camarão com legumes e flores comestíveis", span: "col-span-2 row-span-2" },
  { src: "/images/_MG_2676.JPG", alt: "Castanhas, frutas secas e especiarias em tábua de cerâmica", span: "col-span-1 row-span-1" },
  { src: "/images/projetos/proc-peixe-tomilho.jpg", alt: "Preparo de peixe fresco com tomilho e limão", span: "col-span-1 row-span-1" },
  { src: "/images/_MG_3660.jpg", alt: "Fernanda Freire, chef e consultora gastronômica", span: "col-span-1 row-span-2" },
  { src: "/images/projetos/js-ambiente.jpg", alt: "Experiência de jantar sazonal servida à noite", span: "col-span-2 row-span-1" },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6"
          >
            GALERIA
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1]"
          >
            Momentos <span className="italic">capturados</span>
          </motion.h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden cursor-pointer ${image.span}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-primary/60 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={hoveredIndex === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA para a galeria completa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 md:mt-24 max-w-2xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-light text-foreground leading-snug text-balance mb-8">
            Cada prato guarda uma história — e há muitas para descobrir.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Explore o acervo completo com as fotografias da cozinha, dos ingredientes,
            dos eventos e das experiências da Fernanda.
          </p>
          <Link
            href="/galerialink"
            className="inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs tracking-[0.3em] bg-primary text-primary-foreground px-10 py-4 hover:bg-accent transition-colors duration-500"
          >
            VER GALERIA COMPLETA
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/fernandafreirecozinha/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            SIGA NO INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  )
}
