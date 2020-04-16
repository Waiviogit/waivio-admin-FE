import React from "react";
import ContentData from "../contentDataInterface";
import Moderators from "../../components/Moderators";
import ModalModerator from "../../../Modals/ModalModerator";
import Search from "../../components/Search";
import { connect } from 'react-redux';
import { searchModerators } from "../../../../redux/actions/searchActions";

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

const moderatorsTotal = ({ moderators }) => (
    <div className='total-number-of-block'>
        { moderators.length }
    </div>
);

const moderatorsSearch = ({ moderators }) => {
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchModerators(payload)),
    });
    const ConnectedModeratorsSearch = connect(null, mapDispatchToProps)(Search);
    return (
        <ConnectedModeratorsSearch
            list={moderators}
        />
    )
};

export default new ContentData(
    'Moderators',
    0,
    moderatorsContent,
    moderatorsModal,
    moderatorsTotal,
    moderatorsSearch,
);
