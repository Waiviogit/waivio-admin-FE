import React, { useState } from 'react'
import { CustomButton } from "../../common/buttons";
import { Form, Modal } from "semantic-ui-react";
import { dispatchRequestClient } from "../../../helpers/asyncActions";
import { moderateTagsRequest } from "../../../redux/actions/appsActions";
import { connect } from "react-redux";
import CustomModalHeader from "../../common/CustomModalHeader";
import { keys, map } from "lodash";

const ModalTagsUpdate =  props => {
    const {
        tag,
        appName,
        oldCategory,
        tagsData,
        moderateTag,
        dataTagsKeys,
    } = props;

    const selectOptions = map(keys(tagsData), category => ({
        key: category,
        value: category,
        text: category,
    }));
    let { tagKey } = props;

    const stopPropagation = (e) => e.stopPropagation();
    const [isOpen, setIsOpen] = useState(false);

    const handleShow = (e) => {
        setIsOpen(true);
        stopPropagation(e);
    };
    const handleClose = () => setIsOpen(false);

    const [newTag, setNewTag] = useState('');
    const handleChangeTag = (e) => setNewTag(e.target.value);

    const [category, setCategory] = useState(oldCategory);
    const handleChangeCategory = (e) => setCategory(e.target.textContent);

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        if (typeof tagKey === 'number') {
            tagKey = dataTagsKeys[tagKey]
        }
        const requestDataDelete = {
            data: {
                action: 'delete',
                tags: {
                    category: oldCategory,
                    tag: tagKey,
                    value: tag
                }
            },
            app: appName
        };

        const requestDataUpdate = {
            data: {
                action: 'update',
                tags: {
                    category,
                    tag: tagKey,
                    value: newTag
                }
            },
            app: appName
        };
        setNewTag('');
        setIsLoading(true);
        handleClose();
        stopPropagation(e);
        e.preventDefault();
        moderateTag(requestDataDelete)
            .then(() => {
                moderateTag(requestDataUpdate);
                setIsLoading(false)
            })
            .catch(() => setIsLoading(false))
    };

    return   (
        <>
        <CustomButton color='orange' content='update' onClick={handleShow}/>
        <Modal size="tiny" open={isOpen} onClick={stopPropagation}>
            <CustomModalHeader onClose={handleClose} title={'title'} icon='clear'/>
            <Modal.Content>
                <div className="modal-blackList__content-form">
                    <Form>
                        <Form.Field>
                            <Form.Select
                                className='modal-blackList__content-form-select'
                                label="Category"
                                type="text"
                                color="orange"
                                placeholder="Category"
                                value={category}
                                options={ selectOptions }
                                onChange={handleChangeCategory}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                fluid
                                label='Tag'
                                value={tag}
                                readOnly
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                label="New tag name"
                                type="text"
                                onChange={handleChangeTag}
                                value={newTag}
                                placeholder="Tag"
                            />
                        </Form.Field>
                        <div className="modal-blackList__button">
                            <CustomButton
                                type='button'
                                color="orange"
                                content='update'
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
    )
};

const mapDispatchToProps = (dispatch) => ({
    moderateTag: dispatchRequestClient(dispatch, moderateTagsRequest),
});

export default connect(null, mapDispatchToProps)(ModalTagsUpdate);
