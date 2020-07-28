import React, { useEffect } from 'react';
import '../style/Home.scss';
import { NavLink } from 'react-router-dom';
import Recommended from "./Recommended";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home">
            <div className="big-container">
                <div className="question-container">
                    <div className="smaller-container">
                        <p>What are you in the mood for?</p>
                        <ul>
                            <li><NavLink to="sweets">SWEET</NavLink></li>
                            <li><img id="vegan" src="../assets/img/vegan-icon.png" alt="100% vegan" /></li>
                            <li><NavLink to="savourys">SAVOURY</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Recommended />
        </div>
    );
};

export default Home;