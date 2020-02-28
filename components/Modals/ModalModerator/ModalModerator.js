import "./ModalModerator.scss";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Modal } from "semantic-ui-react";
import { CustomButton } from '../../common/buttons';
import CustomModalHeader from '../../common/CustomModalHeader';
import ModalModeratorDeleteContent from "./ModalModeratorDeleteContent";
import ModalModeratorUpdateContent from "./ModalModeratorUpdateContent";
import ModalModeratorCreateContent from "./ModalModeratorCreateContent";

const ModalModerator = ({
    title,
    showButtonContent,
    submitButtonContent,
    onFormSubmit,
    appName,
    type,
    moderator,
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
        if (type === "delete") {
            renderModal = (
                <ModalModeratorDeleteContent
                    moderator={moderator}
                    appName={appName}
                    submitButtonContent={submitButtonContent}
                    type={type}
                    onFormSubmit={onFormSubmit}
                    onClose={handleClose}
                />
            );
        } else if (type === "update") {
            renderModal = (
                <ModalModeratorUpdateContent
                    moderator={moderator}
                    submitButtonContent={submitButtonContent}
                    onFormSubmit={onFormSubmit}
                    type={type}
                    appName={appName}
                    onClose={handleClose}
                />
            );
        } else if (type === "create") {
            renderModal = (
                <ModalModeratorCreateContent
                    moderator={moderator}
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
            <CustomButton color='orange' content={showButtonContent} onClick={handleShow}/>
            <Modal size="tiny" open={isOpen} onClick={stopPropagation}>
                <CustomModalHeader onClose={handleClose} title={title} icon='clear'/>
                <Modal.Content>
                    <div className='modal-moderator__content'>
                        {getRenderModal()}
                    </div>
                </Modal.Content>
            </Modal>
        </>
    );
};

ModalModerator.propTypes = {
    title: PropTypes.string,
    showButtonContent: PropTypes.string,
    submitButtonContent: PropTypes.string,
    onFormSubmit: PropTypes.func,
    appName: PropTypes.string,
    type: PropTypes.string,
    moderator: PropTypes.object,
};

export default ModalModerator;
