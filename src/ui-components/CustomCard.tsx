import React from "react";
import { Character } from "../models/Character";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface CustomCardProps {
  character: Character;
  key: string;
}

const CustomCard = ({ character }: CustomCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        alt="no_photo"
        height="250"
        image={character.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.species}, {character.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.wizard
            ? "обладает магическими способностями"
            : "не обладает магическими способностями"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" fullWidth>
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
