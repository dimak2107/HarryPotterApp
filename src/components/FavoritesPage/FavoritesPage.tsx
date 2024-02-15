import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../hooks/hooks"
import CustomCard from "../../ui-components/CustomCard";

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
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
    console.log(typeof(characters));

    return (
        <div>
            <section className={styles.favorite__content}>
                <header className={styles.favorites__flex_center}>
                    <h1>Favorites</h1>
                </header>
                <div className={styles.favorites__flex}>
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

export default FavoritesPage;