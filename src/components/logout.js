import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores/store'
import { fetchUserAccounts, sendLogin } from '../services/accounts'
import { get } from 'lodash'

import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import CircularProgress from '@material-ui/core/CircularProgress'

import { useHistory } from "react-router-dom";

const Logout = () => {
    //Globals
    //const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);
    const { ['balancesInfo']: [balances, setBalances] } = useContext(StoreContext); 
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext);
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext);
    let history = useHistory();

    useEffect(() => {
        logout()
    }, []);

    const logout = () => { //TODO: invalidate token
        history.replace({ pathname: '/'});
        //setDataApp(null)
        setBalances(null)
        setGlobalProperties(null)
        setGlobalPropertiesIntact(null)
    }

    return (
        <></>
    );
};

export default Logout;