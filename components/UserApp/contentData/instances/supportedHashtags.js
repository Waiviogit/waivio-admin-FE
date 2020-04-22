import React from "react";
import ContentData from "../contentDataInterface";
import SupportedHashtags from "../../components/supportedHashtags";
import ModalSupportedHashtags from "../../../Modals/ModalSupportedHashtags";
import { searchSupportedHashtags, setInputValue } from "../../../../redux/actions/searchActions";
import { connect } from "react-redux";
import Search from "../../components/Search";

const supportedHashtagsTitle = ({ supported_hashtags }) => {
    return supported_hashtags ?
        <>
            <span>Supported Hashtags</span>
            <div className='total-number-of-block'>
                {supported_hashtags.length}
            </div>
        </> :
        <span>Supported Hashtags</span>;
};

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

const supportedHashtagsSearch = ({ supported_hashtags }) => {
    const mapSateToProps = state => ({
        inputValue: state.ui.search.inputValue
    });
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchSupportedHashtags(payload)),
        setInputValue: (payload) => dispatch(setInputValue(payload))
    });
    const ConnectedSupportedHashtagsSearch = connect(mapSateToProps, mapDispatchToProps)(Search);
    return (
        <ConnectedSupportedHashtagsSearch
            list={supported_hashtags}
        />
    )
};

export default new ContentData(
    supportedHashtagsTitle,
    4,
    supportedHashtagsContent,
    supportedHashtagsModal,
    supportedHashtagsSearch,
);
