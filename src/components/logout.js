import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../stores/store'
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