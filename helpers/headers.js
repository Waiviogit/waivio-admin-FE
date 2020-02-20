import axios from 'axios';
import { setCookie } from 'nookies';
import parseJson from 'helpers/parseJson';
// import { setDownloadProgress } from 'redux/actions/entities/contentActions';
import { authTokenFormat, hasAuthInfo } from './authToken';

const authHeadersKeys = ['authorization'];

export const updateCookies = (headers, ctx = {}) => {
    if (!headers || !hasAuthInfo(headers)) return null;
    setDefaultHeaders(headers);
    const authToken = authTokenFormat(headers);
    setCookie(ctx, 'authorization', JSON.stringify(authToken), { path: '/' });
};

export function deleteAuthHeaders() {
    authHeadersKeys.forEach((key) => {
        delete axios.defaults.headers.common[key];
    });
}

export const setDefaultHeaders = (data) => {
    const headers = parseJson(data);
    if (!headers) return null;
    authHeadersKeys.forEach((key) => {
        axios.defaults.headers.common[key] = headers[key];
    });
};

// export const onDownloadProgress = (progressEvent, type, dispatch) => {
//     const percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
//     dispatch(setDownloadProgress({ data: percentCompleted, type }));
// };
