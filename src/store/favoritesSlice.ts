import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isObjInArray, getItem } from '@/utils';
import { RootState } from './configureStore';

import { FavoriteChapter } from '@/types';

const initialState: FavoriteChapter[] = getItem('favorites') ? getItem('favorites') : [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state: FavoriteChapter[], action: PayloadAction<FavoriteChapter>) => {
      if (isObjInArray(state, action.payload)) {
        const favoriteToRemove = state.find(
          (favItem) =>
            favItem.testament === action.payload.testament &&
            favItem.book === action.payload.book &&
            favItem.chapter === action.payload.chapter
        );
        state = state.splice(state.indexOf(favoriteToRemove!), 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const selectAllFavorites = (state: RootState) => state.favorites;

export default favoritesSlice.reducer;
