
import styled from './Card.module.css'

export default function Card(props) {
   return (
      <div>
         <div className = {styled.container}>
            <button className = {styled.boton} onClick={() => props.onClose()}>X</button>
            <p className = {styled.texto}>Nombre: {props.name}</p>
            <p className = {styled.texto}>Especie: {props.species}</p>
            <p className = {styled.texto}>Género: {props.gender}</p>
            <img className = {styled.imagen} src={props.image}/>
         </div>
      </div>
   );
}
