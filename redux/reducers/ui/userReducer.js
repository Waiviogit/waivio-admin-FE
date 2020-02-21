import * as actions from "../../actions/authActions";

const initialState = {
  isSignIn: false,
  email: "",
  firstName: "",
  lastName: "",
  image: "",
  language: "",
  role: "",
  app: '',
  allModerators: []
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return { ...state, admin: action.payload, isSignIn: true };
    case actions.SIGN_IN_ERROR:
      return initialState;
    case actions.SIGN_OUT_SUCCESS:
    default:
      return state;
  }
}
