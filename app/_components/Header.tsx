import HeaderNavMenu from '@/app/_components/HeaderNavMenu';

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center pb-16 pt-24">
      <div className="flex h-9 w-56 items-center justify-center bg-nero text-xl text-white">
        Sonsu's Blog
      </div>
      <HeaderNavMenu />
      <div></div>
    </header>
  );
}
