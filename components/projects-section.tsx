"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 md:py-40 bg-secondary/30">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6"
          >
            PROJETOS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1]"
          >
            Cada projeto, uma <br className="hidden md:block" />
            <span className="italic">comida com identidade</span>
          </motion.h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
              >
                {/* Imagem */}
                <Link
                  href={`/projetos/${project.slug}`}
                  className={`group relative block aspect-[4/3] overflow-hidden ${
                    reversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} — projeto de Fernanda Freire`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                  <span className="absolute top-5 left-5 font-[var(--font-montserrat)] text-sm tracking-wider text-primary-foreground/90">
                    {project.number}
                  </span>
                </Link>

                {/* Texto */}
                <div className={reversed ? "md:order-1" : "md:order-2"}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-snug text-balance mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
                    {project.description}
                  </p>
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-foreground border-b border-accent/40 pb-2 hover:text-accent hover:border-accent transition-colors duration-300"
                  >
                    VEJA MAIS
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
