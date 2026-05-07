"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function SeasonalSection() {
  return (
    <section id="experiencias" className="py-24 md:py-40 bg-secondary/30">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6"
          >
            EXPERIÊNCIAS SAZONAIS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] max-w-4xl mx-auto"
          >
            Cada estação, uma <br className="hidden md:block" />
            <span className="italic">nova história</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] lg:aspect-auto lg:row-span-2 overflow-hidden"
          >
            <Image
              src="/images/dining-experience.jpg"
              alt="Experiência gastronômica"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-primary-foreground/80 mb-3">
                MENU DEGUSTAÇÃO
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-primary-foreground">
                Outono Brasileiro
              </h3>
            </div>
          </motion.div>

          {/* Right Column Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <span className="font-[var(--font-montserrat)] text-5xl font-light text-accent/30">01</span>
              <div>
                <h3 className="text-2xl font-light text-foreground mb-4">Jantares Íntimos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experiências gastronômicas exclusivas para até 12 convidados na intimidade do seu lar. 
                  Menu personalizado com ingredientes de produtores locais selecionados.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <span className="font-[var(--font-montserrat)] text-5xl font-light text-accent/30">02</span>
              <div>
                <h3 className="text-2xl font-light text-foreground mb-4">Eventos Especiais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Celebrações que merecem uma experiência gastronômica única. 
                  Do planejamento à execução, cada detalhe é cuidadosamente orquestrado.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
