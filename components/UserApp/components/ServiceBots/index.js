import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import ServiceBots from "./ServiceBots";
import { updateServiceBotRequest, deleteServiceBotRequest } from "../../../../redux/actions/appsActions";

const mapDispatchToProps = (dispatch) => ({
    updateServiceBot: dispatchRequestClient(dispatch, updateServiceBotRequest),
    deleteServiceBot: dispatchRequestClient(dispatch, deleteServiceBotRequest),
});

export default connect(null, mapDispatchToProps)(ServiceBots);
