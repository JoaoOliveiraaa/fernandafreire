"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contato" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6"
            >
              RESERVAS & CONTATO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-8"
            >
              Vamos criar algo <br />
              <span className="italic">especial juntos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-12 max-w-lg"
            >
              Cada projeto começa com uma conversa. Entre em contato para discutirmos 
              como posso transformar seu próximo evento em uma experiência gastronômica memorável.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <p className="font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground/60 mb-2">
                  EMAIL
                </p>
                <a
                  href="mailto:contato@fernandafreire.com.br"
                  className="text-xl text-foreground hover:text-accent transition-colors duration-300"
                >
                  contato@fernandafreire.com.br
                </a>
              </div>
              <div>
                <p className="font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground/60 mb-2">
                  TELEFONE
                </p>
                <a
                  href="tel:+5511999999999"
                  className="text-xl text-foreground hover:text-accent transition-colors duration-300"
                >
                  +55 11 99999-9999
                </a>
              </div>
              <div>
                <p className="font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground/60 mb-2">
                  LOCALIZAÇÃO
                </p>
                <p className="text-xl text-foreground">
                  São Paulo, Brasil
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 md:p-12"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground mb-3">
                    NOME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground mb-3">
                  TIPO DE SERVIÇO
                </label>
                <select className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors duration-300 cursor-pointer">
                  <option value="">Selecione um serviço</option>
                  <option value="personal">Chef Pessoal</option>
                  <option value="private">Jantar Privativo</option>
                  <option value="consulting">Consultoria</option>
                  <option value="event">Evento Especial</option>
                </select>
              </div>

              <div>
                <label className="block font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground mb-3">
                  DATA PRETENDIDA
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground mb-3">
                  MENSAGEM
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors duration-300 resize-none"
                  placeholder="Conte-me sobre sua ocasião especial..."
                />
              </div>

              <button
                type="submit"
                className="w-full font-[var(--font-montserrat)] text-xs tracking-[0.3em] bg-primary text-primary-foreground py-5 hover:bg-accent transition-colors duration-500"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
