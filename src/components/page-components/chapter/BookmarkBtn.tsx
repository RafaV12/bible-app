import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { toggleBookmark } from '@/store/bookmarkSlice';

interface BookmarkBtnProps {
  testament: string;
  book: string;
  chapter: string;
}

export default function BookmarkBtn({ testament, book, chapter }: BookmarkBtnProps) {
  const dispatch = useAppDispatch();
  const bookmark = useAppSelector((state) => state.bookmark);

  return (
    <button
      onClick={() => dispatch(toggleBookmark({ testament, book, chapter }))}
      className={`fixed bottom-20 right-4 px-4 py-3 ${
        bookmark.bookmarked && bookmark.bookmarkedChapter.chapter === chapter ? 'text-red-500' : 'text-slate-300'
      } border rounded-full text-sm disabled:text-red-500`}
    >
      <i className="fa-solid fa-bookmark"></i>
    </button>
  );
}
