import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { toggleBookmark } from '@/store/bookmarkSlice';

import { setItem } from '@/utils';

interface BookmarkBtnProps {
  testament: string;
  book: string;
  chapter: string;
}

export default function BookmarkBtn({ testament, book, chapter }: BookmarkBtnProps) {
  const dispatch = useAppDispatch();
  const bookmark = useAppSelector((state) => state.bookmark);

  useEffect(() => {
    setItem('bookmarked-chapter', bookmark);
  }, [bookmark]);

  return (
    <button
      onClick={() => {
        dispatch(toggleBookmark({ testament, book, chapter }));
        setItem('bookmarked-chapter', { testament, book, chapter });
      }}
      className={`fixed bottom-20 right-4 px-4 py-3 ${
        JSON.stringify(bookmark) === JSON.stringify({ testament, book, chapter }) ? 'text-red-500' : 'text-slate-300'
      } border rounded-full text-sm z-10 disabled:text-red-500`}
    >
      <i className="fa-solid fa-bookmark"></i>
    </button>
  );
}
