import Link from 'next/link';
import { CalendarDays, Clock3, ArrowRight } from 'lucide-react';

import { WebSiteJsonLd } from '@/components/seo/JsonLd';
import { getSortedPostList } from '@/lib/post';

export default async function Home() {
  const recentPosts = (await getSortedPostList()).slice(0, 3);

  return (
    <div className='flex flex-col items-center overflow-hidden'>
      <WebSiteJsonLd />

      {/* Hero */}
      <div className='my-16' />
      <h1 className='z-10 animate-title cursor-default bg-white bg-clip-text px-0.5 py-3.5 text-5xl text-black duration-1000 text-edge-outline font-display dark:text-transparent sm:text-6xl md:text-7xl'>
        Bobong
      </h1>
      <div className='mb-8 mt-4 animate-fade-in text-center'>
        <h2 className='text-sm text-zinc-500'>Infosec Blog</h2>
      </div>

      {/* Recent Posts */}
      <section className='mx-auto w-full max-w-[700px] animate-fade-in px-4 pb-20'>
        <h3 className='mb-6 text-lg font-semibold'>Latest Posts</h3>
        <ul className='flex flex-col gap-4'>
          {recentPosts.map((post) => (
            <li key={post.url}>
              <Link
                href={post.url}
                className='group flex flex-col gap-2 rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50'
              >
                <span className='text-xs font-medium text-muted-foreground'>
                  {post.categoryPublicName}
                </span>
                <span className='text-base font-semibold transition-colors group-hover:text-primary sm:text-lg'>
                  {post.title}
                </span>
                <span className='line-clamp-1 text-sm text-muted-foreground'>
                  {post.desc}
                </span>
                <div className='flex gap-3 text-xs text-muted-foreground'>
                  <span className='flex items-center gap-1'>
                    <CalendarDays className='w-3' />
                    {post.dateString}
                  </span>
                  <span className='flex items-center gap-1'>
                    <Clock3 className='w-3' />
                    {post.readingMinutes}분
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className='mt-6 text-center'>
          <Link
            href='/post'
            className='inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary'
          >
            모든 글 보기
            <ArrowRight className='w-4' />
          </Link>
        </div>
      </section>
    </div>
  );
}
