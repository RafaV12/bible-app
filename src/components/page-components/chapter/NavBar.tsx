import Link from 'next/link';

import { isObjInArray } from '@/utils';

import { useFontSizeContext } from '@/context/FontSizeContext';

import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { addToFavorites, selectAllFavorites } from '@/store/favoritesSlice';

import { Book } from '@/types';
import { NextRouter } from 'next/router';

interface NavBarProps {
  testament: string;
  book: string;
  chapter: string;
  bookToParse: Book;
  router: NextRouter;
}

export default function NavBar({ testament, book, chapter, bookToParse, router }: NavBarProps) {
  const { changeFontSize } = useFontSizeContext();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectAllFavorites);

  const isFirstChapter = chapter === '1';
  const isLastChapter = Number(chapter) === bookToParse.numOfChapters;
  const prevChapter = () => !isFirstChapter && router.push(`/${testament}/${book}/${Number(chapter) - 1}`);
  const nextChapter = () => !isLastChapter && router.push(`/${testament}/${book}/${Number(chapter) + 1}`);

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 px-4 w-full h-14 flex items-center justify-between bg-white shadow-2xl border-t border-slate-50">
      <div className="flex items-center gap-x-4">
        {/* Previous chapter */}
        <button
          onClick={prevChapter}
          disabled={isFirstChapter}
          className="py-1 px-2 border text-slate-400 bg-white rounded-lg disabled:bg-slate-50"
        >
          &lt;
        </button>

        {/* Home */}
        <Link href={`/${testament}`}>
          <i className="fa-solid fa-book-bible text-2xl text-blue-400 "></i>
        </Link>

        <button disabled={isObjInArray(favorites, { testament, book, chapter })} className="disabled:text-red-500 text-slate-300">
          <i onClick={() => dispatch(addToFavorites({ testament, book, chapter }))} className="fa-solid fa-heart"></i>
        </button>
      </div>

      <Link
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white "
        href={`/${testament}/${book}`}
      >{`${bookToParse.book} : ${chapter}`}</Link>

      <div className="flex items-center gap-x-4">
        {/* Tool box */}
        <div>
          <button onClick={changeFontSize} className="px-2 py-1 border bg-white rounded-lg">
            Aa
          </button>
        </div>

        {/* Next chapter */}
        <button
          onClick={nextChapter}
          disabled={isLastChapter}
          className="px-2 py-1 border text-slate-400 bg-white rounded-lg disabled:bg-slate-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
