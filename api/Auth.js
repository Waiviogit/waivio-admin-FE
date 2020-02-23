import config from "./urls/urls-config";
import Base from './Base';

export default class Auth extends Base {
    signIn(data) {
        return this.apiClient.post(config.auth.sign_in, data);
    }

    signOut() {
        return this.apiClient.post(config.auth.sign_out);
    }
}
