import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import Moderators from "./Moderators";
import {updateModeratorRequest, upgradeStatusToUserRequest} from "../../../../redux/actions/userActions";

const mapSateToProps = state => ({
    searchingContent: state.ui.search.moderators
});

const mapDispatchToProps = (dispatch) => ({
    updateModerator: dispatchRequestClient(dispatch, updateModeratorRequest),
    upgradeToUser: dispatchRequestClient(dispatch, upgradeStatusToUserRequest),
});

export default connect(mapSateToProps, mapDispatchToProps)(Moderators);
