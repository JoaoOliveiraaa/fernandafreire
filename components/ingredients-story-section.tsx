"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Composição enxuta com as fotografias de ingredientes já disponíveis no projeto
// (public/images/ingredientes). Seção pequena e editorial — sem virar galeria.
const ingredientImages = [
  {
    src: "/images/ingredientes/_MG_0182.JPG",
    alt: "Tigelas de cerâmica com coentro, castanhas e ingredientes brasileiros",
    // imagem alta à esquerda: ocupa a altura das duas quadradas empilhadas
    className: "row-span-2",
  },
  {
    src: "/images/ingredientes/_MG_0234.JPG",
    alt: "Detalhe de ingredientes brasileiros frescos",
    className: "aspect-square",
  },
  {
    src: "/images/ingredientes/_MG_0238.JPG",
    alt: "Ingredientes e texturas da cozinha autoral brasileira",
    className: "aspect-square",
  },
]

export function IngredientsStorySection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Texto */}
        <div className="max-w-md">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6"
          >
            INGREDIENTES QUE CONTAM HISTÓRIAS
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-[1.3] text-balance"
          >
            Minha cozinha encontra inspiração nos ingredientes brasileiros, nas
            diferentes paisagens do país e na memória que existe por trás de cada preparo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 w-16 h-px bg-accent"
          />
        </div>

        {/* Composição de fotografias */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-2 gap-3 md:gap-4"
        >
          {ingredientImages.map((image) => (
            <div key={image.src} className={`relative overflow-hidden ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
