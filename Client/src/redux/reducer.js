import { GET_CHARACTERS, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"


const initialState = {
    myFavorites: [],
    allCharacters: [],
    allFavs: [],
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        default:
            return {...state}

        case GET_CHARACTERS:
            return {
                ...state,
                allCharacters: action.payload,
              };

        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allFavs: action.payload }  

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload }

        case FILTER:
            return {...state, myFavorites: state.allFavs.filter(
                (character) => character.gender === action.payload)}

        case ORDER:
            const sortedFavorites = [...state.myFavorites]; 
            if (action.payload === "A") {
                sortedFavorites.sort((a, b) => a.name.localeCompare(b.name));
            } else{
                sortedFavorites.sort((a, b) => b.name.localeCompare(a.name));
            }                  
            return { ...state, myFavorites: sortedFavorites };

    }
}

export default reducer