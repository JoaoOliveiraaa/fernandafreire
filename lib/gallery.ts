import fs from "node:fs"
import path from "node:path"
import { type Category, type GalleryImage, categoryOrder } from "./gallery-types"

// Página /galerialink (oculta): lista TODAS as fotografias reais da Fernanda,
// lidas direto de public/images no build. Categorias abaixo permitem filtrar.
// ponytail: para recategorizar uma foto, mova a chave (base do nome, minúsculo)
// entre os arrays. Fotos novas caem em "Outros" até serem mapeadas.

const categoryMap: Partial<Record<Category, string[]>> = {
  chef: [
    "_mg_2874", "_mg_2903", "_mg_2917", "_mg_2963", "_mg_2981", "_mg_2988",
    "_mg_2997", "_mg_3023", "_mg_3032", "_mg_3096", "_mg_3109", "_mg_3147",
    "_mg_3165", "_mg_3297", "_mg_3300", "_mg_3304", "_mg_3331", "_mg_3335",
    "_mg_3660", "_mg_3661", "_mg_3693", "_mg_9192", "_mg_4432", "_mg_4433",
    "_mg_4564", "_mg_4656", "img_20260915_104642_450", "herofernanda",
    "bio-01", "bio-02", "bio-03", "bio-04", "bio-05", "bio-06", "bio-07", "bio-08",
    "bio-09", "bio-10", "bio-11", "bio-12", "bio-13", "bio-14", "bio-15",
  ],
  jantar: [
    "jantar-01", "jantar-02", "jantar-03", "jantar-04", "jantar-05", "jantar-06",
    "jantar-07", "jantar-08", "jantar-09", "jantar-10", "jantar-11", "jantar-12",
    "jantar-13", "jantar-14", "jantar-15", "jantar-16", "jantar-17", "jantar-18",
  ],
  pratos: [
    "_mg_0341", "_mg_0459", "_mg_0550", "_mg_0581", "_mg_0654", "_mg_0760",
    "_mg_1038", "_mg_1114", "_mg_1262", "_mg_1344", "_mg_3139", "_mg_3157",
    "_mg_3178", "_mg_3189", "_mg_3225", "_mg_3230", "_mg_4394", "_mg_7684",
    "_mg_7687", "_mg_7689", "_mg_7849", "_mg_7886", "_mg_7887", "_mg_7981",
    "_mg_7997", "_mg_8012", "_mg_9624",
  ],
  retiros: [
    "img-20260918-wa0087", "_mg_2550", "_mg_2564", "_mg_2576", "_mg_2583",
    "_mg_2593", "_mg_2595", "_mg_2598", "_mg_2600", "_mg_2612", "_mg_2638",
    "_mg_2644", "_mg_2652", "_mg_4498", "_mg_4591",
    "retiro-01", "retiro-02", "retiro-03", "retiro-04", "retiro-05", "retiro-06",
    "retiro-07", "retiro-08", "retiro-09", "retiro-10", "retiro-11", "retiro-12",
    "retiro-13", "retiro-14", "retiro-15", "retiro-16", "retiro-17", "retiro-18",
    "retiro-19", "retiro-20", "retiro-21", "retiro-22", "retiro-23", "retiro-24",
    "retiro-25", "retiro-26", "retiro-27", "retiro-28",
  ],
  doces: [
    "img-20260516-wa0028", "img-20260918-wa0085", "img-20260918-wa0088",
    "_mg_2720", "_mg_2757", "_mg_2776", "_mg_2953",
    "confeitaria-01", "confeitaria-02", "confeitaria-03", "confeitaria-04",
    "confeitaria-05", "confeitaria-06", "confeitaria-07", "confeitaria-08",
    "confeitaria-09", "confeitaria-10", "confeitaria-11", "confeitaria-12", "confeitaria-13",
  ],
  produtos: [
    "_mg_3209", "_mg_4401", "_mg_4419", "_mg_4439", "_mg_4520", "_mg_4661",
    "_mg_4728", "_mg_4759",
    "desenv-01", "desenv-02", "desenv-03", "desenv-04", "desenv-05", "desenv-06",
    "desenv-07", "desenv-08", "desenv-09", "desenv-10", "desenv-11", "desenv-12",
    "desenv-13", "desenv-14", "desenv-15", "desenv-16", "desenv-17", "desenv-18",
    "desenv-19", "desenv-20", "desenv-21", "desenv-22",
  ],
  eventos: ["img-20260918-wa0086", "img-20260918-wa0089", "img-20260918-wa0090"],
  ingredientes: ["_mg_0182", "_mg_0234", "_mg_0238", "_mg_2676", "_mg_2800", "_mg_2832"],
}

// Fotos genéricas/legadas que NÃO fazem parte do portfólio real.
// A segunda linha são fotos que a Fernanda pediu para tirar do site.
const excluded = new Set([
  "chef-portrait", "consulting", "dessert", "dining-experience",
  "hands-cooking", "hero-dish", "ingredients", "logo",
  "_mg_7886", "_mg_7981", "img-20260516-wa0028", "_mg_2720", "_mg_2652",
  "_mg_2564", "_mg_0760", "_mg_3304", "_mg_2917",
  // Pedido 07/10: duplicata (última da aba Chef) + 3a da galeria, p/ enxugar.
  // "og" = imagem de OpenGraph (duplicata do retrato); fica fora da galeria.
  "herofernanda", "_mg_2903", "og",
])

const lookup: Record<string, Category> = {}
for (const cat of Object.keys(categoryMap) as Category[]) {
  for (const base of categoryMap[cat]!) lookup[base] = cat
}

// Remove extensão e sufixos " (1)"/" (2)" de cópias.
function normalize(file: string): string {
  return file
    .replace(/\.(jpe?g|png)$/i, "")
    .replace(/ \(\d+\)$/, "")
    .toLowerCase()
}

export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "images")
  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && /\.(jpe?g|png)$/i.test(d.name))
    .map((d) => d.name)

  const seen = new Set<string>()
  const images: GalleryImage[] = []

  for (const file of files.sort()) {
    const base = normalize(file)
    if (excluded.has(base) || base.startsWith("placeholder") || base.includes("logo")) continue
    if (seen.has(base)) continue // dedupe cópias
    seen.add(base)
    images.push({ src: `/images/${file}`, category: lookup[base] ?? "outros" })
  }

  // Ordena por categoria (ordem definida) para agrupamento visual.
  return images.sort(
    (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
  )
}
