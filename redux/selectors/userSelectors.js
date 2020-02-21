import { createSelector } from 'reselect';

export const getUiState = state => state.ui;

export const getUserState = createSelector(
    getUiState,
    ui => ui.admin,
);
export const getSignInState = createSelector(
    getUserState,
    admin => admin.isSignIn,
);