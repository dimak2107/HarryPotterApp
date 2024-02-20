import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../models/Character";
import CustomCardDetailed from "../ui-components/CustomCardDetailed";
import getCharacterById from "../services/GetCharacterById";

const CharacterDetailed = () => {
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams();
  useEffect(() => {
    (async function () {
      const res = id && (await getCharacterById(id));
      res && typeof res !== "string" && setCharacter(res);
    })();
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
