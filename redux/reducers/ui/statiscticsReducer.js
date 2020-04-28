import * as actions from "../../actions/statisticsActions";

const initialState = {
    contentIndex: 0,
};

export function tagsReducer(state = initialState, { type, payload }) {
    switch (type) {
    case actions.SET_CONTENT_INDEX:
        return { ...state, contentIndex: payload };
    default:
        return state;
    }
}
