import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './features/books/booksSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      books: booksSlice
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
