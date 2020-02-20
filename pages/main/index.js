import { connect } from 'react-redux';
import { signOut } from "redux/actions/authActions";
// import { getSignInState } from "redux/selectors/userSelectors";
import { dispatchRequestClient } from "helpers/asyncActions";
import Main from './Main';

const mapDispatchToProps = dispatch => ({
    signOut: dispatchRequestClient(dispatch, signOut),
});

export default connect(null, mapDispatchToProps)(Main);

