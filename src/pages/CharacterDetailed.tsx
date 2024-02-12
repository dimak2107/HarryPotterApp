import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../models/Character";
import CustomCardDetailed from "../ui-components/CustomCardDetailed";

interface GetByIdProps {
  data: Character;
  links: { self: string };
  meta: { copyright: string; generated_at: string };
}

const CharacterDetailed = () => {
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams();
  async function getCharacterById(characterID: string) {
    try {
      const res = await axios.get<GetByIdProps>(
        `https://api.potterdb.com/v1/characters/${characterID}`
      );
      setCharacter(() => res.data.data);
    } catch (e) {
      return console.log("oh no. an error");
    }
  }

  useEffect(() => {
    id && getCharacterById(id);
  }, [id]);

  return (
    <main className="main__content">
      <article className="main__flex-center">
        {character && <CustomCardDetailed character={character} />}
      </article>
    </main>
  );
};

export default CharacterDetailed;
