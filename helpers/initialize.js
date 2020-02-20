import { dispatchRequest } from "helpers/asyncActions";
// import { getAvailableFilters } from "redux/actions/entities/interfaceActions";
// import { getCompanyLists, getContactLists } from "redux/actions/entities/listsActions";
// import { getInitialNotifications, getPromotions } from "redux/actions/entities/notificationsAction";
import { dispatchRequestClient } from "./asyncActions";

export default async (ctx, dispatch) => {
    // const actions = [getAvailableFilters, getCompanyLists, getContactLists, getInitialNotifications, getPromotions];
    const actions = [];
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
