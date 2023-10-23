import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_CHARACTERS = "GET_GHARACTERS";

export const getCharacters = (name) =>{
  return async function (dispatch){
    const response = await axios.get(`${process.env(URL)}rickandmorty/characters?name=` + name );
return dispatch ({
    type: GET_CHARACTERS,
    payload: response.data
})
}
}

export const addFav = (character) => {
    const endpoint = `${process.env(URL)}rickandmorty/fav`;
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
};

export const removeFav = (id) => {
  try {
    const endpoint = `${process.env(URL)}rickandmorty/fav/` + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint)
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
    };
  } catch (error) {
    console.log(error);
  }
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden,
  };
}
