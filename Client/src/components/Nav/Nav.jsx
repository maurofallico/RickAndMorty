import React from "react";
import {NavLink, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react'
import styled from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav ({searchCharacter}) {

    const [select, setSelect] = useState('home')
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname){
            case "/home": setSelect('home')
            break;
            case "/favorites": setSelect('favorites')
            break;
            case "/about": setSelect('about')
            break;
            default: setSelect('')
        }
    }, [location.pathname])

    
    if (location.pathname !== '/'){
        return (
                <div className= {styled.container}>
                    <div className = {styled.buttonContainer}>
                    <NavLink to="/home" className={select === 'home' ? styled.selected : styled.button}>Home </NavLink>
                    <NavLink to="/favorites" className={select === 'favorites' ? styled.selected : styled.button}>Favorites </NavLink>
                    <NavLink to="/about" className={select === 'about' ? styled.selected : styled.button}>About </NavLink>
                    </div>
                    <div className={styled.logoutContainer}>
                    <NavLink to ="/" className={styled.button}>Logout</NavLink>
                    </div>
                    
                    <div className = {styled.searchContainer}>
                    {location.pathname === '/home' && <SearchBar className = {styled.busqueda} searchCharacter={searchCharacter} />}
                    </div>
                </div>
        )
    }
}




