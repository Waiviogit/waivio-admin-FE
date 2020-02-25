import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import { UserAppContent } from './UserAppContent';
import { upgradeStatusToModeratorRequest } from '../../../redux/actions/userActions';


const mapDispatchToProps = (dispatch) => ({
    upgradeToModerator: dispatchRequestClient(dispatch, upgradeStatusToModeratorRequest),
});

export { Moderators } from "./Moderators/Moderators";
// export { UserAppContent } from "./UserAppContent";
export { ModeratorsPermlinks } from "./Moderators/ModeratorsPermlinks";
export { ModeratorsNames } from "./Moderators/ModeratorsNames";
export { TopUsers } from "./TopUsers/TopUsers";
export { TopUsersNames } from "./TopUsers/TopUsersNames";
export { TopUsersWeight } from "./TopUsers/TopUsersWeight";
export { ServiceBots } from "./ServiceBots/ServiceBots";
export { ServiceBotsNames } from "./ServiceBots/ServiceBotsNames";
export { ServiceBotsContent } from "./ServiceBots/ServiceBotsContent";
export { BlackList } from "./BlackList/BlackList";
export default connect(null, mapDispatchToProps)(UserAppContent);

