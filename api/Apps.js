import config from './urls/urls-config';
import Base from './Base';

export default class Apps extends Base {
    getAllApps(data) {
        return this.apiClient.get(`${config.apps.apps}/${data}${config.apps.show}`, data);
    }

    createServiceBot(data) {
        return this.apiClient.post(config.bots.create, data);
    }

    updateServiceBot({ data, type }) {
        let result;
        if (type === "Add") { result = this.apiClient.post(config.bots.push, data); }
        if (type === "Delete") { result = this.apiClient.post(config.bots.pull, data); }
        return result;
    }

    deleteServiceBot(data) {
        return this.apiClient.post(config.bots.delete, data);
    }

    deleteBlackListUsers({ data, app }) {
        return this.apiClient.get(`${config.blackList.pull}/${app}${config.blackList.blackList}`, {}, data);
    }

    addBlackListUsers({ data, app }) {
        return this.apiClient.get(`${config.blackList.push}/${app}${config.blackList.blackList}`, {}, data);
    }
}
