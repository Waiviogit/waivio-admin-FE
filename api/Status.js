import config from "api/urls/urls-config";
import Base from "./Base";

export default class StatusOfUser extends Base {
  upgradeToModerator(data) {
    return this.apiClient.post(config.status.create, data);
  }

  upgradeToUser(data) {
    return this.apiClient.post(config.status.delete, data);
  }

  updateModerator({ data, type }) {
    let result;
    if (type === "Add") {result = this.apiClient.post(config.status.push, data);}
    if (type === "Delete") {result = this.apiClient.post(config.status.pull, data);}
    return result;
  }
}
