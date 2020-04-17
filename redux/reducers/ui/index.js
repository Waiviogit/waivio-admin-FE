import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { appsReducer } from "./appsReducer";
import { searchReducer } from "./searchReducer";

export default combineReducers({
    admin: userReducer,
    apps: appsReducer,
    search: searchReducer,
});

