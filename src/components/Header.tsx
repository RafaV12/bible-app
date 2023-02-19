import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 px-4 w-full h-14 flex items-center justify-between bg-white shadow-sm">
      <Link className='flex items-center gap-x-2' href={'/'}>
        <i className="fa-solid fa-house text-blue-400"></i>
        <p>Home</p>
      </Link>
      <Link className='flex items-center gap-x-2' href={'/favorites'}>
        <i className="fa-solid fa-heart text-blue-400"></i>
        <p>Favorites</p>
      </Link>
    </header>
  );
}
