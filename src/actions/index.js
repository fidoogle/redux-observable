//User login / logout
export const FETCH_USER_LOGIN_DATA = 'FETCH_USER_LOGIN_DATA'
export const FETCH_USER_LOGIN_FAILED = 'FETCH_USER_LOGIN_FAILED'
export const FETCH_USER_LOGIN_FULFILLED = 'FETCH_USER_LOGIN_FULFILLED'
export const SET_USER_LOGIN_STATUS = 'SET_USER_LOGIN_STATUS'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_ACCOUNTS_LOGOUT = 'USER_ACCOUNTS_LOGOUT'

//Fetch user's accounts
export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_FAILED = 'FETCH_FAILED'
export const FETCH_FULFILLED = 'FETCH_FULFILLED'
export const SET_STATUS = 'SET_STATUS'


// export const fetchUserAccounts = (accountID) => async dispatch => {
//     const response = await jsonUser.get(`getuseraccounts/${accountID}`)

//     dispatch({
//         type: 'FETCH_ACCOUNTS',
//         payload: response.data
//     })
// }

// export const fetchAccountBalances = (accountKey) => async dispatch => {
//     const response = await jsonAccount.get(`getbalance/${accountKey}`)

//     dispatch({
//         type: 'FETCH_BALANCES',
//         payload: response.data
//     })
// }


export const fetchData= (accountID) => {
    return {
        type: FETCH_DATA,
        payload: accountID
    }
}
export const fetchFailed = (message) => {
    return {
        type: FETCH_FAILED,
        payload: message
    }
}
export const fetchFulFilled = (userAccounts) => {
    return {
        type: FETCH_FULFILLED,
        payload: userAccounts
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
}


export const fetchUserLoginData= (emailaddress) => {
    return {
        type: FETCH_USER_LOGIN_DATA,
        payload: emailaddress
    }
}
export const fetchUserLoginFailed = (message) => {
    return {
        type: FETCH_USER_LOGIN_FAILED,
        payload: message
    }
}
export const fetchUserLoginFulFilled = (userLoginData) => {
    return {
        type: FETCH_USER_LOGIN_FULFILLED,
        payload: userLoginData
    }
}
export const setUserLoginStatus = (status) => {
    return {
        type: SET_USER_LOGIN_STATUS,
        payload: status
    }
}
export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}
export const userAccountsLogout = () => {
    return {
        type: USER_ACCOUNTS_LOGOUT
    }
}
