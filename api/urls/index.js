import ApiClient from "./ApiClient";
import Auth from "../Auth";
import StatusOfUser from "../Status";
import Apps from "../Apps";

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix });
    return {
        auth: new Auth({ apiClient: api }),
        statusOfUser: new StatusOfUser({ apiClient: api }),
        apps: new Apps({ apiClient: api }),
    };
}
