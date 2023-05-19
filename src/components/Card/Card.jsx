
import styled from './Card.module.css'

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div>
         <div className = {styled.container}>
            <button className = {styled.boton} onClick={() => onClose(id)}>X</button>
            <p className = {styled.texto}>Nombre: {name}</p>
            <p className = {styled.texto}>Especie: {species}</p>
            <p className = {styled.texto}>Género: {gender}</p>
            <img className = {styled.imagen} src={image}/>
         </div>
      </div>
   );
}
