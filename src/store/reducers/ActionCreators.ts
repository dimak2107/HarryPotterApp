import axios from "axios";
import { AppDispatch } from "../store";
import { Character } from "../../models/Character";
import { CharacterSlice } from "./CharactersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCharacters = async (dispatch: AppDispatch) => {
//   try {
//     dispatch(CharacterSlice.actions.charactersFetching());
//     const res = await axios.get<Character[]>(
//       "https://hp-api.onrender.com/api/characters"
//     );
//     dispatch(CharacterSlice.actions.charactersFetchingSuccess(res.data));
//   } catch (e: any) {
//     dispatch(CharacterSlice.actions.charactersFetchingError(e.message));
//   }
// };

export const fetchCharacters = createAsyncThunk(
  "characters/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<Character[]>(
        "https://hp-api.onrender.com/api/characters"
      );

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("ERROR");
    }
  }
);
