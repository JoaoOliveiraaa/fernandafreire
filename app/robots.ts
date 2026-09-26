import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fernandafreirecozinha.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/galerialink' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
