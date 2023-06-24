import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        default:
            return {...state}

        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload }  

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload }

        case FILTER:
            const filterGender = state.allCharacters.filter((char => char.gender === action.payload))
            return {...state, myFavorites: filterGender }

        case ORDER:
            const orderId = state.allCharacters.sort((a, b) => {
                if (action.payload === "A"){
                    return a.id - b.id;
                }
                else{
                    return b.id - a.id;
                }
            })
            return {...state, myFavorites: orderId}
        }

    }

export default reducer