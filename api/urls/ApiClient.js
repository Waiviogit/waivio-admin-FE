import axios from 'axios';
import _ from 'lodash';
import { updateCookies, setDefaultHeaders, deleteAuthHeaders } from 'helpers/headers';
import { redirect } from 'helpers/redirect';
import { parseCookies, destroyCookie } from 'nookies';
import config from 'api/urls/urls-config';

export default class ApiClient {
    constructor({ prefix = config[`API_HOST`] } = {}) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params, responseType, onDownloadProgress) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'get',
            data: payload,
            params,
            responseType,
            onDownloadProgress,
        });
    }

    put(requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'put',
            data: payload,
        });
    }

    post(requestUrl, payload = {}, responseType) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'post',
            data: payload,
            responseType,
        });
    }

    delete(requestUrl, payload = {}, params) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'delete',
            data: payload,
            params,

        });
    }

    validateToken(requestUrl, headers) {
        return axios({ method: 'GET', url: `${this.prefix}${requestUrl}`, headers: { ...JSON.parse(headers) } })
            .then((response) => {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                return response;
            }).catch((error) => {
                return error;
            });
    }
}

const request = ({
                     url, method, data, params = {}, responseType,
                 }) => {
    setDefaultHeaders(parseCookies()['authorization']);
    return axios({
        method,
        url,
        params,
        data,
        responseType,
        headers: { 'content-type': 'application/json' },
    })
        .then((response) => {
            if (response.headers) {
                updateCookies(response.headers);
            }
            if (response.status >= 200 && response.status < 300) {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                return response;
            }
        }).catch((xhr) => {
            if (xhr.response && xhr.response.headers) {
                updateCookies(xhr.response.headers);
            }
            const response = { error: {} };
            response.error.statusCode = (xhr && xhr.response && xhr.response.status) || 500;
            response.error.status = 'error';
            response.error.allErrors = _.get(xhr, 'response.data.errors', _.get(xhr, 'response.data.error'));
            response.error.toString = () => {
                let result = 'Bad response from server';
                if (xhr && xhr.response && xhr.response.data) {
                    const errors = xhr.response.data.errors || xhr.response.data.error;
                    const isObject = errors && _.isObject(errors);
                    if ((errors && errors[0]) || isObject) {
                        if (isObject) {
                            result = errors[_.head(_.keys(errors))];
                        } else {
                            result = _.isArray(errors) ? errors[0] : errors;
                        }
                    }
                } else {
                    result = xhr.message;
                }
                return result;
            };
            if (xhr.response && xhr.response.data && xhr.response.data instanceof Blob) {
                response.error.blob = xhr.response.data;
            }
            if (response.error.statusCode === 401) {
                deleteAuthHeaders();
                destroyCookie({}, 'authorization');
                redirect('/');
            }
            throw response;
        });
};
