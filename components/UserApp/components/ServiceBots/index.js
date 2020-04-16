import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import ServiceBots from "./ServiceBots";
import { updateServiceBotRequest, deleteServiceBotRequest } from "../../../../redux/actions/appsActions";

const mapSateToProps = state => ({
    searchingContent: state.ui.search.service_bots
});

const mapDispatchToProps = (dispatch) => ({
    updateServiceBot: dispatchRequestClient(dispatch, updateServiceBotRequest),
    deleteServiceBot: dispatchRequestClient(dispatch, deleteServiceBotRequest),
});

export default connect(mapSateToProps, mapDispatchToProps)(ServiceBots);
