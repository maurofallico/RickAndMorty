import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {NavLink, useLocation} from 'react-router-dom';

export default function Nav (props) {
    const location = useLocation();
    if (location.pathname !== '/'){
        return (
            <div>
                <NavLink to="/about">
                <button>ABOUT</button>
                </NavLink>
                <NavLink to="/home">
                <button>HOME</button>
                </NavLink>
                <SearchBar onSearch = {props.onSearch} />
            </div>
        )
    }
}




