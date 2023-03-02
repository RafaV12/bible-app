import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { selectAllFavorites } from '@/store/favoritesSlice';

import { replaceDashesWithSpaces, setItem } from '@/utils';

import { FavoriteChapter } from '@/types';

export default function Favorites() {
  const [savedFavorites, setSavedFavorites] = useState<FavoriteChapter[]>([]);
  const favorites = useAppSelector(selectAllFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSavedFavorites(favorites);
  }, []);

  useEffect(() => {
    setItem('favorites', favorites);
  }, [favorites]);

  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
      {savedFavorites.length > 0 ? (
        savedFavorites.map(({ testament, book, chapter }, index) => (
          <li key={index} className="p-4 h-auto w-2/5 flex flex-wrap bg-white shadow rounded-lg md:w-56">
            <Link className="flex flex-col gap-y-4 capitalize" href={`/${testament}/${book}/${chapter}`}>
              <img className="w-full h-32 rounded-lg" src="https://picsum.photos/200/300" alt="" />
              <div>
                <p>Testament: {replaceDashesWithSpaces(testament)}</p>
                <p>Book: {replaceDashesWithSpaces(book)}</p>
                <p>Chapter: {chapter}</p>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <p>You have not added any chapter to your favorites!</p>
      )}
    </ul>
  );
}
