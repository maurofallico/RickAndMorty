import styled from './About.module.css'

export default function About () {
    return(
        <div>
    <h1 className = {styled.titulo}>ABOUT</h1>
    <p className = {styled.texto}>Hola! Mi nombre es Mauro y este es mi proyecto integrador.</p>
    <p className = {styled.texto}>Es una app que muestra a los personajes de la popular serie animada Rick & Morty.</p>
    </div>
    )
}
