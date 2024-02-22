import { Character } from "../models/Character";
import FavoriteCharacterButton from "../components/FavoriteCharacterButton/FavoriteCharacterButton";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CustomCardDetailedProps {
  character: Character;
}

const CustomCardDetailed = ({ character }: CustomCardDetailedProps) => {
  return (
    character && (
      <Card sx={{ maxWidth: 300, display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          alt="no_photo"
          width="200"
          image={character.attributes.image ? character.attributes.image : ""}
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
        <CardActions>
              <FavoriteCharacterButton character={character}/>
        </CardActions>
      </Card>
    )
  );
};

export default CustomCardDetailed;
