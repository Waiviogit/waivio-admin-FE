import * as actions from '../../actions/authActions';

const initialState = {
  isSignIn: false,
  user: {admin: {
    email: '',
      firstName: '',
      lastName: '',
      image: '',
      language: '',
      role: '',
      apps: [],
    }},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return { ...state, user: action.payload, isSignIn: true };
    case actions.SIGN_IN_ERROR:
      return initialState;
    default:
      return state;
  }
}
