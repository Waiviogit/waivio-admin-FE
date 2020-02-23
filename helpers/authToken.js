import { parseCookies } from "nookies";
import parseJson from "./parseJson";

export const hasAuthInfo = (res) => {
    const headers = parseJson(res);
    return headers && !!headers['access-token'];
};

export const getAuthInfo = (ctx) => {
    return parseCookies(ctx)['authorization'];
};

export function authTokenFormat(res) {
    const headers = parseJson(res);
    return { authorization: headers['access-token'] };
}

export function deleteAuthCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}
