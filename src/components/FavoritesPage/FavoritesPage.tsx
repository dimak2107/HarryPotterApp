import BookCard from "../../ui-components/BookCard/BookCard";
import { useAppSelector } from "../../hooks/hooks"
import CustomCard from "../../ui-components/CustomCard";

import styles from "./FavoritesPage.module.css";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const FavoritesPage = () => {
    const { books, characters } = useAppSelector(state => state.favoriteReducer);

    return (
        <div>
            <section className={styles.favorite__content}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: 'center' }}>
                    Characters of HP
                </Typography>
                <Grid container spacing={2}>
                    {characters.length > 0 ?
                        characters.map((item) => (
                            <Grid spacing={3} key={item.id}>
                                <CustomCard character={item} />
                            </Grid>
                        )) : 'Тут пока пусто..'}
                </Grid>
            </section>
            <section className={styles.favorite__content}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: 'center' }}>
                    Books of HP
                </Typography>
                <Grid container spacing={2}>
                    {books.length > 0 ?
                        books.map((item) => (
                            <Grid spacing={3} key={item.id}>
                                <BookCard book={item} />
                            </Grid>
                        )) : 'Тут пока пусто..'}
                </Grid>
            </section>
        </div>
    );
};

export default FavoritesPage;