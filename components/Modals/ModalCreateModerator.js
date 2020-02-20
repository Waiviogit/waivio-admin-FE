import './ModalCreateModerator.scss';
import React, { useState } from 'react';
import { Button, Modal, Image } from 'semantic-ui-react';

const ModalCreateModerator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return (
        <>
            <Button onClick={handleShow}>Create Moderator</Button>
            <Modal size='tiny' open={isOpen} onClose={handleClose}>
                <Modal.Header>
                    <div className='modal-title'>
                        <div>Create moderator</div>
                        <div className='modal-img'>
                            <Image src='/static/icons/clear.svg'/>
                        </div>
                    </div>
                    </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        positive
                        icon='checkmark'
                        content='Create'
                    />
                </Modal.Actions>
            </Modal>
        </>
    )
};

export default ModalCreateModerator;