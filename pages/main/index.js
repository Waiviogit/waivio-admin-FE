import { connect } from 'react-redux';
import { signOut } from "../../redux/actions/authActions";

import { dispatchRequestClient } from "../../helpers/asyncActions";
import Main from './Main';
import {
    updateModeratorRequest,
    upgradeStatusToModeratorRequest,
    upgradeStatusToUserRequest,
} from '../../redux/actions/userActions';
import withRedirectIfNotAuth from '../../components/HOC/helpers/withRedirectIfNotAuth';
import { getAllApps } from '../../redux/actions/appsActions';
import { getUserState, getApps, getAppsNameState, getAppsModeratorsState } from "../../redux/selectors/userSelectors";

const mapStateToProps = (state) => ({
    user: getUserState(state),
    apps: getApps(state),
    appsName: getAppsNameState(state),
    appModerators: getAppsModeratorsState(state),
});

const mapDispatchToProps = (dispatch) => ({
    signOut: dispatchRequestClient(dispatch, signOut),
    updateModerator: dispatchRequestClient(dispatch, updateModeratorRequest),
    upgradeToUser: dispatchRequestClient(dispatch, upgradeStatusToUserRequest),
    upgradeToModerator: dispatchRequestClient(dispatch, upgradeStatusToModeratorRequest),
    getAllApps: dispatchRequestClient(dispatch, getAllApps),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRedirectIfNotAuth(Main));

