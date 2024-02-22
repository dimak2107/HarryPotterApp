import { Character } from "../../models/Character";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addCharacterToFavorites, removeCharacterFromFavorites } from "../../store/reducers/FavoriteSlice";
import { FavoriteState } from "../../store/reducers/FavoriteSlice";

import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteCharacterButton = ({ character }: {character: Character}) => {
    const dispatch = useAppDispatch();
    const { characters }: FavoriteState = useAppSelector(state => state.favoriteReducer)

    const addToFavorites = () => {
        dispatch(addCharacterToFavorites(character));
    }

    const removeFromFavorites = () => {
        dispatch(removeCharacterFromFavorites(character.id))
    }

    return (
        <>
            {characters.find((item) => item.id === character.id)
                ? <Button size="small" onClick={removeFromFavorites} >
                    <FavoriteIcon />
                </Button>
                : <Button size="small" onClick={addToFavorites} >
                    <FavoriteBorderIcon />
                </Button>
            }
        </>
    )
}

export default FavoriteCharacterButton;