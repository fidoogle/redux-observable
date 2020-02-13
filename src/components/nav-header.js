import React, { useContext } from 'react';
import { StoreContext } from '../stores/store'
import { Link } from 'react-router-dom'

const NavHeader = () => {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    return (
        <>
        {
            dataApp.activeLink!=='login' && 
            <div className="nav-header">
                <div className="content-max">
                    <div><Link to="/"><img src="./logo-saws.png" alt="sawslogo" /></Link></div>
                    <div className="title">My Commercial Account</div>
                    <div className="need-help flex-css"><Link to="/login">Login</Link></div>
                </div>
            </div>
        }
        </>
    );
};

export default NavHeader;