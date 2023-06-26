import React from "react";
import {useState} from "react";
import Card from "../Card/Card.jsx";
import { connect, useDispatch } from "react-redux";
import styled from './Favorites.module.css'
import {filterCards, orderCards} from '../../redux/actions.js'

function Favorites( {myFavorites }) {

  const dispatch = useDispatch()

  const [aux, setAux] = useState(false)

  const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))
      setAux(!aux)
    }

  const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
    }
    

  return (
    <div className = {styled.container}>
    <h1 className = {styled.titulo}>FAVORITES</h1> 
    <div className = {styled.sortContainer}>
    <div className = {styled.order}>
      <select name ="order" onChange = {handleOrder}>
        <option
        value="A">Ascendente
        </option>
        <option
        value="B">Descendente
        </option>
      </select>
      </div>
      <div className = {styled.gender}>
      <select name ="filter" onChange = {handleFilter}>
        <option
        value="Male">Male
        </option>
        <option
        value="Female">Female
        </option>
        <option
        value="Genderless">Genderless
        </option>
        <option
        value="unknow">Unknow
        </option>
      </select>
      </div>
      </div>
      {myFavorites.map(
        (character) => {
          return (
            <div className = {styled.card}>
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
            />
            </div>
          );
        }
      )}
    </div>
  );
  
}

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
  };
  
  export default connect(mapStateToProps)(Favorites);
