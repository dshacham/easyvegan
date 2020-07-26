import React from 'react';

import { Link } from 'react-router-dom';
import '../style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-container space-navbar">
            <div className="footer-name">&copy;EASYVEGAN2020</div>
            <div className="footer-icons">
                <Link to="/faq"><FontAwesomeIcon className="icon" title="Faq" icon={faQuestionCircle} /></Link>
                <Link to="/contact"><FontAwesomeIcon className="icon" title="Contact Us" icon={faEnvelope} /></Link>
            </div>
        </footer>
    )
}

export default Footer;