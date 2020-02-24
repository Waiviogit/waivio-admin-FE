import config from "./urls/urls-config";
import Base from "./Base";

export default class Apps extends Base {
    getAllApps(data) {
        return this.apiClient.get(`${config.apps.apps}/${data}${config.apps.show}`, data);
    }
}