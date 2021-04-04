import {
    ADD_NEW_TASK
} from "./actionTypes";

export const addNewTask = (payload) => {
    return {
        type: ADD_NEW_TASK,
        payload
    }
}