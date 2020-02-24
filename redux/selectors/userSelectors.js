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

export const getApps = createSelector(
    getUiState,
    ui => ui.apps.apps,
);

export const getAppsNameState = createSelector(
    getApps,
    (apps = []) => apps.map(item => ( item.name )),
);

export const getAppsModeratorsState = createSelector(
    getApps,
    (apps = []) => apps.map(item => ({ name: item.moderators.map(moderator => moderator.name).toString(), author_permlinks: item.moderators.map(moderator => moderator.author_permlinks)})),
);
