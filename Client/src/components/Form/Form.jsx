import styled from "./Form.module.css";
import {useState} from "react";
import validation from "./Validation";

export default function Form(props) {

  function handleSubmit(event){
    event.preventDefault()
    if (errors.email || errors.password){
      alert("Authentication failed. Please verify your credentials.")
    }
    else{
      props.login(userData)
    }
  }

  const [userData, setUserData] = useState({email: '', password: '' });

  const [errors, setErrors] = useState({email: '', password: ''})

  function handleChange(event){
    setUserData({...userData, [event.target.name]: event.target.value})
    setErrors(
      validation({
         ...userData,
         [event.target.name]: event.target.value,
      })
   );
  }

  return (
    <div className = {styled.container}>
    <img src="./logo.png" alt="RickAndMortyLogo" className={styled.logo}/>
    <div className = {styled.formContainer}>
    <form className={styled.form}>
    
      <label htmlFor="email" className={styled.label}>
        E-mail:
        <input name="email" type="text" value={userData.email} className={styled.input} onChange = {handleChange}></input>
      </label>
      
      {errors.email ? (<span className = {styled.errors}>{errors.email}</span>) : (<p className={styled.emptyError}></p>)}
      <label htmlFor="password" className={styled.label}>
        Password:
        <input name="password" type="password" value={userData.password} className={styled.input} onChange = {handleChange}></input>
      </label>
      {errors.password? (<span className = {styled.errors}>{errors.password}</span>) : (<p className={styled.emptyError}></p>)}
      <button onClick = {handleSubmit} className={styled.boton}>Login</button>
      <div className = {styled.info}>
      <p className={styled.text}>admin@rick.com</p>
      <p className={styled.text}>Pickle123</p>
      </div>
    </form>
    </div>
    </div>
  );
}
