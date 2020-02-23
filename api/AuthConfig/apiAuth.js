import apiFactory from "../urls/index";
import config from "../urls/urls-config";

export default apiFactory({
    apiPrefix: config.API_HOST,
});
