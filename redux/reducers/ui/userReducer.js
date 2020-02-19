import * as actions from '../../actions/authActions';

const initialState = {
  isSignIn: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return { ...state, ...action.payload, isSignIn: true };
    case actions.SIGN_IN_ERROR:
      return initialState;
    default:
      return state;
  }
}
