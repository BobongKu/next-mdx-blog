import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4 px-4'>
      <h1 className='text-6xl font-bold text-muted-foreground'>404</h1>
      <p className='text-lg text-muted-foreground'>찾을 수 없는 페이지입니다.</p>
      <Link
        href='/'
        className='mt-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-muted'
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
