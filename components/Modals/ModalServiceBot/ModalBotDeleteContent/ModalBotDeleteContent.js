import React, { useState } from "react";
import PropTypes from "prop-types";
import { CustomButton } from "../../../common/buttons";

const ModalBotDeleteContent = ({
    onClose,
    appName,
    onFormSubmit,
    type,
    bot,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, postingKey, roles } = bot;
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
    onFormSubmit: PropTypes.func,
    appName: PropTypes.bool,
    type: PropTypes.bool,
    onClose: PropTypes.func,
    bot: PropTypes.object,
};

export default ModalBotDeleteContent;
