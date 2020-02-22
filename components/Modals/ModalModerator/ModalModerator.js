import "./ModalModerator.scss";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Modal } from "semantic-ui-react";
import { CustomButton } from '../../common/buttons';
import CustomModalHeader from '../../common/CustomModalHeader';
import ModalModeratorForm from './ModalModeratorForm';

const ModalModerator = ({
    title,
    showButtonContent,
    submitButtonContent,
    upgradeToModerator,
    updateModerator,
    upgradeToUser,
    isUpdate,
    isDelete,
    isCreate,
}) => {
    const [isOpen, setIsOpen] = useState(false);    
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const stopPropagation = (e) => e.stopPropagation();
    return (
        <>
            <CustomButton color="orange" content={showButtonContent} onClick={handleShow}/>
            <Modal size="tiny" open={isOpen} onClick={stopPropagation}>
                <CustomModalHeader onClose={handleClose} title={title} icon='clear'/>
                <Modal.Content>
                    <div className='modal-moderator__content'>
                        <ModalModeratorForm
                            submitButtonContent={submitButtonContent}
                            isUpdate={isUpdate}
                            isCreate={isCreate}
                            isDelete={isDelete}
                            upgradeToModerator={upgradeToModerator}
                            updateModerator={updateModerator}
                            upgradeToUser={upgradeToUser}
                            onClose={handleClose}
                        />
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
    isUpdate: PropTypes.bool,
    isDelete: PropTypes.bool,
    isCreate: PropTypes.bool,
    upgradeToModerator: PropTypes.func.isRequired,
    updateModerator: PropTypes.func.isRequired,
    upgradeToUser: PropTypes.func.isRequired,
};

export default ModalModerator;
