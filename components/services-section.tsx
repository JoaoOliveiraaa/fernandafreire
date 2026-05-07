"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    number: "01",
    title: "Chef Pessoal",
    description: "Serviço contínuo de culinária personalizada para famílias que valorizam a excelência gastronômica no dia a dia.",
    features: ["Menu semanal personalizado", "Ingredientes premium", "Dietas especiais"],
  },
  {
    number: "02",
    title: "Jantares Privativos",
    description: "Experiências gastronômicas exclusivas na sua residência, perfeitas para ocasiões especiais e entretenimento.",
    features: ["Até 24 convidados", "Equipe completa", "Harmonização de vinhos"],
  },
  {
    number: "03",
    title: "Consultoria",
    description: "Desenvolvimento de conceitos gastronômicos, menus e treinamento para restaurantes e marcas de alimentação.",
    features: ["Criação de cardápios", "Treinamento de equipes", "Gestão de custos"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6"
            >
              SERVIÇOS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-foreground leading-[1.1] mb-8"
            >
              Como posso <br />
              <span className="italic">atendê-lo</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden mt-12 hidden lg:block"
            >
              <Image
                src="/images/hands-cooking.jpg"
                alt="Preparação artesanal"
                fill
                className="object-cover"
                sizes="400px"
              />
            </motion.div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-8 space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group py-12 border-b border-border/50 first:border-t"
              >
                <div className="flex items-start gap-8">
                  <span className="font-[var(--font-montserrat)] text-sm text-accent/50 pt-2">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="font-[var(--font-montserrat)] text-xs tracking-wider text-muted-foreground/80 border border-border px-4 py-2"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="hidden md:block pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ x: 10 }}
                  >
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
