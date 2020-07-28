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
        if (navClass !== "/about" &&
            navClass !== "/sweets" &&
            navClass !== "/savourys" &&
            navClass !== "/addrecipe") {
            setNavClass("/home")
        };
    });

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuClicked(true);
    }

    const handlePageClick = () => {
        setIsMenuClicked(false);
        setIsMenuOpen(false);
    }

    return (
        <div className="dd-nav">
            <div className="top-nav">
                <HamburgerMenu
                    className="hamburger"
                    isOpen={isMenuOpen}
                    menuClicked={handleMenuClick}
                />
                <p>EASY VEGAN</p>
            </div>
            <nav className="dropdown">
                {
                    isMenuClicked ?
                        <ul className={isMenuOpen === false ? "ul-drop slide-out" : "ul-drop slide-in"}>
                            <li onClick={handlePageClick}
                                className={navClass === "/home" ? "selected" : ""}>
                                <NavLink to="/">EASY VEGAN</NavLink>
                            </li>
                            <li onClick={handlePageClick}
                                className={navClass === "/about" ? "selected" : ""}>
                                <NavLink to="about">About</NavLink>
                            </li>
                            <li onClick={handlePageClick}
                                className={navClass === "/sweets" ? "selected" : ""}>
                                <NavLink to="sweets">Sweet</NavLink>
                            </li>
                            <li onClick={handlePageClick}
                                className={navClass === "/savourys" ? "selected" : ""}>
                                <NavLink to="savourys">Savoury</NavLink>
                            </li>
                            <li onClick={handlePageClick}
                                className={navClass === "/addrecipe" ? "selected" : ""}>
                                <NavLink to="addrecipe">Add Recipes</NavLink>
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