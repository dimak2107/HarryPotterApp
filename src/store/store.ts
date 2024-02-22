import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers/CharactersSlice";
import authReducer from "./reducers/AuthSlice";
import booksReducer from "./reducers/BookSlice"
import favoriteReducer from "./reducers/FavoriteSlice"

const rootReducer = combineReducers({
  characterReducer,
  authReducer,
  booksReducer,
  favoriteReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
