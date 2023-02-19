import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from '@/store/favoritesSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
