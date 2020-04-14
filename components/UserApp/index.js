import UserApp from './UserApp';
import { dispatchRequestClient } from "../../helpers/asyncActions";
import { upgradeStatusToModeratorRequest } from "../../redux/actions/userActions";
import { createServiceBotRequest } from "../../redux/actions/appsActions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    upgradeToModerator: dispatchRequestClient(dispatch, upgradeStatusToModeratorRequest),
    createServiceBot: dispatchRequestClient(dispatch, createServiceBotRequest),
});

export default connect(null, mapDispatchToProps)(UserApp);
