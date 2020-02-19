import { createSelector } from 'reselect';

export const getUiState = state => state.ui;

export const getUserState = createSelector(
    getUiState,
    ui => ui.user,
);
export const getSignInState = createSelector(
    getUserState,
    user => user.isSignIn,
);