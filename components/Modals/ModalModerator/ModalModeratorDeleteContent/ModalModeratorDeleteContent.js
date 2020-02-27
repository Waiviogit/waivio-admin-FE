import '../ModalModerator.scss';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { CustomButton } from "../../../common/buttons";

const ModalModeratorDeleteContent = ({
    onClose,
    appName,
    onFormSubmit,
    type,
    moderator,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, author_permlinks } = moderator;

    const handleSubmit = () => {
        const requestData = { app: appName, moderator: { name, author_permlinks} };
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
    type: PropTypes.string,
    moderator: PropTypes.object,
    onFormSubmit: PropTypes.func,
    onClose: PropTypes.func,
    appName: PropTypes.string,
};

export default ModalModeratorDeleteContent;
