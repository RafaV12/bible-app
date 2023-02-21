import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Bookmark {
  bookmarked: boolean;
  bookmarkedChapter: {
    testament: string;
    book: string;
    chapter: string;
  };
}

const initialState: Bookmark = {
  bookmarked: false,
  bookmarkedChapter: {
    testament: '',
    book: '',
    chapter: '',
  },
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    toggleBookmark: (state: Bookmark, action: PayloadAction<Bookmark['bookmarkedChapter']>) => {
      // ** Changing bookmark to another chapter is bugged **
      if (state.bookmarked) {
        // Toggle off bookmark
        state.bookmarked = false;
        state.bookmarkedChapter = {
          testament: '',
          book: '',
          chapter: '',
        };
      } else {
        // Bookmark chapter
        state.bookmarked = true;
        state.bookmarkedChapter = {
          testament: action.payload.testament,
          book: action.payload.book,
          chapter: action.payload.chapter,
        };
      }
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
