import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        default:
            return state

        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload], 
                              allCharacters: [...state.allCharacters, action.payload]}  

        case REMOVE_FAV:
            const removeId = parseInt(action.payload)
            const filterRemove = state.myFavorites.filter((char => char.id !== removeId))
            return {...state, myFavorites: filterRemove }

        case FILTER:
            const filterGender = state.myFavorites.filter((char => char.gender === action.payload))
            return {...state, myFavorites: [filterGender],
                              allCharacters: [...state.allCharacters, action.payload]}

    }
}

export default reducer