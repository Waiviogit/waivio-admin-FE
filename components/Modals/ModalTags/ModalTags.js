import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal } from "semantic-ui-react";
import { keys, map } from 'lodash'
import { CustomButton } from "../../common/buttons";
import CustomModalHeader from "../../common/CustomModalHeader";
import '../ModalBlackList/ModalBlackList.scss'

const ModalTags = ({ showButtonContent, submitButtonContent, title, appName, moderateTag, tagsData }) => {
    const selectOptions = map(keys(tagsData), category => ({
       key: category,
       value: category,
       text: category,
    }));

    const stopPropagation = (e) => e.stopPropagation();
    const [isOpen, setIsOpen] = useState(false);

    const handleShow = (e) => {
        setIsOpen(true);
        stopPropagation(e);
    };

    const handleClose = () => setIsOpen(false);

    const [tag, setTag] = useState('');
    const handleChangeTag = (e) => setTag(e.target.value);

    const [category, setCategory] = useState('');
    const handleChangeCategory = (e) => setCategory(e.target.textContent);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        const requestData = {
            data: {
                action: 'update',
                tags: {
                    category,
                    tag: tag,
                    value: tag
                }
            },
            app: appName };
        setTag('');
        setIsLoading(true);
        handleClose();
        stopPropagation(e);
        e.preventDefault();
        moderateTag(requestData)
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
                                <Form.Select
                                    label="Category"
                                    type="text"
                                    placeholder="Category"
                                    options={ selectOptions }
                                    onChange={handleChangeCategory}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Tag name"
                                    type="text"
                                    onChange={handleChangeTag}
                                    value={tag}
                                    placeholder="Tag"
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

ModalTags.propTypes = {
    showButtonContent: PropTypes.string,
    submitButtonContent: PropTypes.string,
    title: PropTypes.string,
    appName: PropTypes.string,
    moderateTag: PropTypes.func,
};

export default ModalTags;
