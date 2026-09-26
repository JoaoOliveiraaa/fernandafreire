"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "A Fer prestou um serviço magnífico por 3 anos consecutivos em um retiro de surf, yoga e espiritualidade, realizado em Ubatuba/SP. Nos proporcionou uma experiência de comidas deliciosas e muito conhecimento sobre alimentação consciente.",
    author: "Malu Sabatino",
    title: "Jataí Guest House",
    location: "Ubatuba/SP",
  },
  {
    quote: "Pra mim o que ficou na memória em especial foi ter um pouco do nosso Ceará em São Paulo, com leveza, com várias delícias e um cardápio especialmente pensado e executado no que vem da terra. E ah, obviamente delicioso!",
    author: "Ticiana Rolim",
    title: "Jantar corporativo",
    location: "São Paulo/SP",
  },
  {
    quote: "A Fer é uma profissional diferenciada! Foi a chef do retiro de Yoga que organizei na Serra da Canastra e cuidou de cada detalhe com muito carinho, desde o cardápio e as combinações de sabores até as flores e a apresentação da mesa. Todos os alunos ficaram encantados, e eu, como organizadora, muito feliz e tranquila em contar com alguém tão dedicada.",
    author: "Renata Migliorini",
    title: "Ashtanga Yoga",
    location: "São João Batista do Glória/MG",
  },
  {
    quote: "Uma experiência gastronômica impecável, marcada pela excelência dos pratos, pela delicada harmonização entre os sabores e pela proporção perfeita de cada etapa da refeição. O cuidado e a proximidade com a chef tornaram o jantar ainda mais especial, acolhedor e memorável.",
    author: "Debora Vitta",
    title: "Jantar Sazonal",
  },
  {
    quote: "Comida boa, saudável e acolhedora — tudo isso com muita facilidade na comunicação e confiança no trabalho! Produzir um coffee break para um evento com mais de 200 pessoas não é tarefa fácil, mas Fernanda e equipe trabalharam com maestria para ter mesa bonita e farta em nosso evento sobre sistemas agroflorestais. Nada melhor do que alimentar pessoas seguindo nosso propósito de nutrir profundamente!",
    author: "Ana Clara",
    title: "CEIA · Coffee break",
    location: "Piracicaba/SP",
  },
  {
    quote: "O Jantar Sazonal é daquelas experiências que surpreendem de verdade. A cada mês, a Chef nos convidando para uma nova viagem gastronômica, explorando sabores, técnicas e culturas diferentes. Não existe nada parecido em São Carlos, e é uma experiência que facilmente poderia estar entre os grandes restaurantes do país. E tudo isso com algo que só o Sazonal tem: o acolhimento, o cuidado e a sensibilidade da Fernanda. Uma experiência única que a cidade ganhou e que eu faço questão de viver sempre que posso.",
    author: "Julia Moretti",
    title: "Jantar Sazonal",
  },
  {
    quote: "Adoro a chef Fernanda! Já tive o prazer de participar várias vezes do seu “Jantar Sazonal”, uma experiência única. Seus cardápios são deliciosos, cuidadosamente pensados e elaborados, valorizando a sazonalidade e a origem dos ingredientes, especialmente os da nossa terra. Fernanda tem ainda um olhar atento às restrições alimentares de cada pessoa e está sempre pesquisando, criando e trazendo novidades. Tudo isso com muita sensibilidade, criatividade e uma técnica impecável. É uma cozinha que surpreende, encanta e revela, em cada prato, o talento e a dedicação de quem ama o que faz!",
    author: "Ricardo Lobo",
    title: "Chef · Cozinha do Lobo",
  },
  {
    quote: "Simplesmente é uma experiência única! Com carinho no preparo e na apresentação!",
    author: "Adriana Mega",
    title: "Jantar Sazonal",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 9000)
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
                  {testimonial.location && (
                    <p className="font-[var(--font-montserrat)] text-xs tracking-wider text-muted-foreground/60">
                      {testimonial.location}
                    </p>
                  )}
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
