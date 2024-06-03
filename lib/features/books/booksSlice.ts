import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface BooksState {
  list: Book[]
}

const initialState: BooksState = {
  list: []
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.list.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;

export const selectBooksList = (state: RootState) => state.books.list;

export default booksSlice.reducer;