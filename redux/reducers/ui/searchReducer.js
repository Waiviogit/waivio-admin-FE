import * as actions from "../../actions/searchActions";
import * as appsActions from '../../actions/appsActions'
import { filter } from 'lodash'

const initialState = {
    moderators: [],
    service_bots: [],
    black_list_users: [],
    top_users: [],
    supported_hashtags: [],
};

export function searchReducer(state = initialState,  { type, payload }) {
    switch (type) {
    case actions.SEARCH_MODERATORS:
        return { ...state, moderators: payload };
    case actions.SEARCH_SERVICE_BOTS:
        return { ...state, service_bots: payload };
    case actions.SEARCH_BLACK_LIST_USERS:
        return { ...state, black_list_users: payload };
    case actions.SEARCH_TOP_USERS:
        return { ...state, top_users: payload };
    case actions.SEARCH_SUPPORTED_HASHTAGS:
        return { ...state, supported_hashtags: payload };
    case appsActions.DELETE_BLACK_LIST_USER_SUCCESS :
        const newBlackList = filter(state.black_list_users,
            (item => item.name ? item.name !== payload : item !== payload));
        return {...state, black_list_users: newBlackList };
    case appsActions.ADD_BLACK_LIST_USER_SUCCESS :
        state.black_list_users.push(payload);
        return {...state, black_list_users: [...state.black_list_users] };
    case appsActions.DELETE_SUPPORTED_HASHTAGS_SUCCESS :
        const newSupportedHashtags = filter(state.black_list_users,
            (item => item.name ? item.name !== payload : item !== payload));
        return {...state, supported_hashtags: newSupportedHashtags };
    case appsActions.ADD_SUPPORTED_HASHTAGS_SUCCESS :
        state.supported_hashtags.push(payload);
        return {...state, supported_hashtags: [...state.supported_hashtags] };
    default:
        return state;
    }
}
