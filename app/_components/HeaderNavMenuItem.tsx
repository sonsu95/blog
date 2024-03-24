'use client';

import HeroIconWrapper from '@/app/_components/HeroiconWrapper';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
}

export default function HeaderNavMenuItem({ title, icon, path }: Props) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault(); // 기본 이벤트 방지
    if (path === '/search') {
      console.log('Search link clicked');
    } else {
      // 그 외의 경우에는 해당 경로로 이동
      router.push(path);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-col items-center gap-y-2 text-neutral-600"
    >
      <HeroIconWrapper
        IconComponent={icon}
        iconProps={{ className: 'h-4 h-4' }}
      />
      <div className="text-xs">{title}</div>
    </button>
  );
}
