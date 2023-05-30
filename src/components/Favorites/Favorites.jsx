import React from "react";
import Card from "../Card/Card.jsx";
import { connect } from "react-redux";
import styled from "../Cards/Cards.module.css";

function Favorites({ myFavorites, onClose }) {
  return (
    <div className={styled.container}>
      <h1>Favorites</h1>
      {myFavorites.map(
        (character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              status={character.status}
              origin={character.origin}
              onClose={onClose}
            />
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
