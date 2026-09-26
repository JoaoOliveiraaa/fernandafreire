"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PurposeSection() {
  return (
    <section className="bg-secondary/30 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative min-h-[60vh] lg:min-h-[85vh] order-1"
        >
          <Image
            src="/images/_MG_4394.jpg"
            alt="Preparo de peixe fresco com tomilho, couve-flor e limão"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Content Side */}
        <div className="order-2 flex items-center px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-8"
            >
              PROPÓSITO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-10"
            >
              Cozinha com <span className="italic">propósito</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
            >
              Minha cozinha parte do ingrediente. A partir dele, desenvolvo preparos
              que equilibram sabor, técnica, identidade e escolhas conscientes — sem
              abrir mão do prazer à mesa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 w-16 h-px bg-accent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
