"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ConsultingSection() {
  return (
    <section className="py-24 md:py-40 bg-primary text-primary-foreground overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-primary-foreground/60 mb-6"
            >
              CONSULTORIA GASTRONÔMICA
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8"
            >
              Transformando <br />
              <span className="italic">restaurantes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-primary-foreground/80 leading-relaxed mb-10 max-w-lg"
            >
              Trabalho com restaurantes e marcas de alimentação para criar experiências 
              gastronômicas memoráveis. Da concepção do cardápio à execução operacional, 
              ofereço uma visão completa para elevar seu negócio ao próximo nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-8 mb-12"
            >
              <div>
                <p className="text-4xl font-light mb-2">15+</p>
                <p className="font-[var(--font-montserrat)] text-xs tracking-wider text-primary-foreground/60">
                  ANOS DE EXPERIÊNCIA
                </p>
              </div>
              <div>
                <p className="text-4xl font-light mb-2">50+</p>
                <p className="font-[var(--font-montserrat)] text-xs tracking-wider text-primary-foreground/60">
                  PROJETOS REALIZADOS
                </p>
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#contato"
              className="inline-block font-[var(--font-montserrat)] text-xs tracking-[0.3em] border border-primary-foreground/40 px-10 py-4 hover:bg-primary-foreground hover:text-primary transition-all duration-500"
            >
              INICIAR PROJETO
            </motion.a>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/consulting.jpg"
                alt="Consultoria gastronômica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-8 max-w-xs"
            >
              <p className="text-lg font-light italic leading-relaxed">
                {'"'}A gastronomia é a arte de transformar produtos em emoções.{'"'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
