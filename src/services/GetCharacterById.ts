import axios from "axios";
import { Character } from "../models/Character";

interface GetByIdProps {
  data: Character;
  links: { self: string };
  meta: { copyright: string; generated_at: string };
}

export default async function getCharacterById(
  characterID: string
): Promise<Character | string> {
  try {
    const res = await axios.get<GetByIdProps>(
      `https://api.potterdb.com/v1/characters/${characterID}`
    );
    return res.data.data;
  } catch (e) {
    return "oh no. an error";
  }
}
