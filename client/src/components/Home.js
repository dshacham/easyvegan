import React, { useState, useEffect } from 'react';
import '../style/Home.scss';
import { NavLink } from 'react-router-dom';


const Home = () => {

    return (
        <div className="home">
            <div className="question-container">
                <div className="smaller-container">
                    <p>What are you in the mood for?</p>
                    <ul>
                        <li><NavLink to="sweets">SWEET</NavLink></li>
                        <li><img id="vegan" src="../assets/img/vegan-icons.png" /></li>
                        <li><NavLink to="savourys">SAVOURY</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="background">
                <img src="../assets/img/cakepops.jpg" />
                <img src="../assets/img/pasta.jpg" />
                {/* <img src="../assets/img/egypt.jpg" />
            <img src="../assets/img/grain.jpg" /> */}
            </div>
        </div>
    );
};

export default Home;