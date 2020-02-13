import React from 'react';
import { Link, useLocation } from 'react-router-dom'

const NavHeader = () => {

    const location = useLocation();
    console.log({location});

    return (
        <>
        {
            location.pathname!=='/login' && 
            <div className="nav-header">
                <div className="content-max">
                    <div><Link to="/"><img src="./logo-saws.png" alt="sawslogo" /></Link></div>
                    <div className="title">My Commercial Account</div>
                    <div className="need-help flex-css">
                        {
                            (location.pathname!=='/app')?
                            <Link to="/login">Login</Link>
                            :
                            <Link to="/logout">Logout</Link>
                        }
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default NavHeader;