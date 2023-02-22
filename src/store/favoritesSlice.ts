import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isObjInArray, getItem } from '@/utils';
import { RootState } from './configureStore';

interface FavoriteChapter {
  testament: string;
  book: string;
  chapter: string;
}

const initialState: FavoriteChapter[] = typeof window !== 'undefined' ? (getItem('favorites') ? getItem('favorites') : []) : [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state: FavoriteChapter[], action: PayloadAction<FavoriteChapter>) => {
      if (isObjInArray(state, action.payload)) return;
      state.push(action.payload);
    },

    deleteFromFavorites: (state: FavoriteChapter[], action: PayloadAction<FavoriteChapter>) => {
      if (isObjInArray(state, action.payload)) {
        const favoriteToRemove = state.find(
          (favItem) =>
            favItem.testament === action.payload.testament &&
            favItem.book === action.payload.book &&
            favItem.chapter === action.payload.chapter
        );
        state.splice(state.indexOf(favoriteToRemove!), 1);
      }
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;

export const selectAllFavorites = (state: RootState) => state.favorites;

export default favoritesSlice.reducer;
