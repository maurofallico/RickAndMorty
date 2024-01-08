import Cards from "../Cards/Cards.jsx"
import Nav from "..//Nav/Nav.jsx";
import LoadingComponent from "../LoadingComponent/LoadingComponent.jsx";
import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions.js"
import styled from './Paginated.module.css'

function Paginated() {
  /* const allCharacters = useSelector((state) => state.allCharacters); */
  const allCharacters = []

  const [characters, setCharacters] = useState([...allCharacters]);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const [items, setItems] = useState([...characters]);
  const [totalPages, setTotalPages] = useState(1);

  const nextHandler = () => {
    const total = characters.length;
    const firstIndex = currentPage * 16; //se guarda el primer índice de la página actual
    if (firstIndex === total) return; // si se llega al final de los países mostrados, retorna.
    setItems([...characters].splice(firstIndex, 16));
    // setea el valor de {items} con una copia de {filteredCountries} que corta desde el primer índice hasta 10 elementos
    // {items} serán los países que se verán en pantalla y se irá modificando en base a cual sea el valor de {firstIndex}
    setCurrentPage(currentPage + 1);
    // por último, se incrementa el valor de la página actual
  };

  const prevHandler = () => {
    const firstIndex = currentPage - 2 * 16; // se actualiza el valor de firstIndex para que coincida con el primer país de la página anterior
    if (currentPage === 1) return;
    setItems([...characters].splice(firstIndex, 16)); // se aplica la misma lógica que en la función anterior
    setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function searchCharacter(name) {
    dispatch(getCharacters(name));
  }

  let prevButton = false;
  let nextButton = false;

  if (currentPage >= characters.length / 16) {
    nextButton = false;
  } else {
    nextButton = true;
  }

  if (currentPage === 1) {
    prevButton = false;
  } else {
    prevButton = true;
  }

  useEffect(() => {
    setCharacters(allCharacters);
    setTotalPages(Math.ceil(characters.length / 16));
    setItems([...characters].splice((currentPage - 1) * 16, 16));
  }, [allCharacters, characters, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  return (
    <div className={styled.container}>
      <Nav searchCharacter={searchCharacter} />
      {window.innerWidth <= 420 && items.length > 0 ? (<div className={styled.botones}>
        {prevButton === true ? (
          <button className={styled.button} onClick={prevHandler}>
            &lt;
          </button>
        ) : (
          <button className={styled.buttonOff} disabled>
            &lt;
          </button>
        )}
        {nextButton === true ? (
          <button className={styled.button} onClick={nextHandler}>
            &gt;
          </button>
        ) : (
          <button className={styled.buttonOff} disabled>
            &gt;
          </button>
        )}
      </div>): (null)}
      {allCharacters.length !== 0? (<div><Cards characters = {items} /></div>) : (<div><LoadingComponent /></div>)}
      {items.length > 0 ? (<div className={styled.botones}>
        {prevButton === true ? (
          <button className={styled.button} onClick={prevHandler}>
            &lt;
          </button>
        ) : (
          <button className={styled.buttonOff} disabled>
            &lt;
          </button>
        )}
        {nextButton === true ? (
          <button className={styled.button} onClick={nextHandler}>
            &gt;
          </button>
        ) : (
          <button className={styled.buttonOff} disabled>
            &gt;
          </button>
        )}
        {window.innerWidth > 420 ? (
          <div className={styled.pageButtons}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={
                    currentPage === page
                      ? styled.pageButtonSelected
                      : styled.pageButton
                  }
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            )}
      </div>): (null)}
      </div>): (null)}
    </div>
  );
}

export default Paginated;
