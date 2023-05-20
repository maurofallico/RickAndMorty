import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from 'react-router-dom';
import styled from './Nav.module.css'

export default function Nav ({onSearch}) {
        return (
            <div className = {styled.container}>
                <NavLink to="/"><button className = {styled.boton}>Home</button></NavLink>
                <NavLink to="/about"><button className = {styled.boton}>About</button></NavLink>
                <SearchBar className = {styled.search} onSearch = {onSearch} />
            </div>
        )

}




