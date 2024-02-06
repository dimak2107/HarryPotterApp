import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../models/Character";
import CustomCardDetailed from "../ui-components/CustomCardDetailed";

const CharacterDetailed = () => {
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams();
  console.log(id);
  async function getCharacterById(characterID: string) {
    try {
      const res = await axios.get<Character[]>(
        `https://hp-api.onrender.com/api/character/${characterID}`
      );
      setCharacter(() => res.data[0]);
    } catch (e) {
      return console.log("oh no. an error");
    }
  }

  useEffect(() => {
    id && getCharacterById(id);
  }, []);

  return (
    <main className="main__content">
      <article className="main__flex-center">
        {character && <CustomCardDetailed character={character} />}
      </article>
    </main>
  );
};

export default CharacterDetailed;
