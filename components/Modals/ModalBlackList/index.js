import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import ModalBlackList from "./ModalBlackList";
import {addBlackListUsersRequest} from "../../../redux/actions/appsActions";

const mapDispatchToProps = (dispatch) => ({
    addBlackListUsers: dispatchRequestClient(dispatch, addBlackListUsersRequest),
});

export default connect(null, mapDispatchToProps)(ModalBlackList);
