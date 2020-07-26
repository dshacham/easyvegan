import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';

const NavBar = () => {
    const [navClass, setNavClass] = useState("/");

    return (
        <nav>
            <ul>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass !== "/sweets" && navClass !== "/savourys" && navClass !== "/about" && navClass !== "/addrecipe" ? "selected" : ""}><NavLink to="/">EASY VEGAN</NavLink></li>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass === "/about" ? "selected" : ""}><NavLink to="about">About</NavLink></li>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass === "/sweets" ? "selected" : ""}><NavLink to="sweets">Sweet Recipes</NavLink></li>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass === "/savourys" ? "selected" : ""}><NavLink to="savourys">Savoury Recipes</NavLink></li>
                <li onClick={() => setNavClass(window.location.pathname)} className={navClass === "/addrecipe" ? "selected" : ""}><NavLink to="addrecipe">Add Recipes</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;