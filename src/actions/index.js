import jsonAccount from '../apis/jsonAccount'
import jsonUser from '../apis/jsonUser'


export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_FULFILLED = 'FETCH_FULFILLED'
export const SET_STATUS = 'SET_STATUS'


export const fetchUserAccounts = (accountID) => async dispatch => {
    const response = await jsonUser.get(`getuseraccounts/${accountID}`)
console.log("action", {response})
    dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: response.data
    })
}

export const fetchAccountBalances = (accountKey) => async dispatch => {
    const response = await jsonAccount.get(`getbalance/${accountKey}`)

    dispatch({
        type: 'FETCH_BALANCES',
        payload: response.data
    })
}


export const fetchFulFilled = (userAccounts) => {
    return {
        type: FETCH_FULFILLED,
        payload: userAccounts
    }
}

export const fetchData= () => {
    return {
        type: FETCH_DATA
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
}