import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_USER
} from "./actionTypes";
import axios from "axios";

const login_request = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const login_success = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

const login_failure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const loginUser = (payload) => (dispatch) => {
    dispatch(login_request());

    return axios
        .post("https://reqres.in/api/login", payload)
        .then((res) => {
            console.log(res.data)
            dispatch(login_success(res.data))
        })
        .catch((err) => {
            console.log(err)
            dispatch(login_failure(err))
        })
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}