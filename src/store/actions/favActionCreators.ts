const ADD_CHARACTER_TO_FAVORITE = "ADD_CHARACTER_TO_FAVORITE";
const REMOVE_CHARACTER_FROM_FAVORITE = "REMOVE_CHARACTER_FROM_FAVORITE";

export const setCharacterToFavorite = (person: object) => ({
    type: ADD_CHARACTER_TO_FAVORITE,
    payload: person
})

export const removeCharacterFromFavorite = (cardID: string) => ({
    type: REMOVE_CHARACTER_FROM_FAVORITE,
    payload: cardID
})