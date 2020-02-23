import { connect } from 'react-redux';
import { signOut } from "../../redux/actions/authActions";
// import { getSignInState } from "redux/selectors/userSelectors";
import { dispatchRequestClient } from "../../helpers/asyncActions";
import Main from './Main';
import {
    updateModeratorRequest,
    upgradeStatusToModeratorRequest,
    upgradeStatusToUserRequest,
} from '../../redux/actions/userActions';
import withRedirectIfNotAuth from '../../components/HOC/helpers/withRedirectIfNotAuth';

const mapDispatchToProps = (dispatch) => ({
    signOut: dispatchRequestClient(dispatch, signOut),
    updateModerator: dispatchRequestClient(dispatch, updateModeratorRequest),
    upgradeToUser: dispatchRequestClient(dispatch, upgradeStatusToUserRequest),
    upgradeToModerator: dispatchRequestClient(dispatch, upgradeStatusToModeratorRequest),
});

export default connect(null, mapDispatchToProps)(withRedirectIfNotAuth(Main));

