import { ADD_FAV, REMOVE_FAV } from "./actions"


const initialState = {
    myFavorites: []
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        default:
            return state
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload]}  
        case REMOVE_FAV:
            const removeId = parseInt(action.payload)
            const filtered = state.myFavorites.filter((char => char.id !== removeId))
            return {...state, myFavorites: filtered }
    }
}

export default reducer