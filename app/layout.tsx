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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fernandafreire.com.br'

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
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Fernanda Freire',
    url: siteUrl,
    images: [
      {
        url: '/images/herofernanda.jpg',
        width: 1200,
        height: 630,
        alt: 'Fernanda Freire — gastronomia autoral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/herofernanda.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // GEO / local-context signals
  other: {
    'geo.region': 'BR',
    'geo.placename': 'Brasil',
  },
}

export const viewport = {
  themeColor: '#f5f3ef',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fernanda Freire',
  jobTitle: 'Chef & Consultora Gastronômica',
  description,
  url: siteUrl,
  image: `${siteUrl}/images/herofernanda.jpg`,
  email: 'fernandafreirecozinha@gmail.com',
  telephone: '+5516997200624',
  nationality: 'Brazilian',
  birthPlace: 'Ceará, Brasil',
  areaServed: 'Brasil',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
