import { connect } from "react-redux";
import { upgradeStatusToModeratorRequest } from "redux/actions/userActions";
import { dispatchRequestClient } from 'helpers/asyncActions';
import ModalCreateModerator from './ModalCreateModerator';

const mapDispatchToProps = dispatch => ({
    upgradeToModerator: dispatchRequestClient(dispatch, upgradeStatusToModeratorRequest),
});

export default connect(null, mapDispatchToProps)(ModalCreateModerator);