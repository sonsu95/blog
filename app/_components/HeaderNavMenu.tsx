'use client';

import HeaderNavMenuItem from '@/app/_components/HeaderNavMenuItem';

import {
  ListBulletIcon,
  ArchiveBoxIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  TagIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

export default function HeaderNavMenu() {
  const icons = [
    {
      key: Symbol('Home'),
      icon: HomeIcon,
      title: 'Home',
      path: '/',
    },
    {
      key: Symbol('About'),
      icon: UserIcon,
      title: 'About',
      path: '/about',
    },
    {
      key: Symbol('Categories'),
      icon: ListBulletIcon,
      title: 'Categories',
      path: '/categories',
    },
    {
      key: Symbol('Archive'),
      icon: ArchiveBoxIcon,
      title: 'Archives',
      path: '/archives',
    },
    {
      key: Symbol('Tags'),
      icon: TagIcon,
      title: 'Tags',
      path: '/tags',
    },
    {
      key: Symbol('Search'),
      icon: MagnifyingGlassIcon,
      title: 'Search',
      path: '/search',
    },
  ];
  return (
    <div className="mt-6 flex gap-x-5">
      {icons.map((icon) => {
        return (
          <HeaderNavMenuItem
            icon={icon.icon}
            title={icon.title}
            path={icon.path}
            key={icon.key.toString()}
          />
        );
      })}
    </div>
  );
}
