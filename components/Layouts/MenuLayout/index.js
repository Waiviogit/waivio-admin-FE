import { connect } from 'react-redux';
import MenuLayout from "./MenuLayout";
import { getSignInState } from "../../../redux/selectors/userSelectors";

const mapStateToProps = (state) => ({
    isSignIn: getSignInState(state),
});

export default connect(mapStateToProps, null)(MenuLayout);
