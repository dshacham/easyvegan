import React, { useState, useEffect, useContext } from 'react';
import Context from './Context';
import '../style/About.scss';

const About = () => {
    const { setNavClass } = useContext(Context);

    useEffect(() => {
        setNavClass(window.location.pathname);
    }, [])

    return (
        <div className="about">
            <div className="box">
                <h2 className="box-title">EASY VEGAN</h2>
                <h5>My personal collection of easy vegan recipes.</h5>
            </div>
            <div className="about-box">
                <h3>- ABOUT PROJECT -</h3>
                <img src="../../assets/img/fruit-about.jpg" alt="fruit" />
                <p>After finishing a Web Development course and working on the final project with an excellent team, I have decided to build this little project on my own so I can showcase the skills that I've acquired. Having an app to gather all my favorite recipes is just a bonus!</p>
            </div>
        </div>
    )
}

export default About;