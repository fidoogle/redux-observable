//User logs in
export const FETCH_USER_LOGIN_DATA = 'FETCH_USER_LOGIN_DATA'
export const FETCH_USER_LOGIN_FULFILLED = 'FETCH_USER_LOGIN_FULFILLED'
export const SET_USER_LOGIN_STATUS = 'SET_USER_LOGIN_STATUS'

//Fetch user's accounts
export const FETCH_DATA = 'FETCH_DATA'
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
