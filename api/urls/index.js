import ApiClient from '../../api/urls/ApiClient';
import Auth from '../../api/Auth';
import StatusOfUser from '../../api/Status';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix });
    return {
        auth: new Auth({ apiClient: api }),
        statusOfUser: new StatusOfUser({ apiClient: api }),
    };
}
