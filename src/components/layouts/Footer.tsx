import Link from 'next/link';
import { Github } from 'lucide-react';

import { RESUME_DATA } from '@/data/resume-data';

export const Footer = () => {
  return (
    <footer className='mb-4 mt-20 flex flex-col items-center justify-center gap-3 text-center print:hidden'>
      <Link
        href={RESUME_DATA.contact.social[0].url}
        target='_blank'
        className='text-muted-foreground transition-colors hover:text-primary'
      >
        <Github className='size-4' />
      </Link>
      <div className='text-sm text-muted-foreground'>
        &copy; {new Date().getFullYear()}. <span className='font-semibold'>Bobong</span> all rights
        reserved.
      </div>
    </footer>
  );
};
