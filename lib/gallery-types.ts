// Tipos e rótulos da galeria — sem dependências de servidor (fs), para poder
// ser importado tanto no server quanto em componentes client.

export type Category =
  | "chef"
  | "pratos"
  | "retiros"
  | "doces"
  | "produtos"
  | "eventos"
  | "ingredientes"
  | "outros"

export const categoryLabels: Record<Category, string> = {
  chef: "Chef",
  pratos: "Pratos",
  retiros: "Retiros",
  doces: "Doces",
  produtos: "Produtos",
  eventos: "Eventos",
  ingredientes: "Ingredientes",
  outros: "Outros",
}

// Ordem em que os filtros aparecem.
export const categoryOrder: Category[] = [
  "chef",
  "pratos",
  "retiros",
  "doces",
  "produtos",
  "eventos",
  "ingredientes",
  "outros",
]

export interface GalleryImage {
  src: string
  category: Category
}
