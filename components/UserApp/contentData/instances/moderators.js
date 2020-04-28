import React from "react";
import ContentData from "../contentDataInterface";
import Moderators from "../../components/Moderators";
import ModalModerator from "../../../Modals/ModalModerator";
import Search from "../../components/Search";
import { connect } from 'react-redux';
import { searchModerators, setInputValue } from "../../../../redux/actions/searchActions";

const moderatorsTitle = ({ moderators }) => {
    return moderators ?
        <>
            <span>Moderators</span>
            <div className='total-number-of-block'>
                { moderators.length }
            </div>
        </> :
        <span>Moderators</span>;
};

const moderatorsModal = ({ name, upgradeToModerator }) => (
    <ModalModerator
        showButtonContent="Create Moderator"
        submitButtonContent="Create"
        title="Create Moderator"
        appName={ name }
        onFormSubmit={ upgradeToModerator }
        type='create'
    />
);

const moderatorsContent = ({ moderators, name }, index) => (
    <div key={index} className="user-app-content__moderators">
        <div className="user-app-content__moderators">
            <Moderators moderators={ moderators } appName={ name } />
        </div>
    </div>
);


const moderatorsSearch = ({ moderators }) => {
    const moderatorsList = moderators.map(mod => mod.name);
    const mapSateToProps = state => ({
        inputValue: state.ui.search.inputValue
    });
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchModerators(payload)),
        setInputValue: (payload) => dispatch(setInputValue(payload))
    });
    const ConnectedModeratorsSearch = connect(mapSateToProps, mapDispatchToProps)(Search);
    return (
        <ConnectedModeratorsSearch
            list={moderatorsList}
        />
    )
};

export default new ContentData(
    moderatorsTitle,
    0,
    moderatorsContent,
    moderatorsModal,
    moderatorsSearch,
);
