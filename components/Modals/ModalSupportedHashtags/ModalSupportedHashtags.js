import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal } from "semantic-ui-react";
import { CustomButton } from "../../common/buttons";
import CustomModalHeader from "../../common/CustomModalHeader";
import '../ModalBlackList/ModalBlackList.scss'

const ModalSupportedHashtags = ({ showButtonContent, submitButtonContent, title, appName, addSupportedHashtag }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = (e) => {
        setIsOpen(true);
        stopPropagation(e);
    };
    const handleClose = () => setIsOpen(false);
    const stopPropagation = (e) => e.stopPropagation();
    const [hashtag, setHashtag] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleChangeHash = useCallback((e) => setHashtag(e.target.value));

    const handleSubmit = (e) => {
        const requestData = { data: { permlinks: hashtag }, app: appName };
        setHashtag('');
        setIsLoading(true);
        handleClose();
        stopPropagation(e);
        addSupportedHashtag(requestData)
            .then(() => {
                setIsLoading(false);
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
                                    label="Hashtag"
                                    type="text"
                                    onChange={handleChangeHash}
                                    value={hashtag}
                                    placeholder="Hashtag"
                                />
                            </Form.Field>
                            <div className="modal-blackList__button">
                                <CustomButton
                                    type='button'
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

ModalSupportedHashtags.propTypes = {
    showButtonContent: PropTypes.string,
    submitButtonContent: PropTypes.string,
    title: PropTypes.string,
    appName: PropTypes.string,
    addSupportedHashtag: PropTypes.func,
};

export default ModalSupportedHashtags;
