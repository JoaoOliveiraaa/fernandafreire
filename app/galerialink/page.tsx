import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getGalleryImages } from "@/lib/gallery"
import { GalleryFilter } from "@/components/gallery-filter"

// Página oculta: não é linkada em nenhum lugar do site e não deve ser indexada.
export const metadata: Metadata = {
  title: "Galeria completa | Fernanda Freire",
  robots: { index: false, follow: false, nocache: true },
}

export default function GaleriaLinkPage() {
  const images = getGalleryImages()

  return (
    <main className="bg-background min-h-screen">
      <header className="px-6 md:px-12 lg:px-20 py-8">
        <Link href="/" aria-label="Fernanda Freire — início">
          <Image
            src="/images/FERNANDAFREIRE_LOGO_PRETO_SEMFUNDO.png"
            alt="Fernanda Freire"
            width={684}
            height={387}
            className="h-20 md:h-28 w-auto"
          />
        </Link>
      </header>

      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-[var(--font-montserrat)] text-xs tracking-[0.4em] text-accent mb-6">
            GALERIA COMPLETA
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground leading-[1.1]">
            Todas as <span className="italic">fotografias</span>
          </h1>
        </div>

        <GalleryFilter images={images} />
      </section>
    </main>
  )
}
