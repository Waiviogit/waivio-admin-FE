export const dispatchRequestClient = (dispatch, action) => (payload, util) => {
    return new Promise((resolve, reject) => dispatch(action({
        payload, resolve, reject, util, dispatch,
    })));
};