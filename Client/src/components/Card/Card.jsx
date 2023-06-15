import { connect, useDispatch, useSelector } from "react-redux";
import styled from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

function Card({ id, name, species, gender, image, onClose }) {

  const dispatch = useDispatch()

  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);


  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({id, name, species, gender, image}));
    }
  }

 

   return (
    <div>
      <div className={styled.container}>
        <div className={styled.buttonContainer}>
          {
          isFav ? (<button className={styled.botonFav} onClick={handleFavorite}>❤️</button>) : (
          <button className={styled.botonFav} onClick={handleFavorite}>🤍</button>)
          }
          {!isFav && (
          <button className={styled.boton} onClick={() => onClose(id)}>
            X
          </button>
        )}
        </div>
        { name.length > 36 ? (
        <p className={styled.textoMuyLargo}><strong>{name}</strong></p>
      ) : name.length > 27 && name.length <= 36 ? (
        <p className={styled.textoLargo}><strong>{name}</strong></p>
      ) : (
        <p className={styled.texto}><strong>{name}</strong></p>
        )}
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


export default connect(mapStateToProps)(Card)

