import styled from './SearchBar.module.css'
import {useState} from 'react'



export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
   setId (event.target.value)
}

   return (
      <div className = {styled.container}>
         <input className = {styled.input} type='search' onChange = {handleChange}/>
         <button className = {styled.boton} onClick = {() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
