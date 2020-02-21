import { connect } from "react-redux";
import { updateModeratorRequest } from "redux/actions/userActions";
import { dispatchRequestClient } from 'helpers/asyncActions';
import ModalUpdateModerator from './ModalUpdateModerator';

const mapDispatchToProps = dispatch => ({
    updateModerator: dispatchRequestClient(dispatch, updateModeratorRequest),
});

export default connect(null, mapDispatchToProps)(ModalUpdateModerator);