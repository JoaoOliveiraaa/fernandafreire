import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects, getProject } from "@/lib/projects"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Projeto | Fernanda Freire" }
  return {
    title: `${project.title} | Fernanda Freire`,
    description: project.description,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.title} | Fernanda Freire`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="bg-background">
      {/* Top bar */}
      <header className="px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
        <Link href="/" aria-label="Fernanda Freire — início">
          <Image
            src="/images/FERNANDAFREIRE_LOGO_PRETO_SEMFUNDO.png"
            alt="Fernanda Freire"
            width={684}
            height={387}
            className="h-20 md:h-24 w-auto"
          />
        </Link>
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          PROJETOS
        </Link>
      </header>

      {/* Hero do projeto */}
      <section className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`${project.title} — projeto de Fernanda Freire`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-primary-foreground/80 mb-6">
            PROJETO {project.number}
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-primary-foreground leading-tight text-balance max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Descrição */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 max-w-3xl mx-auto text-center">
        <div className="w-16 h-px bg-accent mx-auto mb-10" />
        <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed text-balance">
          {project.description}
        </p>
        {project.instagram && (
          <a
            href={project.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs tracking-[0.3em] text-foreground border-b border-accent/40 pb-2 hover:text-accent hover:border-accent transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @{project.instagram.replace(/\/+$/, "").split("/").pop()}
          </a>
        )}
      </section>

      {/* Galeria do projeto */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32 max-w-6xl mx-auto">
        <p className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-10 text-center">
          GALERIA
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {project.images.map((image) => (
            <div key={image.src} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground px-6 md:px-12 lg:px-20 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8 text-balance">
          Vamos criar algo <span className="italic">especial juntos</span>
        </h2>
        <Link
          href="/#contato"
          className="inline-block font-[var(--font-montserrat)] text-xs tracking-[0.3em] border border-primary-foreground/40 px-10 py-4 hover:bg-primary-foreground hover:text-primary transition-all duration-500"
        >
          FALAR COM A FERNANDA
        </Link>
      </section>
    </main>
  )
}
