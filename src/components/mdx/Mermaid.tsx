'use client';

import { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X, Maximize2 } from 'lucide-react';

interface MermaidProps {
  chart: string;
}

/**
 * Client-side Mermaid renderer.
 * - dynamic import → server bundle 미포함
 * - 테마 변경 시 재렌더
 * - 클릭하면 전체화면 모달로 확대
 */
export const Mermaid = ({ chart }: MermaidProps) => {
  const id = useId().replace(/[:]/g, '_');
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedTheme === 'dark' ? 'dark' : 'default',
          securityLevel: 'loose',
          fontFamily: 'inherit',
        });
        const rendered = await mermaid.render(`mermaid-${id}`, chart);
        if (!cancelled) {
          setSvg(rendered.svg);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  if (error) {
    return (
      <pre className="overflow-auto rounded bg-red-50 p-4 text-sm text-red-900 dark:bg-red-950 dark:text-red-200">
        <strong>Mermaid render error:</strong>
        {'\n'}
        {error}
        {'\n\n'}
        {chart}
      </pre>
    );
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="다이어그램 확대"
          className="group relative my-6 block w-full cursor-zoom-in overflow-auto rounded border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500"
        >
          <div
            className="flex justify-center"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <span className="pointer-events-none absolute right-3 top-3 rounded bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/20">
            <Maximize2 className="h-4 w-4" />
          </span>
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex max-h-[95vh] w-[95vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-auto rounded-lg border bg-white p-6 shadow-lg dark:bg-zinc-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">
            Mermaid 다이어그램 확대보기
          </DialogPrimitive.Title>
          <div
            className="flex h-full w-full items-center justify-center [&_svg]:!h-auto [&_svg]:!max-h-[88vh] [&_svg]:!w-auto [&_svg]:!max-w-full"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <DialogPrimitive.Close
            className="absolute right-4 top-4 rounded-sm bg-zinc-100 p-1.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring dark:bg-zinc-800"
            aria-label="닫기"
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
