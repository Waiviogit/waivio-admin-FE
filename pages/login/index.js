import { connect } from 'react-redux';
import { signIn } from "redux/actions/authActions";
import { getSignInState } from "redux/selectors/userSelectors";
import { dispatchRequestClient } from "helpers/asyncActions";
import Login from './Login';

const mapStateToProps = state => ({
    isSignIn: getSignInState(state),
});

const mapDispatchToProps = dispatch => ({
    signIn: dispatchRequestClient(dispatch, signIn),
    initialize: () => initialize(null, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
