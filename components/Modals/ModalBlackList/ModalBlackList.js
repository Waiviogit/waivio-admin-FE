import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal } from "semantic-ui-react";
import { CustomButton } from "../../common/buttons";
import CustomModalHeader from "../../common/CustomModalHeader";

const ModalBlackList = ({ showButtonContent, submitButtonContent, title, appName, onClose, addBlackListUsers }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const stopPropagation = (e) => e.stopPropagation();
    const [name, setName] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleChangeName = e => {
        setName(e.target.value);
    };
    const handleSubmit = () => {
        const requestData = { data: { names: name }, app: appName };
        setName('');
        setIsLoading(true);
        addBlackListUsers(requestData)
            .then(() => {
                setIsLoading(false);
                onClose();
            })
            .catch(() => setIsLoading(false));
    };

    return (
        <>
            <CustomButton color='orange' content={showButtonContent} onClick={handleShow}/>
            <Modal size="tiny" open={isOpen} onClick={stopPropagation}>
                <CustomModalHeader onClose={handleClose} title={title} icon='clear'/>
                <Modal.Content>
                    <div className="modal-blackList__content-form">
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    label="Name"
                                    type="text"
                                    onChange={handleChangeName}
                                    value={name}
                                    placeholder="Name"
                                />
                            </Form.Field>
                            <div className="modal-blackList__button">
                                <CustomButton
                                    color="orange"
                                    content={submitButtonContent}
                                    loading={isLoading}
                                    disabled={isLoading}
                                    onClick={handleSubmit}
                                />
                            </div>
                        </Form>
                    </div>
                </Modal.Content>
            </Modal>
        </>
    );
};

ModalBlackList.propTypes = {
    showButtonContent: PropTypes.string,
    submitButtonContent : PropTypes.string,
    title: PropTypes.string,
    appName: PropTypes.string,
    onClose: PropTypes.func,
    addBlackListUsers: PropTypes.func,
};

export default ModalBlackList;
