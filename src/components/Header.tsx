import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed right-4 top-2">
      <Link href={'/'}>
        <i className="fa-solid fa-house text-blue-400 text-lg opacity-20"></i>
      </Link>
    </header>
  );
}
