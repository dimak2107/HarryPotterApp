import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../hooks/hooks"
import CustomCard from "../../ui-components/CustomCard";

import "./Favorites.css";

const Favorites1 = () => {
    const [characters, setCharacters] = useState([]);
    const storeData = useAppSelector(
        (state) => state.favoriteReducer
    )


    useEffect(() => {
        const arr = Object.entries(storeData);
        const res: any = arr.map((item, i) => {
            return item[1];
        })
        setCharacters(res);
    }, []);


    return (
        <div>
            <section className="favorite__content">
                <header className="favorites__flex-center">
                    <h1>Favorites</h1>
                </header>
                <div className="favorites__flex">
                    {characters &&
                        characters.map((item: any) => (
                            <CustomCard character={item.character} key={item.character.id} />
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Favorites1;