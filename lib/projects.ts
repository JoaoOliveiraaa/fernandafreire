// Fonte única dos projetos/áreas de atuação. Cada projeto tem capa e galeria
// própria, com fotografias reais da Fernanda agrupadas por tema — nunca
// misturadas entre projetos.
//
// Contexto importante (curadoria):
// - As fotos de "Jantar Sazonal" vêm do próprio projeto (public/images/projetos/js-*).
// - Trabalhos de consultoria são de CLIENTES e vivem só no case de consultoria:
//   pratos em prato azul (Asmana) + bastidores de cozinha (2Manas, em cases/).
//   Não reutilizar essas imagens como portfólio geral da Fernanda.
// ponytail: para trocar/ampliar uma galeria, basta editar os arrays abaixo.

export interface Project {
  slug: string
  number: string
  title: string
  description: string
  coverImage: string
  images: { src: string; alt: string }[]
  instagram?: string
}

const img = (src: string, alt: string) => ({ src, alt })

export const projects: Project[] = [
  {
    slug: "jantar-sazonal-casa-serena-terra",
    number: "01",
    title: "Jantar Sazonal — Casa Serena Terra",
    description:
      "Experiência gastronômica mensal dedicada à cozinha sazonal com temas da gastronomia brasileira e internacional, com ingredientes orgânicos e PANC (plantas alimentícias não convencionais), bem como aqueles que vêm de produtores de queijos, cogumelos e charcutaria locais e artesanais.",
    coverImage: "/images/projetos/js-moqueca.jpg",
    instagram: "https://www.instagram.com/jantar_sazonal/",
    images: [
      img("/images/projetos/js-salada-flor.jpg", "Salada autoral com mousse e flor comestível em prato de pedra"),
      img("/images/projetos/js-moqueca.jpg", "Moqueca de camarão com legumes e flores comestíveis"),
      img("/images/projetos/js-banana-carne.jpg", "Banana-da-terra assada com ragu e farofa"),
      img("/images/projetos/js-carne-pure.jpg", "Carne grelhada com purê, vagem e legumes assados"),
      img("/images/projetos/js-crumble-beterraba.jpg", "Crumble com compota de beterraba e pétala de rosa"),
      img("/images/projetos/js-salada-mousse.jpg", "Salada de folhas com mousse e flor em tigela artesanal"),
      img("/images/projetos/js-sobremesa.jpg", "Sobremesa empratada com calda e crocante de gergelim"),
      img("/images/projetos/js-ambiente.jpg", "Jantar sazonal servido em ambiente intimista à noite"),
      img("/images/projetos/js-roll-rosa.jpg", "Rolinho de peixe sobre folhas com gergelim e pétala de rosa"),
      img("/images/projetos/js-roll-tomate.jpg", "Rolinho de peixe com tomate confitado e flor comestível"),
      img("/images/projetos/js-bolo-caramelo.jpg", "Bolo cremoso com calda de caramelo e castanhas"),
      img("/images/projetos/js-banana-crumble.jpg", "Banana caramelizada com crumble e compota"),
    ],
  },
  {
    slug: "casamentos-celebracoes",
    number: "02",
    title: "Casamentos & celebrações",
    description:
      "Menus desenvolvidos de acordo com história, tema e perfil dos anfitriões.",
    coverImage: "/images/projetos/evt-bolo-rosa.jpg",
    images: [
      img("/images/projetos/evt-bolo-rosa.jpg", "Bolo de festa com cobertura rosa, frutas e flor comestível"),
      img("/images/IMG-20260918-WA0085.jpg", "Bolo de chocolate decorado sobre pétalas"),
      img("/images/projetos/evt-millefeuille.jpg", "Mil-folhas com pistache empratado"),
      img("/images/projetos/evt-mousse-coco.jpg", "Mousses individuais finalizadas com coco"),
      img("/images/IMG-20260918-WA0086.jpg", "Bandeja de docinhos de festa"),
      img("/images/IMG-20260918-WA0088.jpg", "Fatia de torta de chocolate empratada"),
      img("/images/IMG-20260918-WA0089.jpg", "Mesa de celebração com bolos, pães e focaccia"),
    ],
  },
  {
    slug: "retiros",
    number: "03",
    title: "Retiros",
    description:
      "Experiência gastronômica integrada a práticas de yoga, conexão com o eixo mente-corpo e prática de esportes.",
    coverImage: "/images/_MG_2550.JPG",
    images: [
      img("/images/_MG_2550.JPG", "Tigela de granola e iogurte com folha de palmeira"),
      img("/images/_MG_2598.JPG", "Bowl de granola com frutas segurado ao ar livre"),
      img("/images/_MG_2612 (1).JPG", "Bowl de granola em luz filtrada entre plantas"),
      img("/images/_MG_2593 (1).JPG", "Bowl de granola com frutas vermelhas e coco"),
      img("/images/projetos/ret-fernanda-servindo.jpg", "Fernanda finalizando as bebidas do café da manhã do retiro"),
      img("/images/projetos/ret-frutas.jpg", "Tábua de frutas frescas para o café comunitário"),
      img("/images/_MG_4498.jpg", "Bowl de granola com banana e morango"),
      img("/images/_MG_2595 (2).JPG", "Bowl de granola servido em prato dourado"),
      img("/images/projetos/ret-fernanda-smoothies.jpg", "Fernanda finalizando as vitaminas do café da manhã do retiro"),
      img("/images/projetos/ret-smoothies-bandeja.jpg", "Bandeja de vitaminas de frutas servidas no retiro ao ar livre"),
    ],
  },
  {
    slug: "desenvolvimento-de-produtos",
    number: "04",
    title: "Desenvolvimento de produtos",
    description:
      "Criação e aprimoramento de produtos para marcas e produtores de alimentos.",
    coverImage: "/images/_MG_4728.JPG",
    images: [
      img("/images/_MG_4759.JPG", "Linha de embalagens de granola artesanal"),
      img("/images/_MG_4520.JPG", "Bowls de granola ao lado da embalagem Premium"),
      img("/images/_MG_4419.jpg", "Granola servida ao lado da embalagem Premium"),
      img("/images/_MG_4401 (1).JPG", "Granola com embalagens Tradicional e Premium"),
      img("/images/_MG_3209 (2).JPG", "Salada com embalagem de granola salgada"),
      img("/images/_MG_4656.JPG", "Fernanda ao lado das embalagens desenvolvidas"),
      img("/images/projetos/prod-lactofermentados.jpg", "Linha de vegetais orgânicos lactofermentados em conserva"),
      img("/images/_MG_4661 (1).JPG", "Granola em tigela ao lado de embalagem"),
    ],
  },
  {
    slug: "consultoria-gastronomica",
    number: "05",
    title: "Consultoria gastronômica para negócios e restaurantes",
    description:
      "Do conceito ao prato: criação do conceito do negócio, adequação de cardápio para inclusão de alimentos para as intolerantes (glúten, leite), cardápios, fichas técnicas, custos de operações CMV, treinamento de equipe — da criação à operação da cozinha.",
    coverImage: "/images/_MG_0550.JPG",
    images: [
      img("/images/_MG_7997.JPG", "Sanduíche de menu com suco de manga"),
      img("/images/_MG_0341.JPG", "Quesadilla de carne com salada e molho"),
      img("/images/_MG_0654.JPG", "Milanesas e hambúrgueres empratados"),
      img("/images/_MG_7849.JPG", "Hambúrguer autoral servido na mão"),
      img("/images/_MG_1114.JPG", "Sanduíche prensado cortado ao meio"),
      img("/images/_MG_8012.JPG", "Crepe recheado com salada"),
      img("/images/projetos/cons-treinamento-equipe.jpg", "Fernanda em treinamento de equipe na cozinha do cliente"),
      img("/images/cases/2manas-molhos.jpg", "Desenvolvimento de molhos para o cardápio do cliente"),
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
