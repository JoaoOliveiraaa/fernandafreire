import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fernandafreirecozinha.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({
      url: `${siteUrl}/projetos/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
