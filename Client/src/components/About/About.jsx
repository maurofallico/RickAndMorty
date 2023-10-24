import styled from './About.module.css'
import Nav from '../Nav/Nav'

export default function About () {
    return(
        <div className={styled.fullContainer}>
            <Nav />
            <img src="./profile.jpg" alt="Mauro" landing= "lazy" className={styled.profile}/>
            <div className = {styled.container}>
    <p className = {styled.texto}><br></br>Hello there! I'm Mauro, and I'm a FullStack Web Developer. <br></br><br></br>
    I created this project to practice new technologies, improve my skills, and further my knowledge. <br></br><br></br>
    Any feedback will be appreciated. <br></br><br></br>
        You can reach me out through{" "}
        <a className = {styled.link} href="https://www.linkedin.com/in/maurofallico/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>{" "}
        or{" "}
        <a className = {styled.link} href="https://github.com/maurofallico" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br></br><br></br>
        </p>
      </div>
    </div>
    )
}
