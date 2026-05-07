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

export const metadata: Metadata = {
  title: 'Fernanda Freire | Chef Pessoal',
  description: 'Experiências gastronômicas únicas com ingredientes sazonais. Chef pessoal, jantares privativos e consultoria para restaurantes.',
  keywords: ['chef pessoal', 'gastronomia', 'jantares privativos', 'São Paulo', 'culinária brasileira', 'fine dining'],
  openGraph: {
    title: 'Fernanda Freire | Chef Pessoal',
    description: 'Experiências gastronômicas únicas com ingredientes sazonais.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#f5f3ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable} bg-background`}>
      <body className="font-serif antialiased text-editorial">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
