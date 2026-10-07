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
      img("/images/jantar-01.jpg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-02.jpg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-03.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-04.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-05.jpg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-06.jpg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-07.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-08.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-09.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-10.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-11.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-12.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-13.jpeg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-14.jpg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-15.jpg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-16.jpg", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-17.png", "Jantar Sazonal — criação autoral de Fernanda Freire"),
      img("/images/jantar-18.png", "Jantar Sazonal — criação autoral de Fernanda Freire"),
    ],
  },
  {
    slug: "coffee-breaks-corporativos",
    number: "02",
    title: "Coffee breaks",
    description:
      "Coffee breaks completos para empresas, treinamentos e reuniões: bolos, focaccias, pães de queijo, patês, granolas e frutas, com bebidas e opções sem glúten e sem lactose sob demanda — montados com estética e cuidado no ponto do evento.",
    coverImage: "/images/projetos/cb-spread-doces.jpg",
    images: [
      img("/images/projetos/cb-estacao.jpg", "Estação de coffee break montada com café, bolos, granolas e frutas"),
      img("/images/projetos/cb-mesa-completa.jpg", "Mesa de coffee break corporativo com bolos, pão de queijo, frutas e sucos"),
      img("/images/projetos/cb-focaccia.jpg", "Focaccia artesanal com tomate e pesto servida em coffee break"),
      img("/images/projetos/cb-spread-doces.jpg", "Bolos, focaccia e pão de queijo dispostos em pratos e boleiras"),
      img("/images/projetos/cb-pao-de-queijo.jpg", "Bolo de coco, pão de queijo e docinhos sobre folha de costela-de-adão"),
      img("/images/projetos/cb-pate-torradas.jpg", "Patê cremoso com torradas de pão artesanal e pão de queijo"),
      img("/images/projetos/cb-crumble-coco.jpg", "Sobremesa de coco com farofa doce servida em coffee break"),
      img("/images/projetos/cb-spread2.jpg", "Variedade de bolos, focaccia e pão de queijo em bancada de evento"),
    ],
  },
  {
    slug: "casamentos-celebracoes",
    number: "03",
    title: "Casamentos & celebrações",
    description:
      "Menus desenvolvidos de acordo com história, tema e perfil dos anfitriões.",
    coverImage: "/images/projetos/evt-mousse-coco.jpg",
    images: [
      img("/images/projetos/evt-millefeuille.jpg", "Mil-folhas com pistache empratado"),
      img("/images/projetos/evt-mousse-coco.jpg", "Mousses individuais finalizadas com coco"),
      img("/images/IMG-20260918-WA0088.jpg", "Fatia de torta de chocolate empratada"),
      img("/images/IMG-20260918-WA0089.jpg", "Mesa de celebração com bolos, pães e focaccia"),
      img("/images/casamentos1.png", "Copos recheados"), 
    ],
  },
  {
    slug: "retiros",
    number: "04",
    title: "Retiros",
    description:
      "Cardápio desenvolvido para criar uma experiência gastronômica integrada a práticas de yoga, conexão com o eixo mente-corpo e prática de esportes.",
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
      img("/images/retiro-01.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-02.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-03.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-04.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-05.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-06.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-07.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-08.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-09.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-10.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-11.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-12.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-13.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-14.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-15.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-16.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-17.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-18.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-19.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-20.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-21.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-22.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-23.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-24.jpeg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-25.jpeg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-26.jpeg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-27.jpeg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
      img("/images/retiro-28.jpg", "Gastronomia de retiro desenvolvida por Fernanda Freire"),
    ],
  },
  {
    slug: "desenvolvimento-de-produtos",
    number: "05",
    title: "Desenvolvimento de produtos",
    description:
      "Criação de produtos mais saudáveis e aprimoramento de produtos para marcas e produtores de alimentos.",
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
      img("/images/desenv-01.jpeg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-02.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-03.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-04.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-05.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-06.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-07.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-08.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-09.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-10.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-11.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-12.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-13.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-14.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-15.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-16.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-17.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-18.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-19.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-20.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-21.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
      img("/images/desenv-22.jpg", "Desenvolvimento de produtos alimentícios por Fernanda Freire"),
    ],
  },
  {
    slug: "consultoria-gastronomica",
    number: "06",
    title: "Consultoria de Cardápio para negócios e restaurantes",
    description:
      "Do conceito ao prato: criação do conceito do negócio, adequação de cardápio para inclusão de alimentos para intolerâncias (glúten, leite), cardápios, fichas técnicas, custos de operações CMV, treinamento de equipe — da criação à operação da cozinha.",
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
  {
    slug: "confeitaria-sem-leite-sem-acucar",
    number: "07",
    title: "Confeitaria inclusiva",
    description:
      "Bolos e doces para restrições de açúcar e leite, glúten. Bolos para bebês adoçados só com frutas, opções de bolinhos sem glúten macios e unidos, bolinhos sem leite de vaca, doces funcionais e lowcarb.",
    coverImage: "/images/projetos/cf-torta-frutas.jpg",
    images: [
      img("/images/projetos/cf-torta-frutas.jpg", "Torta gelada sem açúcar decorada com goji, blueberries, nibs de cacau e flores comestíveis"),
      img("/images/projetos/cf-torta-topo.jpg", "Torta natural adoçada com frutas vista de cima sobre madeira rústica"),
      img("/images/projetos/cf-bolo-ganache.jpg", "Bolo de chocolate com ganache sem leite e flor comestível"),
      img("/images/projetos/cf-bolo-ganache2.jpg", "Bolo de chocolate sem leite finalizado com nibs de cacau e flor"),
      img("/images/projetos/cf-brownie.jpg", "Brownie sem açúcar refinado com nibs de cacau e sementes"),
      img("/images/projetos/cf-brownie2.jpg", "Brownies funcionais empratados com cacau e nibs"),
      img("/images/projetos/cf-cookies.jpg", "Cookies integrais de aveia e cacau sem açúcar refinado"),
      img("/images/projetos/cf-bolo-frutas.jpg", "Bolo gelado natural coberto com frutas vermelhas, cerejas e flores comestíveis"),
      img("/images/projetos/cf-bolo-chocolate.jpg", "Bolo de chocolate com ganache e nibs de cacau"),
      img("/images/IMG-20260918-WA0086.jpg", "Bandeja de docinhos de festa"),
      img("/images/confeitaria-01.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-02.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-03.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-04.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-05.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-06.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-07.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-08.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-09.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-10.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-11.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-12.jpg", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
      img("/images/confeitaria-13.png", "Confeitaria inclusiva — doce sem restrição por Fernanda Freire"),
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
