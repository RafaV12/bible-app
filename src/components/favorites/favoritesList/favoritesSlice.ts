import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteChapter {
  testament: string;
  book: string;
  chapter: string;
}

const initialState: FavoriteChapter[] = [
  {
    testament: 'new-testament',
    book: 'matthew',
    chapter: '9'
  }
];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoriteChapter>) => {
      state = [...state, action.payload];
    },
    removeFromFavorites: (state, action: PayloadAction<FavoriteChapter>) => {
      state = state.filter((favorite) => favorite !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
