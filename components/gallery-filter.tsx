"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { type Category, type GalleryImage, categoryLabels, categoryOrder } from "@/lib/gallery-types"

export function GalleryFilter({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<Category | "todos">("todos")

  // Só mostra filtros de categorias que realmente têm fotos.
  const available = useMemo(() => {
    const present = new Set(images.map((i) => i.category))
    return categoryOrder.filter((c) => present.has(c))
  }, [images])

  const filtered = useMemo(
    () => (active === "todos" ? images : images.filter((i) => i.category === active)),
    [images, active],
  )

  const buttonClass = (isActive: boolean) =>
    `font-[var(--font-montserrat)] text-[11px] tracking-[0.2em] px-4 py-2 border transition-colors duration-300 ${
      isActive
        ? "border-accent text-accent"
        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
    }`

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          type="button"
          onClick={() => setActive("todos")}
          className={buttonClass(active === "todos")}
        >
          TODOS
        </button>
        {available.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={buttonClass(active === cat)}
          >
            {categoryLabels[cat].toUpperCase()}
          </button>
        ))}
      </div>

      <p className="text-center font-[var(--font-montserrat)] text-xs tracking-wider text-muted-foreground/60 mb-8">
        {filtered.length} {filtered.length === 1 ? "fotografia" : "fotografias"}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filtered.map((image) => (
          <a
            key={image.src}
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden bg-secondary/40"
          >
            <Image
              src={image.src}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </a>
        ))}
      </div>
    </>
  )
}
