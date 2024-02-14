import axios from "axios";
import { Character } from "../../models/Character";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface GetCharactersProps {
  data: Character[];
  links: { self: string };
  meta: { copyright: string; generated_at: string };
}

export const fetchCharacters = createAsyncThunk(
  "characters/fetchAll",
  async (name: string, thunkAPI) => {
    try {
      const { data } = await axios.get<GetCharactersProps>(
        `https://api.potterdb.com/v1/characters/?page[size]=20;filter[name_cont]=${name}`
      );
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("ERROR");
    }
  }
);


const ADD_CHARACTER_TO_FAVORITE = "ADD_CHARACTER_TO_FAVORITE";
const REMOVE_CHARACTER_FROM_FAVORITE = "REMOVE_CHARACTER_FROM_FAVORITE";

export const setCharacterToFavorite = (person: any) => ({
  type: ADD_CHARACTER_TO_FAVORITE,
  payload: person
})

export const removeCharacterFromFavorite = (cardID: any) => ({
  type: REMOVE_CHARACTER_FROM_FAVORITE,
  payload: cardID
})