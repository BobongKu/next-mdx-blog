import { baseDomain, blogAuthor, blogDesc, blogName } from '@/config/const';

interface BlogPostingProps {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  thumbnailUrl?: string;
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: blogName,
    description: blogDesc,
    url: baseDomain,
    author: {
      '@type': 'Person',
      name: blogAuthor,
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  datePublished,
  url,
  thumbnailUrl,
}: BlogPostingProps) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: blogAuthor,
      url: baseDomain,
    },
    publisher: {
      '@type': 'Person',
      name: blogAuthor,
    },
    url: `${baseDomain}${url}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseDomain}${url}`,
    },
  };

  if (thumbnailUrl) {
    jsonLd.image = `${baseDomain}${thumbnailUrl}`;
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
