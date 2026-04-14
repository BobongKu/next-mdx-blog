'use client'; // PostListClient의 자식이므로 클라이언트 컴포넌트입니다.

import { Post } from '@/config/types';
import { getCategoryColors } from '@/config/const';
import { CalendarDays, Clock3 } from 'lucide-react';
import { TransitionLink } from '@/components/common/TransitionLink';

import '@/config/PixelCard.css';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const colors = getCategoryColors(post.categoryPublicName);
  return (
    <TransitionLink href={post.url}>
      <li
        className='card h-full'
        style={{ '--active-color': colors.active } as React.CSSProperties}
      >
        <pixel-canvas
          data-gap="5"
          data-speed="35"
          data-colors={colors.palette}
        ></pixel-canvas>
        <div className='card-content'>
          <div>
            <div className='card-category text-xs font-medium pt-2'>
              {post.categoryPublicName}
            </div>
            <h2 className='card-title mt-1 text-lg font-bold sm:text-xl md:text-lg'>
              {post.title}
            </h2>
            {post.desc && (
              <p className='mt-1 line-clamp-1 text-sm text-muted-foreground'>
                {post.desc}
              </p>
            )}
          </div>
          <div className='card-footer'>
            <div className='icon-text'>
              <CalendarDays className='w-3.5' />
              <span>{post.dateString}</span>
            </div>
            <div className='icon-text'>
              <Clock3 className='w-3.5' />
              <span>{post.readingMinutes}분</span>
            </div>
          </div>
        </div>
      </li>
    </TransitionLink>
  );
};

export default PostCard;