import {
    ADD_NEW_TASK
} from "./actionTypes";

const initState = {
    data: []
}

export const dashboardReducer = (state = initState, { type, payload }) => {
    switch(type) {
        case ADD_NEW_TASK: 
            return {
                ...state,
                data: [...state.data, payload]
            }
        default:
            return state
    }
}