import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { Character } from "../models/Character";

interface CustomCardDetailedProps {
  character: Character;
}

const CustomCardDetailed = ({ character }: CustomCardDetailedProps) => {
  console.log(character.name);
  console.log(character);
  //   return <div>{JSON.stringify(character)}</div>;
  return (
    character && (
      <Card sx={{ maxWidth: 300, display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          alt="no_photo"
          width="200"
          image={character.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.species}, {character.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year of birth: {character.yearOfBirth}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            House: {character.house}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Patronus: {character.patronus ? character.patronus : "-"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.wand &&
              character.wand.wood &&
              `Magic wand: Made of ${character.wand.wood} and has a ${character.wand.core} core. ${character.wand.length} inches long.`}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" fullWidth>
            <Link to={`/characters/${character.id}`}>Подробнее</Link>
          </Button> */}
        </CardActions>
      </Card>
    )
  );
};

export default CustomCardDetailed;
