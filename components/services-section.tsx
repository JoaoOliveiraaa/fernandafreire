"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    number: "01",
    category: "EXPERIÊNCIAS GASTRONÔMICAS",
    title: "Eventos & celebrações",
    description: "Casamentos, jantares, encontros corporativos e experiências gastronômicas desenvolvidas sob medida.",
  },
  {
    number: "02",
    category: "CRIAÇÃO & DESENVOLVIMENTO",
    title: "Menus, produtos & conceitos",
    description: "Desenvolvimento de cardápios, produtos alimentícios e conceitos gastronômicos para marcas, restaurantes e produtores.",
  },
  {
    number: "03",
    category: "CONSULTORIA GASTRONÔMICA",
    title: "Estratégia + cozinha + operação",
    description: "Da ideia ao prato: conceito, desenvolvimento, fichas técnicas, custos, testes, treinamento e implantação.",
  },
  {
    number: "04",
    category: "EXPERIÊNCIAS PRIVADAS",
    title: "Jantares autorais",
    description: "Menus exclusivos para eventos, criados de acordo com ocasião, território, estação e perfil dos convidados.",
  },
  {
    number: "05",
    category: "CONFEITARIA SEM LEITE / SEM AÇÚCAR",
    title: "Doces com restrição",
    description: "Bolos para bebês adoçados com frutas, bolos sem leite e sem glúten, e docinhos sem leite à base de frutas secas.",
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
                src="/images/IMG_20260915_104642_450.jpg"
                alt="Fernanda Freire, chef e consultora gastronômica"
                fill
                className="object-cover object-top"
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
                    <p className="font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-accent mb-4">
                      {service.category}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">
                      {service.description}
                    </p>
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
