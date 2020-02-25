import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import ModalServiceBot from "./ModalServiceBot";
import { createServiceBotRequest } from "../../../redux/actions/appsActions";

const mapDispatchToProps = (dispatch) => ({
    createServiceBot: dispatchRequestClient(dispatch, createServiceBotRequest),
});

export default connect(null, mapDispatchToProps)(ModalServiceBot);