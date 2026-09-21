// Fonte única dos projetos/áreas de atuação. Cada projeto tem capa e galeria
// própria, com fotografias reais da Fernanda (public/images) agrupadas por tema
// — nunca misturadas entre projetos.
// ponytail: para trocar/ampliar uma galeria, basta editar os arrays abaixo.

export interface Project {
  slug: string
  number: string
  title: string
  description: string
  coverImage: string
  images: { src: string; alt: string }[]
}

const img = (src: string, alt: string) => ({ src, alt })

export const projects: Project[] = [
  {
    slug: "jantar-sazonal-casa-serena-terra",
    number: "01",
    title: "Jantar Sazonal — Casa Serena Terra",
    description:
      "Experiência gastronômica mensal dedicada à cozinha brasileira e à sazonalidade.",
    coverImage: "/images/_MG_3157.JPG",
    images: [
      img("/images/_MG_3157.JPG", "Prato sazonal com carne, cenouras assadas e folhas"),
      img("/images/_MG_0459.JPG", "Salada autoral com tomate, folhas e banana-da-terra"),
      img("/images/_MG_0550.JPG", "Peito de frango grelhado com salada de folhas"),
      img("/images/_MG_3178.JPG", "Galette servida com cenouras assadas"),
      img("/images/_MG_3225.JPG", "Frango com cenouras assadas e ervas"),
      img("/images/_MG_7684.JPG", "Pratos de salada com presunto cru e manga"),
      img("/images/_MG_1344.JPG", "Galette de trigo com recheio e salada"),
      img("/images/_MG_0581.JPG", "Composição de pratos da cozinha sazonal"),
    ],
  },
  {
    slug: "casamentos-celebracoes",
    number: "02",
    title: "Casamentos & celebrações",
    description:
      "Menus desenvolvidos de acordo com história, tema e perfil dos anfitriões.",
    coverImage: "/images/IMG-20260918-WA0086.jpg",
    images: [
      img("/images/IMG-20260918-WA0086.jpg", "Bandeja de docinhos de festa"),
      img("/images/IMG-20260918-WA0085.jpg", "Bolo de chocolate decorado com flores"),
      img("/images/IMG-20260918-WA0088.jpg", "Fatia de torta de chocolate empratada"),
      img("/images/IMG-20260918-WA0089.jpg", "Mesa de celebração com bolos, pães e focaccia"),
      img("/images/IMG-20260918-WA0090.jpg", "Mesa de buffet com salada e petiscos"),
      img("/images/IMG-20260516-WA0028.jpg", "Sobremesa de banana com farofa doce empratada"),
    ],
  },
  {
    slug: "retiros",
    number: "03",
    title: "Retiros",
    description:
      "Experiência gastronômica integrada a práticas de yoga, conexão com o eixo mente-corpo e prática de esportes.",
    coverImage: "/images/_MG_2598.JPG",
    images: [
      img("/images/_MG_2598.JPG", "Tigela de granola e iogurte servida ao ar livre"),
      img("/images/IMG-20260918-WA0087.jpg", "Tigelas de iogurte e granola em mesa comunitária"),
      img("/images/_MG_2564.JPG", "Bowl de frutas rosado"),
      img("/images/_MG_2576.JPG", "Tigela de granola com iogurte e frutas"),
      img("/images/_MG_2593 (1).JPG", "Bowl de granola com frutas vermelhas"),
      img("/images/_MG_2600 (1).JPG", "Tigela de café da manhã servida em prato dourado"),
      img("/images/_MG_2612 (1).JPG", "Bowl de granola segurado ao ar livre"),
      img("/images/_MG_4498.jpg", "Bowl de granola com banana e morango"),
      img("/images/_MG_2720 (1).JPG", "Pudim de chia em taça"),
    ],
  },
  {
    slug: "desenvolvimento-de-produtos",
    number: "04",
    title: "Desenvolvimento de produtos",
    description:
      "Criação e aprimoramento de produtos para marcas e produtores de alimentos.",
    coverImage: "/images/_MG_4520.JPG",
    images: [
      img("/images/_MG_4520.JPG", "Bowl de granola ao lado da embalagem do produto"),
      img("/images/_MG_4759.JPG", "Linha de embalagens de granola artesanal"),
      img("/images/_MG_4419.jpg", "Granola servida ao lado da embalagem Premium"),
      img("/images/_MG_4401 (1).JPG", "Granola com embalagens Tradicional e Premium"),
      img("/images/_MG_4661 (1).JPG", "Granola em tigela ao lado de embalagem"),
      img("/images/_MG_3209 (2).JPG", "Salada com embalagem de granola salgada"),
      img("/images/_MG_2953.JPG", "Muffins em formas ao lado de chocolate e cenoura"),
      img("/images/_MG_2832.JPG", "Gotas de chocolate e ovos para desenvolvimento"),
    ],
  },
  {
    slug: "consultoria-gastronomica",
    number: "05",
    title: "Consultoria gastronômica para negócios e restaurantes",
    description:
      "Desenvolvimento de conceitos, cardápios, fichas técnicas, custos e treinamento.",
    coverImage: "/images/_MG_7997.JPG",
    images: [
      img("/images/_MG_7997.JPG", "Sanduíche de menu com suco de manga"),
      img("/images/_MG_0341.JPG", "Quesadilla de carne com salada e molho"),
      img("/images/_MG_0654.JPG", "Milanesas e hambúrgueres empratados"),
      img("/images/_MG_1114.JPG", "Sanduíche prensado cortado ao meio"),
      img("/images/_MG_0760.JPG", "Sanduíche prensado com banana"),
      img("/images/_MG_8012.JPG", "Crepe recheado com salada"),
      img("/images/_MG_7981.JPG", "Sanduíche club com suco"),
      img("/images/_MG_9624.jpg", "Finalização de pastéis na cozinha"),
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
