import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { appsReducer } from "./appsReducer";

export default combineReducers({
    admin: userReducer,
    apps: appsReducer,
});

