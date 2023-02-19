import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/reduxHooks';

import { replaceDashesWithSpaces, capitalizeFirstLetter } from '@/utils';

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favorites);

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-4">
      {favorites.length > 0 ? (
        favorites.map(({ id, testament, book, chapter }) => (
          <Link key={id} href={`/${testament}/${book}/${chapter}`}>
            <li className="p-4 max-w-max border flex flex-col shadow-md rounded-lg">
              <p>{capitalizeFirstLetter(replaceDashesWithSpaces(testament))}</p>
              <p>{replaceDashesWithSpaces(book)}</p>
              <p>Chapter: {chapter}</p>
              <i className="fa-solid text-red-500 fa-heart self-end"></i>
            </li>
          </Link>
        ))
      ) : (
        <p>You have not added any chapter to your favorites!</p>
      )}
    </ul>
  );
}
