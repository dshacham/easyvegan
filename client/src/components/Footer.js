import React from 'react';
import '../style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <p className="footer-name">&copy;EASYVEGAN2020</p>
            <div className="footer-contact">
                <p>CONTACT:</p>
                <a href="mailto: dshacham22@gmail.com" target="_blank">
                    <FontAwesomeIcon className="icon" title="email me" icon={faEnvelope} />
                </a>
                <a href="https://www.linkedin.com/in/dana-shacham-937408163/" target="_blank">
                    <FontAwesomeIcon className="icon" title="email me" icon={faLinkedin} />
                </a>
                <a href="https://github.com/dshacham" target="_blank">
                    <FontAwesomeIcon className="icon" title="email me" icon={faAddressCard} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;