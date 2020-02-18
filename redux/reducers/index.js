import { combineReducers } from 'redux';
// import { CLEAR_USER_STORE } from 'redux/actions/entities/authActions';
// import entitiesReducers from './entities';
// import uiReducers from './ui';

const combinedReducer = combineReducers({
    // entities: entitiesReducers,
    // ui: uiReducers,
});

export default (state, action) => {
    // const stateCopy = action.type === CLEAR_USER_STORE ? undefined : { ...state };
    return combinedReducer(stateCopy, action);
};