import { SET_SORT_BY } from "../../actions/sortActions";

const initialState = {
    sortBy: 'alphabet',
};


export function sortReducer(state = initialState, { type, payload }) {
    switch (type) {
    case SET_SORT_BY:
        return { ...state, sortBy: payload };
    default:
        return state;
    }
}
