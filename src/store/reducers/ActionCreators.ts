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

