import {
    FETCH_FAILED,
    FETCH_FULFILLED, 
    SET_STATUS, 
    USER_ACCOUNTS_LOGOUT
} from '../actions'

const initialState = {
    data: [],
    messages: [],
    status: "idle", // "idle" | "pending" | "success" | "failure"
}

export function userAccountsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_STATUS: 
            return {
                ...state,
                status: action.payload
            }
        
        case FETCH_FAILED:
            return {
                ...state,
                status: 'failure',
                messages: [{
                    type: 'error',
                    text: action.payload
                }]
            }

        case FETCH_FULFILLED:
            return {
                ...state,
                status: 'success',
                data: action.payload,
                messages: []
            }

        case USER_ACCOUNTS_LOGOUT: 
            return {
                ...state,
                data: [],
                status: 'idle',
                messages: []
            }
            
        default: return state
    }
}