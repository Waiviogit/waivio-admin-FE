// import { getAvailableFilters } from "redux/actions/entities/interfaceActions";
// import { getCompanyLists, getContactLists } from "redux/actions/entities/listsActions";
// import { getInitialNotifications, getPromotions } from "redux/actions/entities/notificationsAction";
import { getAllApps } from '../redux/actions/appsActions';
import { dispatchRequest, dispatchRequestClient } from "./asyncActions";

export default async (ctx, dispatch) => {
    const actions = [getAllApps];

    actions.forEach(async (action) => {
        try {
            if (ctx) {
                await dispatchRequest(ctx, action)();
            } else {
                await dispatchRequestClient(dispatch, action)();
            }
        } catch (e) {
            console.log(e);
        }
    });
    return true;
};
