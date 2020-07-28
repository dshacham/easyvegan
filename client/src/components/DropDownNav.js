import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import Context from './Context';
import '../style/DropDownNav.scss';

const DropDownNav = () => {
    const { navClass, setNavClass } = useContext(Context);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuClicked(true);
    }

    return (
        <nav className="dropdown">
            <HamburgerMenu
                className="hamburger"
                isOpen={isMenuOpen}
                menuClicked={handleMenuClick}
            />
            {
                isMenuClicked ?
                    <ul className={isMenuOpen === false ? "ul-drop slide-out" : "ul-drop slide-in"}>
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
                    :
                    null
            }
        </nav>
    );
}

export default DropDownNav;