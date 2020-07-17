import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';
import sprinkles from "../assets/img/sprinklesSmall.png"

const NavBar = () => {

    return (
        <header>
            <img src={sprinkles} id="sprinkles" alt="Sprinkles" />
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/">
                        <h1>EASY VEGAN</h1>
                    </NavLink>
                </div>
                <nav>
                    <ul className="nav-group">
                        <li>Sweet &amp; Easy</li>
                        <li>Savoury &amp; Easy</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;