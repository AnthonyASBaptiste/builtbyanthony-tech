import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'Claude-Web', 'PerplexityBot', 'Googlebot'],
        allow: '/',
      },
    ],
    sitemap: 'https://builtbyanthony.tech/sitemap.xml',
  };
}
