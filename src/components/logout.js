import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../stores/store'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { balancesLogout, userLogout, userAccountsLogout } from '../actions'

const Logout = () => {
    //Globals
    const { ['propertyInfo']: [globalProperties, setGlobalProperties] } = useContext(StoreContext);
    const { ['propertyInfoIntact']: [globalPropertiesIntact, setGlobalPropertiesIntact] } = useContext(StoreContext);
    const dispatch = useDispatch()
    let history = useHistory();

    useEffect(() => {
        logout()
    }, []);

    const logout = () => { //TODO: invalidate token
        dispatch(userLogout())
        dispatch(userAccountsLogout())
        dispatch(balancesLogout())
        setGlobalProperties(null)
        setGlobalPropertiesIntact(null)
        history.replace({ pathname: '/'})
    }

    return (
        <></>
    );
};

export default Logout;