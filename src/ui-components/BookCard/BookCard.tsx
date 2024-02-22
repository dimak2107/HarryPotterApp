import Book from "../../models/Book"
import { Link } from "react-router-dom";

import FavoriteBookButton from "../../components/FavoriteBookButton/FavoriteBookButton";
import ArticleIcon from '@mui/icons-material/Article';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';


export default function BookCard({ book }: { book: Book }) {
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
                <Typography variant="body2" color="text.secondary">
                    Release date: {book.attributes.release_date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" startIcon={<ArticleIcon />}>
                    <Link to={`/books/${book.id}`}>
                        Подробнее
                    </Link>
                </Button>
                <FavoriteBookButton book={book} />
            </CardActions>
        </Card>
    );
}