import React from "react";
import ContentData from "../contentDataInterface";
import Moderators from "../../components/Moderators";
import ModalModerator from "../../../Modals/ModalModerator";

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

const moderatorsContent = ({ moderators, name }) => (
    <div className="user-app-content__moderators">
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

export default new ContentData(
    'Moderators',
    0,
    moderatorsContent,
    moderatorsModal,
    moderatorsTotal
);
