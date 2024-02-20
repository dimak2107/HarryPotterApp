import React, { useMemo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCharacters } from "../store/reducers/ActionCreators";
import CustomCard from "../ui-components/CustomCard";
import "./Main.css";
import debounce from "lodash.debounce";
import { addRequest } from "../store/reducers/RequestsReducer";

const Main = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector(
    (state) => state.characterReducer
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const makeDebouncedRequest = useMemo(
    () =>
      debounce((name: string) => {
        dispatch(fetchCharacters(name));
        name.length > 3 && dispatch(addRequest(name));
      }, 500),
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
            <input
              className="input-styled"
              type="text"
              placeholder="Поиск по имени персонажа..."
              value={name}
              onChange={inputHandler}
            />
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
    </main>
  );
};

export default Main;
