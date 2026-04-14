// src/components/post_list/CategoryButton.tsx
'use client';

import { TransitionLink } from '@/components/common/TransitionLink';
import { getCategoryColors } from '@/config/const';
import '@/config/PixelCard.css';
import { cn } from '@/lib/utils';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
  categoryPublicName?: string;
}

export const CategoryButton = ({
  isCurrent,
  displayName,
  href,
  count,
  categoryPublicName = 'All',
}: Props) => {
  const colors = getCategoryColors(categoryPublicName);

  return (
    <li>
      <TransitionLink
        href={href}
        className={cn(
          // 1. 기본 클래스
          'category-pixel-card',
          // 2. 기본 레이아웃
          'relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium',
          'h-9 px-3', // 'bg-opacity-0' 제거
          // isCurrent에 따라 스타일 분기
          isCurrent
            ? 'bg-primary text-primary-foreground current-category-glow' // 선택됨
            : 'bg-opacity-0' // 선택 안됨
        )}
        style={{ '--active-color': colors.active } as React.CSSProperties}
      >
        <pixel-canvas
          data-gap='5'
          data-speed='35'
          data-colors={colors.palette}
          data-no-focus={true}
          // isCurrent가 true이면 픽셀 캔버스 숨김
          className={cn(
            'absolute inset-0 z-10',
            isCurrent && 'opacity-0'
          )}
        ></pixel-canvas>

        {/* 텍스트 (z-30) */}
        <span className='relative z-30'>
          {displayName} ({count})
        </span>
      </TransitionLink>
    </li>
  );
};