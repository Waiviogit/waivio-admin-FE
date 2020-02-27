import {UPDATE_MODERATOR_ERROR, UPDATE_MODERATOR_REQUEST, UPDATE_MODERATOR_SUCCESS} from "./userActions";

export const GET_ALL_APPS_REQUEST = 'GET_ALL_APPS_REQUEST';
export const GET_ALL_APPS_SUCCESS = 'GET_ALL_APPS_SUCCESS';
export const GET_ALL_APPS_ERROR = 'GET_ALL_APPS_ERROR';

export const CREATE_SERVICE_BOT_REQUEST = "CREATE_SERVICE_BOT_REQUEST";
export const CREATE_SERVICE_BOT_SUCCESS = "CREATE_SERVICE_BOT_SUCCESS";
export const CREATE_SERVICE_BOT_ERROR = "CREATE_SERVICE_BOT_ERROR";

export const UPDATE_SERVICE_BOT_REQUEST = "UPDATE_SERVICE_BOT_REQUEST";
export const UPDATE_SERVICE_BOT_SUCCESS = "UPDATE_SERVICE_BOT_SUCCESS";
export const UPDATE_SERVICE_BOT_ERROR = "UPDATE_SERVICE_BOT_ERROR";

export const DELETE_SERVICE_BOT_REQUEST = "DELETE_SERVICE_BOT_REQUEST";
export const DELETE_SERVICE_BOT_SUCCESS = "DELETE_SERVICE_BOT_SUCCESS";
export const DELETE_SERVICE_BOT_ERROR = "DELETE_SERVICE_BOT_ERROR";

export const DELETE_BLACK_LIST_USER_REQUEST = "DELETE_BLACK_LIST_USER_REQUEST";
export const DELETE_BLACK_LIST_USER_SUCCESS = "DELETE_BLACK_LIST_USER_SUCCESS";
export const DELETE_BLACK_LIST_USER_ERROR = "DELETE_BLACK_LIST_USER_ERROR";

export const ADD_BLACK_LIST_USER_REQUEST = "ADD_BLACK_LIST_USER_REQUEST";
export const ADD_BLACK_LIST_USER_SUCCESS = "ADD_BLACK_LIST_USER_SUCCESS";
export const ADD_BLACK_LIST_USER_ERROR = "ADD_BLACK_LIST_USER_ERROR";

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

export const createServiceBotRequest = (payload) => ({
    type: CREATE_SERVICE_BOT_REQUEST,
    ...payload,
});

export const createServiceBotSuccess = (payload) => ({
    type: CREATE_SERVICE_BOT_SUCCESS,
    payload,
});

export const createServiceBotError = (payload) => ({
    type: CREATE_SERVICE_BOT_ERROR,
    ...payload,
});

export const updateServiceBotRequest = (payload) => ({
    type: UPDATE_SERVICE_BOT_REQUEST,
    ...payload,
});

export const updateServiceBotSuccess = (payload) => ({
    type: UPDATE_SERVICE_BOT_SUCCESS,
    payload,
});

export const updateServiceBotError = (payload) => ({
    type: UPDATE_SERVICE_BOT_ERROR,
    payload,
});

export const deleteServiceBotRequest = (payload) => ({
    type: DELETE_SERVICE_BOT_REQUEST,
    ...payload,
});

export const deleteServiceBotSuccess = (payload) => ({
    type: DELETE_SERVICE_BOT_SUCCESS,
    payload,
});

export const deleteServiceBotError = (payload) => ({
    type: DELETE_SERVICE_BOT_ERROR,
    payload,
});

export const deleteBlackListUsersRequest = (payload) => ({
    type: DELETE_BLACK_LIST_USER_REQUEST,
    ...payload,
});

export const deleteBlackListUsersSuccess = (payload) => ({
    type: DELETE_BLACK_LIST_USER_SUCCESS,
    payload,
});

export const deleteBlackListUsersError = (payload) => ({
    type: DELETE_BLACK_LIST_USER_ERROR,
    payload,
});

export const addBlackListUsersRequest = (payload) => ({
    type: ADD_BLACK_LIST_USER_REQUEST,
    ...payload,
});

export const addBlackListUsersSuccess = (payload) => ({
    type: ADD_BLACK_LIST_USER_SUCCESS,
    payload,
});

export const addBlackListUsersError = (payload) => ({
    type: ADD_BLACK_LIST_USER_ERROR,
    payload,
});
