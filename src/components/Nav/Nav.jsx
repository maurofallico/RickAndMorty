import React from "react";
import {NavLink, useLocation} from 'react-router-dom';
import { useSelector } from "react-redux";
import styled from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav ({onSearch}) {
    const location = useLocation();
    const myFavorites = useSelector((state) => state.myFavorites)
    if (location.pathname !== '/'){
        return (
                <div className = {styled.buttonContainer}>
                    <NavLink to="/about">
                        <button className = {styled.button}>About</button>
                    </NavLink>
                    <NavLink to="/home">
                        <button className = {styled.button}>Home</button>
                    </NavLink>
                    <NavLink to="/favorites">
                        <button className = {styled.button}>Favorites</button>
                    </NavLink>
                    <SearchBar onSearch={onSearch} />
                </div>
        )
    }
}




