import { createStore, combineReducers, compose, applyMiddleware }from 'redux'
import {appReducer} from './reducers/appReducer'
import { combineEpics, createEpicMiddleware }from 'redux-observable'

import { fetchUserAccountsEpic } from './epics/fetchUserAccounts'
import { userAccountsReducer } from './reducers/userAccountsReducer'

export function configureStore() {

    const rootEpic = combineEpics(fetchUserAccountsEpic)
    const epicMiddleware = createEpicMiddleware()

    const rootReducer = combineReducers({
        app: appReducer,
        userAccounts: userAccountsReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

    epicMiddleware.run(rootEpic)

    return store
}