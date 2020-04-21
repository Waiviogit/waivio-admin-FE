import { connect } from 'react-redux';
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import ModalTags from "./ModalTags";
import { moderateTagsRequest } from "../../../redux/actions/appsActions";

const mapDispatchToProps = (dispatch) => ({
    moderateTag: dispatchRequestClient(dispatch, moderateTagsRequest),
});

export default connect(null, mapDispatchToProps)(ModalTags);
