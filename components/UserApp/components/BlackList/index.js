import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import { deleteBlackListUsersRequest } from '../../../../redux/actions/appsActions';
import BlackList from './BlackList';

const mapDispatchToProps = (dispatch) => ({
    deleteBlackListUsers: dispatchRequestClient(dispatch, deleteBlackListUsersRequest),
});

export default connect(null, mapDispatchToProps)(BlackList);
