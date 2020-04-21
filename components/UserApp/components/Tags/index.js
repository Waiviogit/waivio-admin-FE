import Tags from "./Tags";
import { connect } from "react-redux";
import { dispatchRequestClient } from "../../../../helpers/asyncActions";
import { moderateTagsRequest } from "../../../../redux/actions/appsActions";

const mapSateToProps = state => ({
    searchingContent: state.ui.search.tags,
    contentIndex: state.ui.tags.contentIndex,
});

const mapDispatchToProps = (dispatch) => ({
    moderateTag: dispatchRequestClient(dispatch, moderateTagsRequest),
});

export default connect(mapSateToProps, mapDispatchToProps)(Tags);
