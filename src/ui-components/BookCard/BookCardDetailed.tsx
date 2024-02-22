import Book from "../../models/Book";
import FavoriteBookButton from "../../components/FavoriteBookButton/FavoriteBookButton";

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';

interface BookCardDetailedProps {
    book: Book
}

export default function BookCardDetailed({ book }: BookCardDetailedProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Book cover"
                sx={{ minHeight: 400 }}
                image={book.attributes.cover ? book.attributes.cover : ''}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {book.attributes.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Release Date: {book.attributes.release_date}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Pages: {book.attributes.pages}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Summary: {book.attributes.summary}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Dedication: {book.attributes.dedication}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Author: {book.attributes.author}
                </Typography>
            </CardContent>
            <CardActions>
                <FavoriteBookButton book={book}/>
            </CardActions>
        </Card>
    )
}