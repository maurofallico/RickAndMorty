import React from "react";
import Card from "../Card/Card.jsx";
import { connect } from "react-redux";
import styled from './Favorites.module.css'

function Favorites( {myFavorites }) {
  return (
    <div>
    <h1 className = {styled.titulo}>Favorites</h1> 
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
