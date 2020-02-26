import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import { UserAppContent } from './UserAppContent';
import { upgradeStatusToModeratorRequest } from '../../../redux/actions/userActions';

// export { Moderators } from "./Moderators/Moderators";
// export { UserAppContent } from "./UserAppContent";
// export { ModeratorsPermlinks } from "./Moderators/ModeratorsPermlinks";
// export { ModeratorsNames } from "./Moderators/ModeratorsNames";
export { TopUsers } from "./TopUsers/TopUsers";
// export { BlackList } from "./BlackList/BlackList";

const mapDispatchToProps = (dispatch) => ({
    upgradeToModerator: dispatchRequestClient(dispatch, upgradeStatusToModeratorRequest),
});
 
export default connect(null, mapDispatchToProps)(UserAppContent);

