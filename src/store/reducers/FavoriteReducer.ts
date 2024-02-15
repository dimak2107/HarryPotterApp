import { omit } from "lodash"; 

const initialState = {};

const favoriteReducer = (state: object = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_CHARACTER_TO_FAVORITE': 
            return {
                ...state,
                ...action.payload
            };
        case 'REMOVE_CHARACTER_FROM_FAVORITE': 
            return omit(state, [action.payload]);
        default:
            return state;
    }
}

export default favoriteReducer;