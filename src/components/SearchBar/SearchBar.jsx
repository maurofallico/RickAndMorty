import styled from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className = {styled.container}>
         <input className = {styled.input} type='search' />
         <button className = {styled.boton} onClick={() => props.onSearch(props.id)}>Agregar</button>
      </div>
   );
}
