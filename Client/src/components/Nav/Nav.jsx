import React from "react";
import {NavLink, useLocation} from 'react-router-dom';
import styled from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav ({onSearch}) {
    const location = useLocation();
    if (location.pathname !== '/'){
        return (
                <div>
                    <div className = {styled.buttonContainer}>
                    <NavLink to="/home">
                        <button className = {styled.button}>Home</button>
                    </NavLink>
                    <NavLink to="/favorites">
                        <button className = {styled.button}>Favorites</button>
                    </NavLink>
                    <NavLink to="/about">
                        <button className = {styled.button}>About</button>
                    </NavLink>
                    </div>
                    <div className = {styled.searchContainer}>
                    {location.pathname === '/home' && <SearchBar className = {styled.busqueda} onSearch={onSearch} />}
                    </div>
                </div>
        )
    }
}




