"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const CONTACT_EMAIL = "fernandafreirecozinha@gmail.com"
// Envio real sem backend próprio: FormSubmit entrega os dados no e-mail da
// Fernanda. Não exige dependência nem chave de API. ponytail: para trocar de
// serviço (Web3Forms, API própria etc.), basta mudar FORM_ENDPOINT e o corpo.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const projectOptions = [
  "Evento / casamento",
  "Jantar privado",
  "Consultoria gastronômica",
  "Desenvolvimento de produto",
  "Desenvolvimento de menu",
  "Outro",
]

type Status = "idle" | "sending" | "success" | "error"

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const projeto = String(data.get("Projeto") || "")

    // Metadados do FormSubmit.
    data.append("_subject", `Novo contato pelo site${projeto ? ` — ${projeto}` : ""}`)
    data.append("_template", "table")
    data.append("_captcha", "false")
    data.append("_replyto", String(data.get("email") || ""))

    setStatus("sending")
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && (json.success === "true" || json.success === true)) {
        form.reset()
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const labelClass =
    "block font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground mb-3"
  const fieldClass =
    "w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors duration-300"

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
              Cada projeto começa com uma conversa. Conte um pouco sobre a sua ideia
              e desenhamos juntos a experiência gastronômica ideal.
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-xl text-foreground hover:text-accent transition-colors duration-300 break-words"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground/60 mb-2">
                  TELEFONE
                </p>
                <a
                  href="tel:+5516997200624"
                  className="text-xl text-foreground hover:text-accent transition-colors duration-300"
                >
                  +55 16 99720-0624
                </a>
              </div>
              <div>
                <p className="font-[var(--font-montserrat)] text-xs tracking-[0.2em] text-muted-foreground/60 mb-2">
                  LOCALIZAÇÃO
                </p>
                <p className="text-xl text-foreground">São Carlos, SP - Brasil</p>
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
            {status === "success" ? (
              <div className="flex flex-col items-start justify-center h-full gap-6" role="status">
                <p className="font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-accent">
                  MENSAGEM ENVIADA
                </p>
                <h3 className="text-3xl font-light text-foreground leading-snug">
                  Obrigada pelo <span className="italic">contato</span>.
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Recebi os dados do seu projeto e retorno em breve. Se preferir, você
                  também pode escrever direto para{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-foreground hover:text-accent transition-colors duration-300 break-words"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  ENVIAR OUTRA MENSAGEM
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* honeypot anti-spam */}
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className={labelClass}>
                      NOME
                    </label>
                    <input
                      id="nome"
                      name="Nome"
                      type="text"
                      required
                      className={fieldClass}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      EMAIL
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projeto" className={labelClass}>
                    QUAL PROJETO VOCÊ DESEJA DESENVOLVER?
                  </label>
                  <select
                    id="projeto"
                    name="Projeto"
                    required
                    defaultValue=""
                    className={`${fieldClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {projectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="convidados" className={labelClass}>
                      Nº APROXIMADO DE CONVIDADOS/CLIENTES
                    </label>
                    <input
                      id="convidados"
                      name="Convidados/Clientes"
                      type="text"
                      inputMode="numeric"
                      className={fieldClass}
                      placeholder="Ex.: 50"
                    />
                  </div>
                  <div>
                    <label htmlFor="cidade" className={labelClass}>
                      CIDADE
                    </label>
                    <input
                      id="cidade"
                      name="Cidade"
                      type="text"
                      className={fieldClass}
                      placeholder="Cidade do projeto"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="data" className={labelClass}>
                    DATA PRETENDIDA
                  </label>
                  <input id="data" name="Data pretendida" type="date" className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="mensagem" className={labelClass}>
                    CONTE UM POUCO SOBRE A SUA IDEIA / PROJETO
                  </label>
                  <textarea
                    id="mensagem"
                    name="Mensagem"
                    rows={5}
                    required
                    className={`${fieldClass} resize-none`}
                    placeholder="Ocasião, estilo, referências, o que você imagina para essa experiência..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600 leading-relaxed" role="alert">
                    Não foi possível enviar agora. Tente novamente ou escreva direto para{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-accent break-words">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full font-[var(--font-montserrat)] text-xs tracking-[0.3em] bg-primary text-primary-foreground py-5 hover:bg-accent transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
