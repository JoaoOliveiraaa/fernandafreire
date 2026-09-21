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
            className="h-16 md:h-20 w-auto"
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
