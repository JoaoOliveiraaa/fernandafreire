"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Fernanda transformou nosso jantar de aniversário em uma experiência inesquecível. Cada prato contava uma história, e nossos convidados ainda comentam sobre aquela noite.",
    author: "Marina Santos",
    title: "Jantar de Aniversário",
    location: "São Paulo, SP",
  },
  {
    quote: "A consultoria da Fernanda revolucionou nosso restaurante. Ela trouxe uma visão única que equilibra criatividade e viabilidade operacional.",
    author: "Ricardo Almeida",
    title: "Chef Executivo, Restaurante Araucária",
    location: "Curitiba, PR",
  },
  {
    quote: "Ter a Fernanda como nossa chef pessoal mudou completamente a relação da nossa família com a comida. Os jantares em casa viraram momentos especiais.",
    author: "Família Medeiros",
    title: "Chef Pessoal Residencial",
    location: "São Paulo, SP",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 md:py-40 bg-secondary/30">
      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-16"
          >
            DEPOIMENTOS
          </motion.p>

          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 20,
                  position: activeIndex === index ? "relative" : "absolute",
                }}
                transition={{ duration: 0.8 }}
                className={activeIndex === index ? "block" : "hidden"}
              >
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed mb-10 text-balance">
                  {'"'}{testimonial.quote}{'"'}
                </blockquote>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-lg font-medium text-foreground">{testimonial.author}</p>
                  <p className="font-[var(--font-montserrat)] text-xs tracking-wider text-muted-foreground">
                    {testimonial.title}
                  </p>
                  <p className="font-[var(--font-montserrat)] text-xs tracking-wider text-muted-foreground/60">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
