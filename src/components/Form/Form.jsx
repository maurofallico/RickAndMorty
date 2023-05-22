import styled from './Form.module.css'

export default function Form (){
    return(
        <form className = {styled.form}>
            <label className = {styled.label}>Email:
                <input className = {styled.input}>
                </input>
            </label>
            <label className = {styled.label}>Password:
                <input className = {styled.input}>
                </input>
            </label>
            <button className = {styled.boton}>Submit</button>
        </form>
    )
}