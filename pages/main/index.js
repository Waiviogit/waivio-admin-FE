import { connect } from 'react-redux';
import Main from './Main';
import withRedirectIfNotAuth from '../../components/HOC/helpers/withRedirectIfNotAuth';
import { getApps } from "../../redux/selectors/userSelectors";

const mapStateToProps = (state) => ({
    apps: getApps(state),
});

export default connect(mapStateToProps)(withRedirectIfNotAuth(Main));

