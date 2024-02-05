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
import { Link } from "react-router-dom";

interface CustomCardProps {
  character: Character;
  key: string;
}

const CustomCard = ({ character }: CustomCardProps) => {
  return (
    <Card sx={{ maxWidth: 200, display: "flex", flexDirection: "column" }}>
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
      <CardActions style={{ marginTop: "auto" }}>
        <Button size="small" fullWidth>
          <Link to={`/characters/${character.id}`}>Подробнее</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
