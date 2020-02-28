import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";
import { CustomButton } from "../../common/buttons";
import CustomModalHeader from "../../common/CustomModalHeader";
import ModalBotCreateContent from "./ModalBotCreateContent/ModalBotCreateContent";
import ModalBotUpdateContent from "./ModalBotUpdateContent";
import ModalBotDeleteContent from "./ModalBotDeleteContent";

const ModalServiceBot = ({
    type,
    onFormSubmit,
    showButtonContent,
    submitButtonContent,
    title,
    appName,
    bot,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const stopPropagation = (e) => e.stopPropagation();
    const handleShow = (e) => {
        setIsOpen(true);
        stopPropagation(e);
    };
    const handleClose = () => setIsOpen(false);
   
    const getRenderModal = () => {
        let renderModal = null;
        if (type === "update") {
            renderModal = (
                <ModalBotUpdateContent
                    bot={bot}
                    submitButtonContent={submitButtonContent}
                    onFormSubmit={onFormSubmit}
                    type={type}
                    appName={appName}
                    onClose={handleClose}
                />
            );
        } else if (type === "delete") {
            renderModal = (
                <ModalBotDeleteContent
                    bot={bot}
                    appName={appName}
                    submitButtonContent={submitButtonContent}
                    type={type}
                    onFormSubmit={onFormSubmit}
                    onClose={handleClose}
                />
            );
        } else if (type === "create") {
            renderModal = (
                <ModalBotCreateContent
                    bot={bot}
                    submitButtonContent={submitButtonContent}
                    onFormSubmit={onFormSubmit}
                    type={type}
                    appName={appName}
                    onClose={handleClose}
                />
            );
        }
        return renderModal;
    };

    return (
        <>
            <CustomButton content={showButtonContent} color='orange' onClick={handleShow} />
            <Modal size="tiny" open={isOpen} onClick={stopPropagation}>
                <CustomModalHeader onClose={handleClose} title={title} icon="clear" />
                <Modal.Content>
                    <div className="modal-moderator__content">
                        {getRenderModal()}
                    </div>
                </Modal.Content>
            </Modal>
        </>
    );
};

ModalServiceBot.propTypes = {
    type: PropTypes.string,
    onFormSubmit: PropTypes.func,
    showButtonContent: PropTypes.string,
    submitButtonContent: PropTypes.string,
    title: PropTypes.string,
    appName: PropTypes.string,
    bot: PropTypes.object,
};

export default ModalServiceBot;
