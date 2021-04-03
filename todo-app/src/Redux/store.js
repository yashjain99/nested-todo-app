import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../Pages/Login/Redux/loginReducer";

const rootReducer = combineReducers({
    login: loginReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));