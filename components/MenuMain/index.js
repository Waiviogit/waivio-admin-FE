import { connect } from 'react-redux';
import { signOut } from "../../redux/actions/authActions";
import { dispatchRequestClient } from "../../helpers/asyncActions";
import MenuMain from './MenuMain';
import { getAllApps } from '../../redux/actions/appsActions';
import { getUserState, getAppsModeratorsState, getSignInState } from "../../redux/selectors/userSelectors";

const mapStateToProps = (state) => ({
    user: getUserState(state),
    appModerators: getAppsModeratorsState(state),
    isSignIn: getSignInState(state),

});

const mapDispatchToProps = (dispatch) => ({
    signOut: dispatchRequestClient(dispatch, signOut),
    getAllApps: dispatchRequestClient(dispatch, getAllApps),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuMain);
