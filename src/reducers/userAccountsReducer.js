import {FETCH_FULFILLED, SET_STATUS} from '../actions'

const initialState = {
    data: [],
    status: "idle" // "idle" | "pending" | "success" | "failure"
}

export function userAccountsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_STATUS: 
            return {
                ...state,
                status: action.payload
            }
        
        case FETCH_FULFILLED:
            return {
                ...state,
                status: 'success',
                data: action.payload
            }
            
        default: return state
    }
}