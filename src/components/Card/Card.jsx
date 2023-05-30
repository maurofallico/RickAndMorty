import { connect, useDispatch, useSelector } from "react-redux";
import styled from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

export function Card({ id, name, species, gender, image, onClose }) {
  const [isFav, setIsFav] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  function handleFavorite() {
    if (isFav === true) {
      dispatch(removeFav(id));
      setIsFav(false);
    } else {
      dispatch(addFav(id));
      setIsFav(true);
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

   return (
    <div>
      <div className={styled.container}>
        <div className={styled.buttonContainer}>
          {
          isFav ? (<button className={styled.botonFav} onClick={handleFavorite}>❤️</button>) : (
          <button className={styled.botonFav} onClick={handleFavorite}>🤍</button>)
          }
          <button className={styled.boton} onClick={() => onClose(id)}>
            X
          </button>
        </div>
        <p className={styled.texto}>Name: {name}</p>
        <p className={styled.texto}>Specie: {species}</p>
        <p className={styled.texto}>Gender: {gender}</p>
        <img className={styled.imagen} src={image} alt="cardImage" />
        <Link to={`/detail/${id}`} className={styled.link}>
          <p>DETAILS</p>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addFav: (character) => {
			dispatch(addFav(character))
	}, removeFav: (id) => {
		dispatch(removeFav(id))
	}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

