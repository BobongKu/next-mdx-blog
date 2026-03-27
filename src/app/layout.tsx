import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import { ThemeProvider } from '@/components/layouts/theme/Provider';
import Particles from '@/components/ui/particles';
import { Toaster } from '@/components/ui/toaster';

import { baseDomain, blogDesc, blogName } from '@/config/const';
import '@/config/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogName,
    description: blogDesc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full scroll-my-20 scroll-smooth' suppressHydrationWarning>
      <body className='font-pretendard flex min-h-screen flex-col'>
        <ThemeProvider>
          <Header />
          <Particles className="overflow-hidden absolute inset-0 -z-10" quantity={300}/>
          <main className='mt-[64px] flex flex-1 flex-col'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
