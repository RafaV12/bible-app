import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getItem } from '@/utils';

import { Bookmark } from '@/types';

export interface Bookmark {
  testament: string;
  book: string;
  chapter: string;
}

const initialState: Bookmark = getItem('bookmarked-chapter')
  ? getItem('bookmarked-chapter')
  : {
      testament: '',
      book: '',
      chapter: '',
    };

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    toggleBookmark: (state: Bookmark, action: PayloadAction<Bookmark>) => {
      if (state.chapter === '') {
        // Add new bookmark
        return (state = { ...action.payload });
      } else if (JSON.stringify(state) === JSON.stringify(action.payload)) {
        // Remove bookmark
        return (state = {
          testament: '',
          book: '',
          chapter: '',
        });
      } else if (state.chapter !== '' && JSON.stringify(state) !== JSON.stringify(action.payload)) {
        // Update bookmark
        return (state = { ...action.payload });
      }
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
