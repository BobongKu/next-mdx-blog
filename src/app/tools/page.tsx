import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { TOOLS_DATA } from '@/data/tools-data';
import { ArrowRight, Github } from 'lucide-react';

export function generateMetadata(): Metadata {
  return {
    title: 'Tools | Bobong',
    description:
      '직접 만든 MCP 서버와 개발 도구들. 펜테스팅·리버싱 워크플로우를 LLM이 주도하게 만들기 위해 제작됨.',
  };
}

export default function ToolsPage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 sm:p-9 md:p-16">
      <Section className="mx-auto w-full max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Tools</h1>
          <p className="text-pretty text-muted-foreground">
            직접 만든 MCP 서버와 개발 도구들. 대부분 펜테스팅·리버싱 워크플로우를
            LLM이 주도하게 만들기 위해 제작됐다.
          </p>
        </div>

        <div className="space-y-6">
          {TOOLS_DATA.map((tool) => (
            <article
              key={tool.slug}
              className="rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500"
            >
              <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-mono text-xl font-bold">{tool.name}</h2>
                <Button asChild variant="ghost" size="sm" className="h-7 px-2">
                  <Link
                    href={tool.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1 text-xs"
                  >
                    <Github className="size-3.5" />
                    GitHub
                  </Link>
                </Button>
              </header>

              <p className="mb-4 text-sm font-medium text-foreground">
                {tool.tagline}
              </p>

              <ul className="mb-4 space-y-1.5 text-sm text-muted-foreground">
                {tool.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-[0.55em] inline-block size-1 shrink-0 rounded-full bg-muted-foreground" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4 flex flex-wrap gap-1">
                {tool.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[11px]">
                    {t}
                  </Badge>
                ))}
              </div>

              {tool.relatedPost && (
                <Link
                  href={tool.relatedPost.href}
                  className="group inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  관련 글: {tool.relatedPost.title}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
