import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';

const NavBar = () => {
    const [navClass, setNavClass] = useState("/");

    return (
        <nav>
            <ul>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass !== "/sweets" && navClass !== "/savourys" ? "selected" : ""}><NavLink to="/">EASY VEGAN</NavLink></li>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass === "/sweets" ? "selected" : ""}><NavLink to="sweets">Sweet Recipes</NavLink></li>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass === "/savourys" ? "selected" : ""}><NavLink to="savourys">Savoury Recipes</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;