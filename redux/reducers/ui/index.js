import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { appsReducer } from "./appsReducer";
import { searchReducer } from "./searchReducer";
import { tagsReducer } from "./tagsReducer";

export default combineReducers({
    admin: userReducer,
    apps: appsReducer,
    search: searchReducer,
    tags: tagsReducer,
});

