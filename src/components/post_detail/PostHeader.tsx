
import { Post } from '@/config/types';
import { CalendarDays, Clock3 } from 'lucide-react';
import { TransitionLink } from '@/components/common/TransitionLink';

interface Props {
  post: Post;
}

export const PostHeader = ({ post }: Props) => {
  return (
    <header className='mt-14 text-center'>
      <h1 className='mb-3 text-3xl'>{post.title}</h1>
      <div className='mb-3'>
        <TransitionLink href={`/post/${post.categoryPath}`}>
          <span className='inline-block rounded-full border border-border px-3 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary'>
            {post.categoryPublicName}
          </span>
        </TransitionLink>
      </div>
      <div className='flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
        <div className='flex items-center gap-1'>
          <CalendarDays className='w-3.5' />
          <span>{post.dateString}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Clock3 className='w-3.5' />
          <span>{post.readingMinutes}분</span>
        </div>
      </div>
      <hr className='mt-5' />
    </header>
  );
};
