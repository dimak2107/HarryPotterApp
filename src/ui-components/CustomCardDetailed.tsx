import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Character } from "../models/Character";
import Hogwarts from "./hqdefault.jpg";

interface CustomCardDetailedProps {
  character: Character;
}

const CustomCardDetailed = ({ character }: CustomCardDetailedProps) => {
  return (
    character && (
      <Card className="main__card_detailed">
        <CardMedia
          component="img"
          alt="no_photo"
          height="500"
          image={
            character.attributes.image ? character.attributes.image : Hogwarts
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {character.attributes.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.attributes.species}, {character.attributes.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Born: {character.attributes.born}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            House: {character.attributes.house}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Patronus:{" "}
            {character.attributes.patronus
              ? character.attributes.patronus
              : "-"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Magic wand:{" "}
            {character.attributes.wands && character.attributes.wands[0]}
          </Typography>
        </CardContent>
      </Card>
    )
  );
};

export default CustomCardDetailed;
