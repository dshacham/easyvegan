
import React from "react";
import reactDOM from "react-dom";
import './style/index.scss';
import App from './components/App';
import Favicon from 'react-favicon'
import img from './assets/img/favicon.ico'

reactDOM.render(
    <div>
        <Favicon url={img} />
        <App />

    </div>

    , document.getElementById("root")
);
