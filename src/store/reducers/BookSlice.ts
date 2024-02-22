import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "../../models/Book";

export interface getBooksProps {
    data: Book[];
    links: { self: string };
    meta: { copyright: string; generated_at: string };
}

interface BookState {
    books: Book[],
    booksLoadingStatus: string
}

const initialState: BookState = {
    books: [],
    booksLoadingStatus: "idle"
};

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async (_, thunkAPI ) => {
        try {
            const url = 'https://api.potterdb.com/v1/books';
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch(e) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)

const BooksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.booksLoadingStatus = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<getBooksProps>) => {
                state.booksLoadingStatus = 'idle';
                state.books = action.payload.data;
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.booksLoadingStatus = 'error';
            })
            .addDefaultCase(() => { });
    }
})

export default BooksSlice.reducer;