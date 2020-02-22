export const dispatchRequest = (ctx, action) => (payload, util) => {
    return new Promise((resolve, reject) => ctx.store.dispatch(action({
        payload, resolve, reject, ctx, util,
    })));
};

export const dispatchRequestClient = (dispatch, action) => (payload, util) => {
    return new Promise((resolve, reject) => dispatch(action({
        payload, resolve, reject, util, dispatch,
    })));
};

