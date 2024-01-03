import { connect, useDispatch, useSelector } from "react-redux";
import styled from "./Card.module.css";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useNavigate, useLocation } from "react-router-dom";

function Card({ id, name, species, gender, image }) {
  const location = useLocation()

  const navigate = useNavigate();

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

useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [myFavorites, id]);


 const handleFavorite = () => {
  if (isFav === true ) {
    setIsFav(false);
    dispatch(removeFav(id));
  } else if (isFav === false ) {
    setIsFav(true);
    dispatch(addFav({ id, name, species, gender, image }));
  }
}



  const toDetail = () => {
    navigate(`/detail/${id}`)
  }

 

   return (
    <div>
      <div className={styled.container}>
        <div className={styled.buttonContainer}>
          {
          isFav ? (<button className={styled.botonFav} onClick={handleFavorite}>❤️</button>) : (
          <button className={styled.botonFav} onClick={handleFavorite}>🤍</button>)
          }
        </div>
        { name.length > 27 ? (
        <p className={styled.textoMuyLargo}><strong>{name}</strong></p>
      ) : name.length > 15 && name.length <= 27 ? (
        <p className={styled.textoLargo}><strong>{name}</strong></p>
      ) : (
        <p className={styled.texto}><strong>{name}</strong></p>
        )}
        <div className={styled.imagenContainer}>
        <img className={styled.imagen} src={image} loading="lazy" alt="cardImage" onClick={toDetail} />
        </div>
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

