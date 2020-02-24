import * as actions from "../../actions/authActions";

const initialState = {
  isSignIn: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      console.log(action.payload.admin.email);
      return { ...state, admin: action.payload.admin, isSignIn: true };
    case actions.SIGN_IN_ERROR:
      return initialState;
    case actions.SIGN_OUT_SUCCESS:
    default:
      return state;
  }
}
