export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export const CLEAR_USER_STORE = "CLEAR_USER_STORE";

export const signIn = payload => ({
    type: SIGN_IN_REQUEST,
    ...payload,
});

export const signInSuccess = data => ({
    type: SIGN_IN_SUCCESS,
    payload: data,
});

export const signInError = () => ({
    type: SIGN_IN_ERROR,
});

export const clearUserStore = () => ({
    type: CLEAR_USER_STORE,
});