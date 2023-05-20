import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from './Detail.module.css'
import {NavLink} from 'react-router-dom';

export default function Detail (){
    const { id } = useParams();
    const [ character, setCharacter ] = useState([]);

    const URL_BASE = 'https://rickandmortyapi.com/api'

    useEffect(() => {
        fetch(`${URL_BASE}/character/${id}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
          .then(data => {
            setCharacter(data);
          })
      }, [id]);

    return (
      <div className = {styled.container}>
        <div className = {styled.texto}>
            <h1 className = {styled.titulo}>{character.name}</h1>
            <p className = {styled.dato}><strong>STATUS: </strong>{character.status}</p>
            <p className = {styled.dato}><strong>GENDER: </strong>{character.gender}</p>
            <p className = {styled.dato}><strong>SPECIE: </strong>{character.species}</p>
            <p className = {styled.dato}><strong>ORIGIN: </strong>{character.origin?.name}</p>
            <NavLink to = "/"><button className = {styled.boton}>Back</button></NavLink>
        </div>
        <div className = {styled.imagen}>
          <img src={character.image}/>
        </div>
      </div>
    )
}