//https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm

import React, { useState } from 'react'


export const StoreContext = React.createContext(null)


export default ({ children }) => {

    //INITIAL DATA (can be gathered from asynch request)
    const accountNumbers = ['11111', '22222', '33333']
    const accountProperties = []
    const userProfile = {
        name: 'Pedro Smith',
        email: 'pedrosmith@gmail.com'
    }
    const appState = {
        activeLink: 'overview',
        isFlipped: false, //flip card around
        oneChart: null,
        oneOverlay: null,
        selectedAccount: accountNumbers[0], //can be set to first accountNumber after they load
        viewAs: 'tiles',
    }


    // Global Functions
    const exampleGlobalFunction = (ascending) => {
        // 
    };
    const globalFunctions = {
        exampleGlobalFunction
    }


    const [app, setApp] = useState(appState)
    const [user, setUser] = useState(userProfile)
    const [accounts, setAccounts] = useState(accountNumbers)
    const [balances, setBalances] = useState(new Map()) //keys are accountkey
    const [paySelected, setPaySelected] = useState(new Map()) //keys are accountkey
    const [properties, setProperties] = useState(accountProperties)
    const [propertiesIntact, setPropertiesIntact] = useState(accountProperties)
    const [appFunctions, setAppFunctions] = useState(globalFunctions)
    const [worker, setWorker] = useState(null)

    
    const store = {
        appInfo: [app, setApp],
        userInfo: [user, setUser],
        accountInfo: [accounts, setAccounts],
        balancesInfo: [balances, setBalances],
        payInfo: [paySelected, setPaySelected],
        propertyInfo: [properties, setProperties],
        propertyInfoIntact: [propertiesIntact, setPropertiesIntact],
        appFunctions: [appFunctions, setAppFunctions],
        webWorker: [worker, setWorker],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
