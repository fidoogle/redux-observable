import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import { StoreContext } from '../stores/store'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('overview')
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const history = useHistory();

    const calendar = (e) => {
        e.stopPropagation()
        setActiveLink('calendar')
        setDataApp({...dataApp, activeLink: 'calendar'})
        history.push('/calendar')
    }

    const flipCard = (e, setTo, view) => {
        e.stopPropagation()
        setActiveLink(view)
        setDataApp({...dataApp, activeLink: view, isFlipped: setTo})
    }

    const payment = (e) => {
        e.stopPropagation()
        setActiveLink('payment')
        setDataApp({...dataApp, activeLink: 'payment'})
    }
    
    return (
        <div className="nav-bar">
            <div className="content-max">
                <div className="nav-links">
                    <div onClick={(e) => {flipCard(e, false, 'overview')}} 
                        className={(activeLink==='overview')?'active':''}>
                        Overview
                    </div>
                    <div onClick={(e) => {flipCard(e, true, 'usage')}} 
                        className={(activeLink==='usage')?'active':''}>
                        Usage
                    </div>
                    <div>History</div>
                    <div onClick={(e) => {calendar(e)}} 
                        className={(activeLink==='calendar')?'active':''}>
                        Calendar
                    </div>
                    <div onClick={(e) => {payment(e)}} 
                        className={(activeLink==='payment')?'active':''}>
                        Payment
                    </div>
                    <div className="last-link">Contact Us</div>
                    <div className="settings">
                        <SettingsIcon fontSize="large"/>
                        <div>&nbsp;Settings</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;