import React from "react";
import {useState} from "react";
import Card from "../Card/Card.jsx";
import { connect, useDispatch } from "react-redux";
import styled from './Favorites.module.css'
import {filterCards, orderCards} from '../../redux/actions.js'
import {NavLink} from 'react-router-dom';

function Favorites({myFavorites}) {

  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)

  const handleOrder = (event) => {
    
      dispatch(orderCards(event.target.value))
      setAux(!aux)
    }

  const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
    }
    
  
  if (myFavorites){
    return (
      <div className = {styled.container}>
      <h1 className = {styled.titulo}>FAVORITES</h1> 
      <div className = {styled.sortContainer}>
      <div className = {styled.order}>
        <select name ="order" onChange = {handleOrder} defaultValue="">
        <option disabled= "true" value="">ORDER</option>
          <option
          value="A">A - Z
          </option>
          <option
          value="B">Z - A
          </option>
        </select>
        </div>
        <div className = {styled.gender}>
        <select name ="filter" onChange = {handleFilter} defaultValue="">
        <option disabled= "true" value="">FILTER</option>
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
          value="unknow">Unknown
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
        <NavLink className = {styled.botonContainer} to = "/home"><button className = {styled.boton}>Back</button></NavLink>
      </div>
    );
  }

  
  
}

export const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	}
}
  
  export default connect(mapStateToProps, null)(Favorites);
