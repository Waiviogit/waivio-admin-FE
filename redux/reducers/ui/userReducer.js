import * as actions from "../../actions/authActions";

const initialState = {
    isSignIn: false,
  admin: {},
};

export function userReducer(state = initialState, action) {
  const {type, payload} = action;
    switch (type) {
    case actions.SIGN_IN_SUCCESS:
        return { ...state, admin: payload.admin, isSignIn: true };
    case actions.SIGN_IN_ERROR:
        return initialState;
    case actions.SIGN_OUT_SUCCESS:
    default:
        return state;
    }
}
