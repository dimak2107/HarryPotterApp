import Book from "../../models/Book"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addBookToFavorites, removeBookFromFavorites } from "../../store/reducers/FavoriteSlice";
import { FavoriteState } from "../../store/reducers/FavoriteSlice";

import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteBookButton = ({ book }: {book: Book}) => {
    const dispatch = useAppDispatch();
    const { books }: FavoriteState = useAppSelector(state => state.favoriteReducer)

    const addToFavorites = () => {
        dispatch(addBookToFavorites(book));
    }

    const removeFromFavorites = () => {
        dispatch(removeBookFromFavorites(book.id))
    }

    return (
        <>
            {books.find((item) => item.id === book.id)
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

export default FavoriteBookButton;