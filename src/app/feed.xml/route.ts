import { baseDomain, blogAuthor, blogDesc, blogName } from '@/config/const';
import { getSortedPostList } from '@/lib/post';

export async function GET() {
  const posts = await getSortedPostList();

  const itemsXml = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseDomain}${post.url}</link>
      <guid isPermaLink="true">${baseDomain}${post.url}</guid>
      <description><![CDATA[${post.desc}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.categoryPublicName}</category>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${blogName}</title>
    <link>${baseDomain}</link>
    <description>${blogDesc}</description>
    <language>ko</language>
    <managingEditor>${blogAuthor}</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseDomain}/feed.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
