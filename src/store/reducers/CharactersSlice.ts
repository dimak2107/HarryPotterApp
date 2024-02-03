import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../models/Character";
import { fetchCharacters } from "./ActionCreators";

interface CharacterState {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: [],
  isLoading: false,
  error: null,
};

export const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    // charactersFetching(state) {
    //   state.isLoading = true;
    // },
    // charactersFetchingSuccess(state, action: PayloadAction<Character[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.characters = action.payload;
    // },
    // charactersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.isLoading = false;
          state.error = "";
          state.characters = action.payload;
        }
      )
      .addCase(
        fetchCharacters.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload.error;
        }
      );
  },
});

export default CharacterSlice.reducer;
