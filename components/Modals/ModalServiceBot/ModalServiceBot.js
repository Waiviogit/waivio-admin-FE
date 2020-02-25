import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Modal } from "semantic-ui-react";
import { CustomButton } from '../../common/buttons';
import CustomModalHeader from '../../common/CustomModalHeader';
import ModalServiceBotForm from "./ModalServiceBotForm/ModalServiceBotForm";

const ModalServiceBot = ({ createServiceBot, updateServiceBot, upgradeToUser,  showButtonContent, isUpdate, isCreate, isDelete, submitButtonContent, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const stopPropagation = (e) => e.stopPropagation();
    return (
        <>
            <CustomButton content={showButtonContent} onClick={handleShow}/>
            <Modal size="tiny" open={isOpen} onClick={stopPropagation}>
                <CustomModalHeader onClose={handleClose} title={title} icon='clear'/>
                <Modal.Content>
                    <div className='modal-moderator__content'>
                        <ModalServiceBotForm
                            submitButtonContent={submitButtonContent}
                            isUpdate={isUpdate}
                            isCreate={isCreate}
                            isDelete={isDelete}
                            createServiceBot={createServiceBot}
                            updateServiceBot={updateServiceBot}
                            upgradeToUser={upgradeToUser}
                            onClose={handleClose}
                        />
                    </div>
                </Modal.Content>
            </Modal>
        </>
    );
};

ModalServiceBot.propTypes = {

};

export default ModalServiceBot;