import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Bookmark {
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
      // Check if we are toggling the same bookmarked chapter
      if (state.bookmarked && JSON.stringify(state.bookmarkedChapter) === JSON.stringify(action.payload)) {
        // Toggle bookmark off
        state.bookmarked = false;
        state.bookmarkedChapter = {
          testament: '',
          book: '',
          chapter: '',
        };
        // Check if we are bookmarking a new chapter while another one is bookmarked already
      } else if (state.bookmarked && JSON.stringify(state.bookmarkedChapter) !== JSON.stringify(action.payload)) {
        // Change bookmark to new chapter selected
        state.bookmarkedChapter = {
          testament: action.payload.testament,
          book: action.payload.book,
          chapter: action.payload.chapter,
        };
      } else {
        // Toggle bookmark on
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
