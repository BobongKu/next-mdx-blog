import { MetadataRoute } from 'next';

import { baseDomain } from '@/config/const';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseDomain}/sitemap.xml`,
    host: baseDomain,
  };
}
