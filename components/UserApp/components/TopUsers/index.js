import { TopUsers } from './TopUsers';
import { connect } from 'react-redux';

const mapSateToProps = state => ({
    searchingContent: state.ui.search.top_users,
    sortBy: state.ui.sort.sortBy,
});

export default connect(mapSateToProps)(TopUsers);
