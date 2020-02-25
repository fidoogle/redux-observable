import jsonAccount from '../apis/jsonAccount'
import jsonUser from '../apis/jsonUser'

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