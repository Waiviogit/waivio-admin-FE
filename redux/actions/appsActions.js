export const GET_ALL_APPS_REQUEST = 'GET_ALL_APPS_REQUEST';
export const GET_ALL_APPS_SUCCESS = 'GET_ALL_APPS_SUCCESS';
export const GET_ALL_APPS_ERROR = 'GET_ALL_APPS_ERROR';

export const getAllApps = payload => ({
    type: GET_ALL_APPS_REQUEST,
    ...payload,
});

export const getAllAppsSuccess = payload => ({
    type: GET_ALL_APPS_SUCCESS,
    payload,
});

export const getAllAppsError = payload => ({
    type: GET_ALL_APPS_ERROR,
    payload,
});