import {
    FETCH_BALANCES_FAILED,
    FETCH_BALANCES_FULFILLED, 
    SET_BALANCES_STATUS, 
    BALANCES_LOGOUT
} from '../actions'

const initialState = {
    data: [],
    messages: [],
    status: "idle", // "idle" | "pending" | "success" | "failure"
}

export function balancesReducer(state = initialState, action) {
    switch(action.type) {
        case SET_BALANCES_STATUS: 
            return {
                ...state,
                status: action.payload
            }
        
        case FETCH_BALANCES_FAILED:
            return {
                ...state,
                status: 'failure',
                messages: [{
                    type: 'error',
                    text: action.payload
                }]
            }

        case FETCH_BALANCES_FULFILLED:
            return {
                ...state,
                status: 'success',
                data: action.payload,
                messages: [] //clear out msgs
            }

        case BALANCES_LOGOUT: 
            return {
                ...state,
                data: [],
                status: 'idle'
            }
            
        default: return state
    }
}