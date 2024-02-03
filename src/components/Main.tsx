import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCharacters } from "../store/reducers/ActionCreators";
import CustomCard from "../ui-components/CustomCard";
import "./Main.css";

const Main = () => {
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector(
    (state) => state.characterReducer
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);
  return (
    <main>
      <section className="main__content">
        <header className="flex center">
          <h3>Characters of HP</h3>
        </header>
        <div className="main__grid">
          {isLoading && <h1>LOADING...</h1>}
          {error && <h1>{error}</h1>}
          {characters &&
            characters.map((item, index) => {
              if (index > 20) {
                return;
              }
              return <CustomCard character={item} key={item.id}></CustomCard>;
            })}
        </div>

        {/* {JSON.stringify(characters, null, 2)} */}
      </section>
    </main>
  );
};

export default Main;
