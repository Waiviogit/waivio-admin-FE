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
        return this.apiClient.get(`${config.moderateArrays.pull}/${app}${config.moderateArrays.moderateArrays}`, {}, data);
    }

    addBlackListUsers({ data, app }) {
        return this.apiClient.get(`${config.moderateArrays.push}/${app}${config.moderateArrays.moderateArrays}`, {}, data);
    }

    deleteSupportedHashtags({ data, app }) {
        return this.apiClient.get(`${config.moderateArrays.pull}/${app}${config.moderateArrays.moderateArrays}`, {}, data);
    }

    addSupportedHashtags({ data, app }) {
        return this.apiClient.get(`${config.moderateArrays.push}/${app}${config.moderateArrays.moderateArrays}`, {}, data);
    }

    moderateTags({ data, app }) {
        return this.apiClient.post(`${config.moderateTags.app}/${app}${config.moderateTags.moderateTags}`, data);
    }
}
