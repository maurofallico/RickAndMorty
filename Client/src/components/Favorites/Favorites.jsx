import React from "react";
import {useState} from "react";
import Card from "../Card/Card.jsx";
import { connect, useDispatch } from "react-redux";
import styled from './Favorites.module.css'
import {filterCards, orderCards} from '../../redux/actions.js'
import Nav from '../Nav/Nav'

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

  const clearFilter = () =>{
    const filterSelect = document.querySelector('select[name="filter"]');
    dispatch(filterCards(["Male", "Female", "Genderless", "Unknown"]))
    filterSelect.value = '';

  }

  
  if (myFavorites){
    return (
      <>
      <Nav />
      <div className = {styled.container}>
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
        <button className = {styled.clearFilter}onClick={clearFilter}>CLEAR FILTER</button>
        </div>
        {myFavorites.length > 0 ? (
  myFavorites.map((character) => (
    <div className={styled.card} key={character.id}>
      <Card
        id={character.id}
        name={character.name}
        species={character.species}
        gender={character.gender}
        image={character.image}
      />
    </div>
  ))
) : <div>
  <p className = {styled.noFavorites}>No favorites to show.</p>
  </div>}
      </div>
      </>
    );
  }

  
  
}

export const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	}
}
  
  export default connect(mapStateToProps, null)(Favorites);
