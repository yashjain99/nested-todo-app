import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_USER
} from "./actionTypes";

const initState = {
    data: [],
    isLoading: false,
    error: false,
    isAuth: false
}

export const loginReducer = (state = initState, { type, payload }) => {
    console.log(type, payload)

    switch(type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
                isAuth: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}