import { connect } from "react-redux";
import { upgradeStatusToUserRequest } from "redux/actions/userActions";
import { dispatchRequestClient } from 'helpers/asyncActions';
import ModalDeleteModerator from './ModalDeleteModerator';

const mapDispatchToProps = dispatch => ({
    upgradeToUser: dispatchRequestClient(dispatch, upgradeStatusToUserRequest),
});

export default connect(null, mapDispatchToProps)(ModalDeleteModerator);