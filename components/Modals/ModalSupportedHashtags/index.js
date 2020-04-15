import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import ModalSupportedHashtags from "./ModalSupportedHashtags";
import { addSupportedHashtagsRequest } from "../../../redux/actions/appsActions";

const mapDispatchToProps = (dispatch) => ({
    addSupportedHashtag: dispatchRequestClient(dispatch, addSupportedHashtagsRequest),
});

export default connect(null, mapDispatchToProps)(ModalSupportedHashtags);
