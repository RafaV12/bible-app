import React, { useEffect } from 'react';
import Link from 'next/link';

import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { selectAllFavorites, deleteFromFavorites } from '@/store/favoritesSlice';

import { replaceDashesWithSpaces, setItem } from '@/utils';

export default function Favorites() {
  const favorites = useAppSelector(selectAllFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setItem('favorites', favorites);
  }, [favorites]);

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-4">
      {favorites.length > 0 ? (
        favorites.map(({ testament, book, chapter }, index) => (
          <li key={index} className="p-4 w-full flex items-center justify-between bg-white shadow rounded-lg">
            <Link className="flex items-center gap-x-4 capitalize" href={`/${testament}/${book}/${chapter}`}>
              <p>{replaceDashesWithSpaces(testament)}</p>
              <p>{`${replaceDashesWithSpaces(book)} : ${chapter}`}</p>
            </Link>
            <i
              onClick={() => dispatch(deleteFromFavorites({ testament, book, chapter }))}
              className="fa-solid fa-circle-xmark text-xl text-red-500 z-10 cursor-pointer"
            ></i>
          </li>
        ))
      ) : (
        <p>You have not added any chapter to your favorites!</p>
      )}
    </ul>
  );
}
