import { TopUsers } from './TopUsers';
import { connect } from 'react-redux';

const mapSateToProps = state => ({
    searchingContent: state.ui.search.top_users,
});

export default connect(mapSateToProps)(TopUsers);
