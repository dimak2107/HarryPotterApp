import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Character } from "../models/Character";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setCharacterToFavorite, removeCharacterFromFavorite } from "../store/reducers/ActionCreators";

interface CustomCardDetailedProps {
  character: Character;
}

const CustomCardDetailed = ({ character }: CustomCardDetailedProps) => {
  const dispatch = useAppDispatch();
  const storeData = useAppSelector(
    (state) => state.favoriteReducer
  );
  const id = character.id;
  
  const set = () => {
    dispatch(setCharacterToFavorite({
      [id]: {
        character
      }
    }));
  };

  const remove = () => {
    dispatch(removeCharacterFromFavorite(id));
  };

  return (
    character && (
      <Card sx={{ maxWidth: 300, display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          alt="no_photo"
          width="200"
          image={character.attributes.image ? character.attributes.image : ""}
        />
        {storeData[id] 
          ? <button onClick={remove}>Remove from Favorites</button> 
          : <button onClick={set}>Add to Favorites</button>}
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
        <CardActions></CardActions>
      </Card>
    )
  );
};

export default CustomCardDetailed;
