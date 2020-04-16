import React from "react";
import ContentData from "../contentDataInterface";
import SupportedHashtags from "../../components/supportedHashtags";
import ModalSupportedHashtags from "../../../Modals/ModalSupportedHashtags";
import { searchSupportedHashtags } from "../../../../redux/actions/searchActions";
import { connect } from "react-redux";
import Search from "../../components/Search";

const supportedHashtagsModal = ({ name }) => (
    <ModalSupportedHashtags
        showButtonContent="Add hashtag"
        submitButtonContent="Add"
        title="Supported hashtag"
        appName={ name }
    />
);

const supportedHashtagsContent = ({ supported_hashtags, name }, index) => (
    <div key={index} className="user-app-content__moderators">
        <div className="user-app-content__moderators">
            <SupportedHashtags supported_hashtags={ supported_hashtags } appName={ name } />
        </div>
    </div>
);

const supportedHashtagsTotal = ({ supported_hashtags }) => (
    <div className='total-number-of-block'>
        { supported_hashtags.length }
    </div>
);

const supportedHashtagsSearch = ({ supported_hashtags }) => {
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchSupportedHashtags(payload)),
    });
    const ConnectedSupportedHashtagsSearch = connect(null, mapDispatchToProps)(Search);
    return (
        <ConnectedSupportedHashtagsSearch
            list={supported_hashtags}
        />
    )
};

export default new ContentData(
    'Supported Hashtags',
    4,
    supportedHashtagsContent,
    supportedHashtagsModal,
    supportedHashtagsTotal,
    supportedHashtagsSearch,
);
