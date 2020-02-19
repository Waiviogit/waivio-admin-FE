import apiFactory from 'api/urls/index';
import config from 'api/urls/urls-config';

export default apiFactory({
    apiPrefix: config.API_HOST,
});