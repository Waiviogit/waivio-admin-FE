export const UPGRADE_STATUS_TO_MODERATOR_REQUEST = "UPGRADE_STATUS_TO_MODERATOR_REQUEST";
export const UPGRADE_STATUS_TO_MODERATOR_SUCCESS = "UPGRADE_STATUS_TO_MODERATOR_SUCCESS";
export const UPGRADE_STATUS_TO_MODERATOR_ERROR = "UPGRADE_STATUS_TO_MODERATOR_ERROR";

export const UPGRADE_STATUS_TO_USER_REQUEST = "UPGRADE_STATUS_TO_USER_REQUEST";
export const UPGRADE_STATUS_TO_USER_SUCCESS = "UPGRADE_STATUS_TO_USER_SUCCESS";
export const UPGRADE_STATUS_TO_USER_ERROR = "UPGRADE_STATUS_TO_USER_ERROR";

export const UPDATE_MODERATOR_REQUEST = "UPDATE_MODERATOR_REQUEST";
export const UPDATE_MODERATOR_SUCCESS = "UPDATE_MODERATOR_SUCCESS";
export const UPDATE_MODERATOR_ERROR = "UPDATE_MODERATOR_ERROR";

export const upgradeStatusToModeratorRequest = (payload) => ({
    type: UPGRADE_STATUS_TO_MODERATOR_REQUEST,
    ...payload,
});

export const upgradeStatusToModeratorSuccess = (payload) => ({
    type: UPGRADE_STATUS_TO_MODERATOR_SUCCESS,
    payload,
});

export const upgradeStatusToModeratorError = (payload) => ({
    type: UPGRADE_STATUS_TO_MODERATOR_ERROR,
    ...payload,
});

export const upgradeStatusToUserRequest = (payload) => ({
    type: UPGRADE_STATUS_TO_USER_REQUEST,
    ...payload,
});

export const upgradeStatusToUserSuccess = (payload) => ({
    type: UPGRADE_STATUS_TO_USER_SUCCESS,
    payload,
});

export const upgradeStatusToUserError = (payload) => ({
    type: UPGRADE_STATUS_TO_USER_ERROR,
    ...payload,
});

export const updateModeratorRequest = (payload) => ({
    type: UPDATE_MODERATOR_REQUEST,
    ...payload,
});

export const upgradeModeratorSuccess = (payload) => ({
    type: UPDATE_MODERATOR_SUCCESS,
    payload,
});

export const upgradeModeratorError = (payload) => ({
    type: UPDATE_MODERATOR_ERROR,
    payload,
});
