import { MetadataRoute } from 'next';

import { baseDomain } from '@/config/const';
import { getCategoryDetailList, getSitemapPostList } from '@/lib/post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSitemapPostList();
  const categoryList = await getCategoryDetailList();

  const categoryUrls: MetadataRoute.Sitemap = categoryList.map((cg) => ({
    url: `${baseDomain}/post/${cg.dirName}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    {
      url: baseDomain,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseDomain}/post`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseDomain}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...categoryUrls,
    ...postList.map((post) => ({
      ...post,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
