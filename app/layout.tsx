import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

// ponytail: set NEXT_PUBLIC_SITE_URL to the real domain when it goes live; used for OG/canonical absolute URLs
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fernandafreirecozinha.com'

const title = 'Fernanda Freire | Chef & Consultora Gastronômica'
const description =
  'Gastronomia autoral entre território, técnica e memória. Criação de experiências gastronômicas, menus e produtos para eventos, marcas e projetos. Chef cearense e consultora de cardápios para restaurantes.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Fernanda Freire',
  authors: [{ name: 'Fernanda Freire' }],
  creator: 'Fernanda Freire',
  keywords: [
    'Fernanda Freire',
    'chef gastronomia brasileira',
    'consultora gastronômica',
    'consultoria de cardápios para restaurantes',
    'gastronomia autoral',
    'cozinha cearense',
    'cozinha nordestina',
    'desenvolvimento de produtos alimentícios',
    'menus para eventos',
    'jantares autorais',
    'casamentos gastronomia',
    'coffee break corporativo',
    'coffee break para empresas',
    'confeitaria sem açúcar',
    'confeitaria sem leite',
  ],
  alternates: { canonical: '/' },
  // ponytail: favicon/apple-icon vêm da convenção de arquivos do App Router
  // (app/icon.png 192px, app/apple-icon.png, app/favicon.ico) — 192 é múltiplo
  // de 48 como o Google exige para exibir o ícone na busca. Não redeclarar aqui.
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Fernanda Freire',
    url: siteUrl,
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Fernanda Freire — chef e consultora gastronômica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // GEO / local-context signals (base em São Carlos, SP; atende Brasil)
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Carlos',
    'geo.position': '-22.0087;-47.8909',
    ICBM: '-22.0087, -47.8909',
  },
}

export const viewport = {
  themeColor: '#f5f3ef',
}

// Organization + WebSite garantem que o Google associe a marca ao logo
// (logo do resultado de busca vem de Organization.logo, não de Person).
const instagram = 'https://www.instagram.com/fernandafreirecozinha/'

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fernanda Freire',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.jpg`,
  image: `${siteUrl}/images/og.jpg`,
  email: 'fernandafreirecozinha@gmail.com',
  telephone: '+5516997200624',
  areaServed: 'Brasil',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Carlos',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  sameAs: [instagram],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fernanda Freire',
  jobTitle: 'Chef & Consultora Gastronômica',
  description,
  url: siteUrl,
  image: `${siteUrl}/images/og.jpg`,
  email: 'fernandafreirecozinha@gmail.com',
  telephone: '+5516997200624',
  nationality: 'Brazilian',
  birthPlace: 'Ceará, Brasil',
  areaServed: 'Brasil',
  sameAs: [instagram],
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Carlos',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  },
  knowsAbout: [
    'Gastronomia autoral',
    'Cozinha brasileira contemporânea',
    'Cozinha cearense e nordestina',
    'Desenvolvimento de cardápios e produtos alimentícios',
    'Consultoria gastronômica para restaurantes',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Experiências Gastronômicas',
        description:
          'Casamentos, jantares, encontros corporativos e experiências gastronômicas desenvolvidas sob medida.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Criação & Desenvolvimento',
        description:
          'Desenvolvimento de cardápios, produtos alimentícios e conceitos gastronômicos para marcas, restaurantes e produtores.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Consultoria Gastronômica',
        description:
          'Da ideia ao prato: conceito, desenvolvimento, fichas técnicas, custos, testes, treinamento e implantação.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Experiências Privadas',
        description:
          'Menus exclusivos para eventos, criados de acordo com ocasião, território, estação e perfil dos convidados.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Coffee Breaks Corporativos',
        description:
          'Coffee breaks completos para empresas, treinamentos e reuniões, com opções sem glúten e sem lactose sob demanda.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Confeitaria sem Leite & sem Açúcar',
        description:
          'Bolos e docinhos com restrição: sem leite, sem glúten e adoçados com frutas — para bebês, intolerantes e quem busca doces mais saudáveis.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable} bg-background`}>
      <body className="font-serif antialiased text-editorial">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
