import React from 'react';
import {
        BrowserRouter as Router,
        Route,
        Switch,
        Link,
        Redirect,
        withRouter
    } from 'react-router-dom'

const NavHeader = () => {
    return (
        <div className="nav-header">
            <div className="content-max">
                <div><Link to="/"><img src="./logo-saws.png" alt="sawslogo" /></Link></div>
                <div className="title">My Commercial Account</div>
                <div className="need-help flex-css"><Link to="/login">Login</Link></div>
            </div>
        </div>
    );
};

export default NavHeader;