import '../ModalModerator.scss';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { CustomButton } from "../../../common/buttons";

const ModalModeratorDeleteContent = ({
    onClose,
    submitButtonContent,
    appName,
    onFormSubmit,
    type,
    moderator,
}) => {
    console.log('appName', appName);
    const [isLoading, setIsLoading] = useState(false);
    const { name, author_permlinks } = moderator;

    const handleSubmit = () => {
        const requestData = { app: appName, moderator: { name, author_permlinks} };
        console.log('requestData', requestData);
        setIsLoading(true);
        onFormSubmit(requestData)
            .then(() => {
                setIsLoading(false);
                onClose();
            })
            .catch(() => setIsLoading(false));
    };

    const handleClose = () => onClose();

    return (
        <div className="modal-moderator__content-form">
            {type === "delete" && <span>Are you sure?</span>}

            <div className="modal-moderator__content-btn">
                <CustomButton color="orange" content="No" onClick={handleClose} />
                <CustomButton
                    color="orange"
                    content='Yes'
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

ModalModeratorDeleteContent.propTypes = {
    submitButtonContent: PropTypes.string,
    isUpdate: PropTypes.bool,
    upgradeToModerator: PropTypes.func,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
    isDelete: PropTypes.bool,
    isCreate: PropTypes.bool,
    onClose: PropTypes.func,
};

export default ModalModeratorDeleteContent;
