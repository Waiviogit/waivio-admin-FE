import * as actions from "../../actions/appsActions";

const initialState = {
    apps: []
};

export function appsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ALL_APPS_SUCCESS:
            return { ...state, apps:  action.payload.data.result };
        case actions.CREATE_SERVICE_BOT_REQUEST:
            return  { ...state, service_bots: action.payload};
        default:
            return state;
    }
}