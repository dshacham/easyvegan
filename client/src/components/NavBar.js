import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from './Context';
import '../style/NavBar.scss';

const NavBar = () => {
    const { navClass, setNavClass } = useContext(Context);

    return (
        <nav className="nav">
            <ul>
                <li
                    onClick={() => setNavClass(window.location.pathname)}
                    className={navClass !== "/sweets" && navClass !== "/savourys" && navClass !== "/about" && navClass !== "/addrecipe" ? "selected" : ""}>
                    <NavLink to="/">EASY VEGAN</NavLink>
                </li>
                <li
                    onClick={() => setNavClass(window.location.pathname)}
                    className={navClass === "/about" ? "selected" : ""}>
                    <NavLink to="about">About</NavLink>
                </li>
                <li
                    onClick={() => setNavClass(window.location.pathname)}
                    className={navClass === "/sweets" ? "selected" : ""}>
                    <NavLink to="sweets">Sweet</NavLink>
                </li>
                <li
                    onClick={() => setNavClass(window.location.pathname)}
                    className={navClass === "/savourys" ? "selected" : ""}>
                    <NavLink to="savourys">Savoury</NavLink>
                </li>
                <li
                    onClick={() => setNavClass(window.location.pathname)}
                    className={navClass === "/addrecipe" ? "selected" : ""}>
                    <NavLink to="addrecipe">Add Recipes</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;