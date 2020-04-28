import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { appsReducer } from "./appsReducer";
import { searchReducer } from "./searchReducer";
import { tagsReducer } from "./tagsReducer";
import { sortReducer } from "./sortReducer";

export default combineReducers({
    admin: userReducer,
    apps: appsReducer,
    search: searchReducer,
    tags: tagsReducer,
    sort: sortReducer,
});

