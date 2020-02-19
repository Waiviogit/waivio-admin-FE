import Router from 'next/router';
import { getAuthInfo } from "./authToken";
import { clearUserStore } from 'redux/actions/authActions';

export const isAuthenticated = ctx => !!getAuthInfo(ctx);

export const redirectIfAuthenticated = (res) => {
    if (isAuthenticated(res)) {
        redirect("/", res);
        return true;
    }
    return false;
};

export const redirectInNotAuthenticated = (req) => {
    if (!isAuthenticated(req)) {
        if (process.browser) {
            req.store.dispatch(clearUserStore());
        }
        redirect("/login", req);
        return true;
    }
    return false;
};

export const redirect = (target, ctx = {}) => {
    if (!process.browser) {
        ctx.res.writeHead(302, { Location: target });
        ctx.res.end();
    } else {
        Router.push(target);
    }
};