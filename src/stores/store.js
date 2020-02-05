//https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm

import React from 'react'


export const StoreContext = React.createContext(null)


export default ({ children }) => {

    //INITIAL DATA can be gathered from asynch request
    const accountNumbers = ['11111', '22222', '33333']
    const accountProperties = []
    const userProfile = {
        name: 'Pedro Smith',
        email: 'pedrosmith@gmail.com'
    }
    const appState = {
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

    const [app, setApp] = React.useState(appState)
    const [user, setUser] = React.useState(userProfile)
    const [accounts, setAccounts] = React.useState(accountNumbers)
    const [properties, setProperties] = React.useState(accountProperties)
    const [propertiesIntact, setPropertiesIntact] = React.useState(accountProperties)
    const [appFunctions, setAppFunctions] = React.useState(globalFunctions)

    const store = {
        appInfo: [app, setApp],
        userInfo: [user, setUser],
        accountInfo: [accounts, setAccounts],
        propertyInfo: [properties, setProperties],
        propertyInfoIntact: [propertiesIntact, setPropertiesIntact],
        appFunctions: [appFunctions, setAppFunctions],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
