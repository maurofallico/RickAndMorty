import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from 'react-router-dom';

export default function Nav (props) {
        return (
            <div>
                <NavLink to="/about">
                <button>ABOUT</button>
                </NavLink>
                <NavLink to="/">
                <button>HOME</button>
                </NavLink>
                <SearchBar onSearch = {props.onSearch} />
            </div>
        )

}




