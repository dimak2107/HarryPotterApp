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

const CustomCard = ({ character }: { character: Character }) => {
  return (
    <Card sx={{ maxWidth: 200, display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        alt="no_photo"
        height="250"
        image={character.attributes.image ? character.attributes.image : ""}
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
      <CardActions style={{ marginTop: "auto" }}>
        <Button size="small" fullWidth>
          <Link to={`/characters/${character.id}`}>Подробнее</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
