import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/reduxHooks';

export default function FavoritesList() {
  const favorites = useAppSelector((state) => state.favorites);
  return (
    <ul>
      {favorites.map(({ testament, book, chapter }, index) => (
        <Link href={`/${testament}/${book}/${chapter}`}>
          <li key={index}>
            <p>{testament}</p>
            <p>{book}</p>
            <p>{chapter}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
