import { parseCookies } from "nookies";
import parseJson from 'helpers/parseJson';

export const hasAuthInfo = (res) => {
    const headers = parseJson(res);
    return headers && !!headers['access-token'] && !!headers.client
        && !!headers.uid && !!headers.expiry;
};

export const getAuthInfo = (ctx) => {
    return parseCookies(ctx)['auth-headers'];
};

export function authTokenFormat(res) {
    const headers = parseJson(res);
    return {
        'authorization': headers['access-token'],
        client: headers.client,
        uid: headers.uid,
        expiry: headers.expiry,
        'token-type': headers['token-type'],
    };
}

export function deleteAuthCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}