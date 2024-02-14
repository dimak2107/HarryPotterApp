import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers/CharactersSlice";
import authReducer from "./reducers/AuthSlice";
import favoriteReducer from "./reducers/FavoriteReducer";

const rootReducer = combineReducers({
  characterReducer,
  authReducer,
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
