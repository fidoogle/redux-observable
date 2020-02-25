import { combineReducers } from 'redux'
import accountsReducer from './accountsReducer'
//import balancesReducer from './balancesReducer'

export default combineReducers({
    accounts: accountsReducer,
    //balances: balancesReducer,
})