import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import Context from './Context';
import '../style/DropDownNav.scss';

const DropDownNav = () => {
    const { navClass, setNavClass } = useContext(Context);

    const [isMenuOpen, setIsMenuOpen] = useState(false); //hamburger
    const [isMenuClicked, setIsMenuClicked] = useState(false); //pages-list

    useEffect(() => {
        setNavClass(window.location.pathname);
    });

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuClicked(true);
    }

    return (
        <div className="dd-nav">
            <HamburgerMenu
                className="hamburger"
                isOpen={isMenuOpen}
                menuClicked={handleMenuClick}
            />
            <nav className="dropdown">
                {
                    isMenuClicked ?
                        <ul className={isMenuOpen === false ? "ul-drop slide-out" : "ul-drop slide-in"}>
                            <li
                                className={navClass === "/" ? "selected" : ""}>
                                <NavLink to="/" onClick={() => { setIsMenuClicked(false); setIsMenuOpen(false) }}>EASY VEGAN</NavLink>
                            </li>
                            <li
                                className={navClass === "/about" && navClass ? "selected" : ""}>
                                <NavLink to="about" onClick={() => { setIsMenuClicked(false); setIsMenuOpen(false) }}>About</NavLink>
                            </li>
                            <li
                                className={navClass === "/sweets" ? "selected" : ""}>
                                <NavLink to="sweets" onClick={() => { setIsMenuClicked(false); setIsMenuOpen(false) }}>Sweet</NavLink>
                            </li>
                            <li
                                className={navClass === "/savourys" ? "selected" : ""}>
                                <NavLink to="savourys" onClick={() => { setIsMenuClicked(false); setIsMenuOpen(false) }}>Savoury</NavLink>
                            </li>
                            <li
                                className={navClass === "/addrecipe" ? "selected" : ""}>
                                <NavLink to="addrecipe" onClick={() => { setIsMenuClicked(false); setIsMenuOpen(false) }}>Add Recipes</NavLink>
                            </li>
                        </ul>
                        :
                        null
                }
            </nav>
        </div>
    );
}

export default DropDownNav;