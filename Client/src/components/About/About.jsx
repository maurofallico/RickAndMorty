import styled from './About.module.css'
import Nav from '../Nav/Nav'

export default function About () {
    return(
        <div>
            <Nav />
            <img src="./profile.jpg" alt="Mauro" className={styled.profile}/>
    <p className = {styled.texto}>Hello there! I'm Mauro, and I'm a FullStack Web Developer. </p>
    <p className = {styled.texto}>I created this project to practice new technologies and further my knoweledge.</p>
    <p className = {styled.texto}>Any feedback will be appreciated.</p>
    <br></br>
    <p className={styled.texto}>
        You can reach me out through{" "}
        <a className = {styled.link} href="https://www.linkedin.com/in/maurofallico/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>{" "}
        or{" "}
        <a className = {styled.link} href="https://github.com/maurofallico" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    
    </div>
    )
}
