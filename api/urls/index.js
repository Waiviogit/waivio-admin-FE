import ApiClient from '../../api/urls/ApiClient';
import Auth from '../../api/Auth';
import StatusOfUser from '../../api/Status';
import Apps from '../../api/Apps';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix });
    return {
        auth: new Auth({ apiClient: api }),
        statusOfUser: new StatusOfUser({ apiClient: api }),
        apps: new Apps({ apiClient: api }),
    };
}
