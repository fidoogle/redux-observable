import { createStore, combineReducers, compose, applyMiddleware }from 'redux'
import {appReducer} from './reducers/appReducer'
import { combineEpics, createEpicMiddleware }from 'redux-observable'

import { fetchUserLoginEpic } from './epics/fetchUserLogin'
import { fetchUserAccountsEpic } from './epics/fetchUserAccounts'
import { fetchAccountBalancesEpic } from './epics/fetchAccountBalances'
import { userAccountsReducer } from './reducers/userAccountsReducer'
import { balancesReducer } from './reducers/balancesReducer'

export function configureStore() {

    const rootEpic = combineEpics(fetchUserLoginEpic, fetchUserAccountsEpic, fetchAccountBalancesEpic)
    const epicMiddleware = createEpicMiddleware()

    const rootReducer = combineReducers({
        app: appReducer,
        userAccounts: userAccountsReducer,
        balances: balancesReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

    epicMiddleware.run(rootEpic)

    return store
}