import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import ModalModeratorForm from './ModalModeratorForm';
import {updateModeratorRequest, upgradeStatusToUserRequest} from "../../../../redux/actions/userActions";

const mapDispatchToProps = (dispatch) => ({
    updateModerator: dispatchRequestClient(dispatch, updateModeratorRequest),
    upgradeToUser: dispatchRequestClient(dispatch, upgradeStatusToUserRequest),
});

export default connect(null, mapDispatchToProps)(ModalModeratorForm);
