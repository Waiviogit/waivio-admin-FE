import * as actions from "../../actions/appsActions";

const initialState = {
    apps: [],
};

export function appsReducer(state = initialState, action) {
    switch (action.type) {
    case actions.GET_ALL_APPS_SUCCESS:
        return { ...state, apps: action.payload.data.result };
    case actions.CREATE_SERVICE_BOT_REQUEST:
        return { ...state, service_bots: action.payload };
    case actions.DELETE_SERVICE_BOT_SUCCESS:
        return { ...state, service_bots: action.payload };
    case actions.DELETE_BLACK_LIST_USER_SUCCESS:
        return { ...state, black_list_users: action.payload };
    case actions.ADD_BLACK_LIST_USER_SUCCESS:
        return { ...state, black_list_users: action.payload };
    default:
        return state;
    }
}
