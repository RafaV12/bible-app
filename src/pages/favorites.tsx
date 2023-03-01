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
          <li key={index} className="p-4 w-full flex flex-col bg-white shadow rounded-lg md:w-56">
            <Link className="flex flex-col gap-y-4 capitalize" href={`/${testament}/${book}/${chapter}`}>
              <img
                className="w-full rounded-lg"
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt=""
              />
              <div>
                <p>Testament: {replaceDashesWithSpaces(testament)}</p>
                <p>Book: {replaceDashesWithSpaces(book)}</p>
                <p>Chapter: {chapter}</p>
              </div>
              <i
                onClick={() => dispatch(deleteFromFavorites({ testament, book, chapter }))}
                className="fa-solid fa-circle-xmark text-3xl text-red-500 z-10 cursor-pointer"
              ></i>
            </Link>
          </li>
        ))
      ) : (
        <p>You have not added any chapter to your favorites!</p>
      )}
    </ul>
  );
}
