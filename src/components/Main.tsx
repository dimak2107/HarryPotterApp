import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCharacters } from "../store/reducers/ActionCreators";
import CustomCard from "../ui-components/CustomCard";
import "./Main.css";

const Main = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector(
    (state) => state.characterReducer
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  useEffect(() => {
    dispatch(fetchCharacters());
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
            characters
              .filter((item) => item.name.toLowerCase().includes(name))
              .map((item, index) => {
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
