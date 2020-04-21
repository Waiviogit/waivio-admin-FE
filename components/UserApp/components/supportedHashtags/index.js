import SupportedHashtags from "./SupportedHashtags";
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import { deleteSupportedHashtagsRequest } from "../../../../redux/actions/appsActions";
import { connect } from "react-redux";

const mapSateToProps = state => ({
    searchingContent: state.ui.search.supported_hashtags,
});

const mapDispatchToProps = (dispatch) => ({
    deleteSupportedHashTag: dispatchRequestClient(dispatch, deleteSupportedHashtagsRequest),
});

export default connect(mapSateToProps, mapDispatchToProps)(SupportedHashtags);
