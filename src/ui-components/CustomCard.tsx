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
import Hogwarts from "./hqdefault.jpg";

const CustomCard = ({ character }: { character: Character }) => {
  return (
    <Card className="main__card">
      <CardMedia
        component="img"
        alt="no_photo_available"
        height="250"
        image={
          character.attributes.image ? character.attributes.image : Hogwarts
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.attributes.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.attributes.species}, {character.attributes.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.attributes.blood_status}
        </Typography>
      </CardContent>
      <CardActions className="main__card-buttons">
        <Button size="small" fullWidth>
          <Link to={`/characters/${character.id}`} className="card-button">
            Подробнее
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
