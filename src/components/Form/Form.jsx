import styled from "./Form.module.css";
import {useState} from "react";
import validation from "./Validation";



export default function Form(props) {

  function handleSubmit(event){
    event.preventDefault()
    props.login(userData)
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
    <form className={styled.form}>
      <label htmlFor="email" className={styled.label}>
        Email:
        <input name="email" type="text" value={userData.email} className={styled.input} onChange = {handleChange}></input>
      </label>
      <span className = {styled.errors}>{errors.email}</span>
      <label htmlFor="password" className={styled.label}>
        Password:
        <input name="password" type="text" value={userData.password} className={styled.input} onChange = {handleChange}></input>
      </label>
      <span className = {styled.errors}>{errors.password}</span>
      <button onClick = {handleSubmit} className={styled.boton}>Submit</button>
    </form>
  );
}
