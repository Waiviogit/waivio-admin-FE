import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import { deleteBlackListUsersRequest } from '../../../../redux/actions/appsActions';
import BlackList from './BlackList';

const mapSateToProps = state => ({
    searchingContent: state.ui.search.black_list_users,
});

const mapDispatchToProps = (dispatch) => ({
    deleteBlackListUsers: dispatchRequestClient(dispatch, deleteBlackListUsersRequest),
});

export default connect(mapSateToProps, mapDispatchToProps)(BlackList);
