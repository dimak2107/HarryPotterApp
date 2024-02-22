import { createSlice } from "@reduxjs/toolkit";
import Book from "../../models/Book";
import { Character } from "../../models/Character";

export interface FavoriteState {
    books: Book[],
    characters: Character[]
}

const initialState: FavoriteState = {
    books: [],
    characters: []
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addBookToFavorites: (state, action) => {
            state.books.push(action.payload);
        },
        removeBookFromFavorites: (state, action) => {
            state.books = state.books.filter(item => item.id !== action.payload);
        },
        addCharacterToFavorites: (state, action) => {
            state.characters.push(action.payload);
        },
        removeCharacterFromFavorites: (state, action) => {
            state.characters = state.characters.filter(item => item.id !== action.payload);
        }
    }
});

const { actions, reducer } = favoriteSlice;

export default reducer;
export const { 
    addBookToFavorites, 
    removeBookFromFavorites,
    addCharacterToFavorites,
    removeCharacterFromFavorites 
} = actions;