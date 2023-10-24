import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from './Detail.module.css'
import Nav from '../Nav/Nav'

export default function Detail (){
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const [ character, setCharacter ] = useState([]);

    const URL_BASE = 'https://rickandmorty-production-bba0.up.railway.app/rickandmorty';

     useEffect(() => {
      const timer = setTimeout(() => {
        fetch(`${URL_BASE}/character/${id}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            setCharacter(data);
            setLoading(false);
          });
      }, 100);
      return () => clearTimeout(timer);
    }, [id]); 

    

    return (
      <>
      <Nav />
      <div className = {styled.container}>
        {loading? ( <div className = {styled.loadingContainer}>
        <div>
            <h1 className = {styled.loading}>LOADING...</h1>
        </div>
      </div>) : ( <div className = {styled.formContainer}>
        <div className = {styled.texto}>
            <h1 className = {styled.titulo}>{character.name}</h1>
            <p className = {styled.dato}><strong>STATUS: </strong>{character.status}</p>
            <p className = {styled.dato}><strong>GENDER: </strong>{character.gender}</p>
            <p className = {styled.dato}><strong>SPECIE: </strong>{character.species}</p>
            <p className = {styled.dato}><strong>ORIGIN: </strong>{character.origin}</p>
        </div>
        <div className = {styled.imagen}>
          <img src={character.image} loading="lazy" alt='cardImage'/>
        </div>
      </div>)}
     
      </div>
      </>
    )
}