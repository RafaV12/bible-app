import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { clearAll, selectAllFavorites } from '@/store/favoritesSlice';

import { replaceDashesWithSpaces, setItem } from '@/utils';

import { FavoriteChapter } from '@/types';

export default function Favorites() {
  const [savedFavorites, setSavedFavorites] = useState<FavoriteChapter[]>([]);
  const favorites = useAppSelector(selectAllFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setItem('favorites', favorites);
    setSavedFavorites(favorites);
  }, [favorites]);

  return (
    <>
      <div className="w-full self-start flex items-center justify-between">
        <h1 className="mb-4 text-xl self-start font-semibold">Your favorite bible chapters</h1>
        <button onClick={() => dispatch(clearAll())} className="-mt-1 px-2 py-1 bg-white shadow rounded-lg border">
          Clear all
        </button>
      </div>
      <ul className="container self-start flex flex-col gap-x-4 gap-y-4 lg:flex-row lg:flex-wrap">
        {savedFavorites.length > 0 ? (
          savedFavorites.map(({ testament, book, chapter }, index) => (
            <li key={index} className="p-4 h-auto w-full flex flex-wrap bg-white shadow rounded-lg lg:w-80">
              <Link className="w-full flex justify-between items-center capitalize" href={`/${testament}/${book}/${chapter}`}>
                <i className="fa-solid fa-heart text-red-500 text-xl"></i>
                <div className="flex items-center">
                  <p className="text-lg">{`${replaceDashesWithSpaces(book)}: ${chapter}`}</p>
                </div>
                <i className="fa-solid fa-angle-right text-xl"></i>
              </Link>
            </li>
          ))
        ) : (
          <p>You have not added any chapter to your favorites!</p>
        )}
      </ul>
    </>
  );
}
