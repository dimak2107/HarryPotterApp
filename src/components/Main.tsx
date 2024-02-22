import React, { useMemo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCharacters } from "../store/reducers/ActionCreators";
import { fetchBooks } from "../store/reducers/BookSlice";
import CustomCard from "../ui-components/CustomCard";
import "./Main.css";
import debounce from "lodash.debounce";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import BookCard from "../ui-components/BookCard/BookCard";

const Main = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector(
    (state) => state.characterReducer
  );
  const { books, booksLoadingStatus } = useAppSelector(
    (state) => state.booksReducer
  )

  useEffect(() => {
    dispatch(fetchBooks());
  }, [])

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const makeDebouncedRequest = useMemo(
    () => debounce((name: string) => dispatch(fetchCharacters(name)), 500),
    []
  );

  useEffect(() => {
    makeDebouncedRequest(name);
  }, [name]);

  return (
    <main>
      <section className="main__content">
        <header className="main__flex-center main__content">
          <h2>Characters of HP</h2>
          <div>
            <input type="text" value={name} onChange={inputHandler} />
          </div>
        </header>

        <div className="main__grid">
          {isLoading && <h1>LOADING...</h1>}
          {error && <h1>{error}</h1>}

          {characters &&
            characters.map((item) => (
              <CustomCard character={item} key={item.id} />
            ))}
        </div>
      </section>
      <section className="main__content">
        <Typography
          variant="h6"
          component="h2"
          sx={{ textAlign: 'center' }}>
          Books of HP
        </Typography>
        <Grid container spacing={2}>
        {booksLoadingStatus === 'loading' && <h1>LOADING...</h1>}
        {booksLoadingStatus === 'error' && <h1>Что-то пошло не так..</h1>}

        {books &&
            books.map((item) => (
              <Grid spacing={3} key={item.id}>
                <BookCard book={item} />
              </Grid>
            ))}
        </Grid>
      </section>
    </main>
  );
};

export default Main;
