"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/chef-portrait.jpg"
                alt="Chef Fernanda Freire"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-accent/20 -z-10" />
          </motion.div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6"
            >
              SOBRE A CHEF
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-8"
            >
              Uma jornada de <br />
              <span className="italic">sabores e memórias</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Há mais de 15 anos, dedico minha vida à arte de transformar ingredientes em experiências memoráveis. 
                Minha filosofia nasce da conexão profunda com a terra brasileira e suas infinitas possibilidades culinárias.
              </p>
              <p>
                Formada pelo Institut Paul Bocuse em Lyon e com passagens por restaurantes estrelados em Paris, 
                Tóquio e São Paulo, trago em cada prato uma fusão única entre técnicas clássicas e a riqueza dos 
                sabores da nossa terra.
              </p>
              <p>
                Cada jantar que crio é uma narrativa gastronômica — uma celebração da sazonalidade, 
                da memória afetiva e do prazer de compartilhar uma mesa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="w-16 h-px bg-accent" />
              <p className="font-light italic text-foreground">Fernanda Freire</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
