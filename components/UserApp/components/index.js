import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import { UserAppContent } from './UserAppContent';
import { upgradeStatusToModeratorRequest } from '../../../redux/actions/userActions';
import { createServiceBotRequest } from '../../../redux/actions/appsActions';
export { TopUsers } from "./TopUsers/TopUsers";

const mapDispatchToProps = (dispatch) => ({
    upgradeToModerator: dispatchRequestClient(dispatch, upgradeStatusToModeratorRequest),
    createServiceBot: dispatchRequestClient(dispatch, createServiceBotRequest)
});
 
export default connect(null, mapDispatchToProps)(UserAppContent);
