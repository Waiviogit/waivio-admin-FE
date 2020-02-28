import { combineReducers } from 'redux';
import uiReducers from './ui';

const combinedReducer = combineReducers({
    ui: uiReducers,
});

export default (state, action) => {
    const stateCopy = action.type === 'CLEAR_USER_STORE' ? undefined : { ...state };
    return combinedReducer(stateCopy, action);
};
