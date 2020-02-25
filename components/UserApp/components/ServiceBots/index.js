import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import ServiceBotsNames from '../ServiceBots/ServiceBotsNames';
import { updateServiceBotRequest } from "../../../../redux/actions/appsActions";

const mapDispatchToProps = (dispatch) => ({
    updateServiceBot: dispatchRequestClient(dispatch, updateServiceBotRequest),

});

export default connect(null, mapDispatchToProps)(ServiceBotsNames);