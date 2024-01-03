import React from "react";
import {NavLink, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react'
import styled from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav ({searchCharacter}) {

    const [select, setSelect] = useState('home')
    const [windowWidth, setWindowWidth] = useState(0);
    const location = useLocation();

    const fav = windowWidth < 420 ? ("Favs") : ("Favorites")

    useEffect(() => {
        if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth);
    
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
    
          window.addEventListener('resize', handleResize);
    
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, []);

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
                    <NavLink to="/home" className={select === 'home' ? styled.selected : styled.button}>Home</NavLink>
                    <NavLink to="/favorites" className={select === 'favorites' ? styled.selected : styled.button}>{fav}</NavLink>
                    <NavLink to="/about" className={select === 'about' ? styled.selected : styled.button}>About</NavLink>
                    </div>
                    
                    
                    <div className = {styled.searchContainer}>
                    {location.pathname === '/home' && <SearchBar className = {styled.busqueda} searchCharacter={searchCharacter} />}
                    </div>
                    <div className={styled.logoutContainer}>
                    <NavLink to ="/" className={styled.logoutButton}>Logout</NavLink>
                    </div>
                </div>
        )
    }
}




