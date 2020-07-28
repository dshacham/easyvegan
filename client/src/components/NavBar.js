import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from './Context';
import '../style/NavBar.scss';

const NavBar = () => {
    const { navClass, setNavClass } = useContext(Context);

    return (
        <nav className="nav">
            <ul>
                <li
                    className={navClass === "/home" ? "selected" : ""}>
                    <NavLink to="/" onClick={() => setNavClass("/home")}>EASY VEGAN</NavLink>
                </li>
                <li
                    className={navClass === "/about" ? "selected" : ""}>
                    <NavLink to="about" onClick={() => setNavClass("/about")}>About</NavLink>
                </li>
                <li
                    className={navClass === "/sweets" ? "selected" : ""}>
                    <NavLink to="sweets" onClick={() => setNavClass("/sweets")}>Sweet</NavLink>
                </li>
                <li
                    className={navClass === "/savourys" ? "selected" : ""}>
                    <NavLink to="savourys" onClick={() => setNavClass("/savourys")}>Savoury</NavLink>
                </li>
                <li
                    className={navClass === "/addrecipe" ? "selected" : ""}>
                    <NavLink to="addrecipe" onClick={() => setNavClass("/addrecipe")}>Add Recipes</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;