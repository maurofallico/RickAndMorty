
import styled from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div>  
         <div className = {styled.container}>
            <button className = {styled.boton} onClick={() => onClose(id)}>X</button>
            
            <p className = {styled.texto}>Name: {name}</p>
            <p className = {styled.texto}>Specie: {species}</p>
            <p className = {styled.texto}>Gender: {gender}</p>
            <img className = {styled.imagen} src={image}/>
            <Link to = {`/detail/${id}`} className = {styled.link}>
            <p>DETAILS</p>
            </Link>
         </div> 
      </div>
   );
}
