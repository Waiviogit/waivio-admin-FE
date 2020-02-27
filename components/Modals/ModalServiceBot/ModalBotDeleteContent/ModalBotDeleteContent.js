import React, { useState } from "react";
import PropTypes from "prop-types";
import { CustomButton } from "../../../common/buttons";

const ModalBotDeleteContent = ({
    onClose,
    submitButtonContent,
    appName,
    onFormSubmit,
    type,
    bot,
}) => {

    const [isLoading, setIsLoading] = useState(false);
    const { name, postingKey, roles } = bot;
    console.log('appName', appName);
    const handleSubmit = () => {
        const requestData = {
            app: appName,
            name,
            postingKey,
            roles,
        };
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
        <div className="modal-serviceBot__content-form">
            {type === "delete" && <span>Are you sure?</span>}

            <div className="modal-serviceBot__content-btn">
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

ModalBotDeleteContent.propTypes = {
    submitButtonContent: PropTypes.string,
    isUpdate: PropTypes.bool,
    upgradeToModerator: PropTypes.func,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
    isDelete: PropTypes.bool,
    isCreate: PropTypes.bool,
    onClose: PropTypes.func,
};

export default ModalBotDeleteContent;
