import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

interface FavoriteChapter {
  id: string;
  testament: string;
  book: string;
  chapter: string;
}

const initialState: FavoriteChapter[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state: FavoriteChapter[], action: PayloadAction<FavoriteChapter>) => {
      // Check if obj already exist in our array *NEEDS IMPROVEMENT*
      const check = state.find(
        (c) => c.testament === action.payload.testament && c.book === action.payload.book && c.chapter === action.payload.chapter
      );
      if (check === undefined) {
        state.push(action.payload);
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
