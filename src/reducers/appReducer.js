import {FETCH_USER_LOGIN_FULFILLED, SET_USER_LOGIN_STATUS, USER_LOGOUT} from '../actions'

const initialState = {
    userdata: {},
    userloginstatus: "idle" // "idle" | "pending" | "success" | "failure"
}

export function appReducer(state = initialState, action) {
    switch (action.type) {

        case SET_USER_LOGIN_STATUS: 
            return {
                ...state,
                userloginstatus: action.payload
            }
        
        case FETCH_USER_LOGIN_FULFILLED:
            return {
                ...state,
                userloginstatus: 'success',
                userdata: action.payload
            }

        case USER_LOGOUT: 
            return {
                ...state,
                userdata: {},
                userloginstatus: 'idle'
            }
        
        default: return state
    }
}
