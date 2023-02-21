import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from '@/store/favoritesSlice';
import bookmarkReducer from '@/store/bookmarkSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
      bookmark: bookmarkReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
