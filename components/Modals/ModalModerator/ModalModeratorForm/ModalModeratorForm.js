import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Dropdown, Form } from 'semantic-ui-react';
import { CustomButton } from '../../../common/buttons';

const ModalModeratorForm = ({ 
    submitButtonContent, 
    isUpdate, 
    isDelete, 
    isCreate, 
    upgradeToModerator, 
    updateModerator, 
    upgradeToUser,
    onClose,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [app, setApp] = useState(null);
    const handleChange = (e, { value }) => setOperation(value);
    const [moderator, setModerator] = useState({
        name: "",
        author_permlinks: [],
    });
    const [operation, setOperation] = useState(null);
    const options = [
        { key: 'delete', text: 'Delete', value: 'Delete' },
        { key: 'add', text: 'Add', value: 'Add' },
    ];
    const getActionForModerator = () => {
        let action = null;
        if (isCreate) {
            action = upgradeToModerator({ app, moderator });
        } else if (isUpdate) {
            action = updateModerator({ type: operation, data: { app, moderator } });
        } else if (isDelete) {
            action = upgradeToUser({ app, moderator });
        }
        return action;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const action = getActionForModerator();
        action
            .then(() => {                
                setIsLoading(false);
                onClose();
            })
            .catch(() => setIsLoading(false));
    };
    return (
        <div className="modal-moderator__content-form">
            <Form >
                <Form.Field>
                    <Form.Input
                        label="App"
                        type="name"
                        value={app}
                        onChange={(e, { value }) => setApp(value)}
                        placeholder="App"
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        label="Name"
                        type="name"
                        value={moderator.name}
                        onChange={(e, { value }) => setModerator({ ...moderator, name: value })}
                        placeholder="Name"
                    />
                </Form.Field>
                {isUpdate && (
                    <Form.Field>
                        <Dropdown placeholder='Choose desired operation' fluid selection options={options} onChange={handleChange} />
                    </Form.Field>
                )}
                <Form.Field>
                    <Form.Input
                        label="Permlinks"
                        type='text'
                        value={moderator.author_permlinks}
                        onChange={(e, { value }) => setModerator({ ...moderator, author_permlinks: [value] })}
                        placeholder="Permlinks"
                    />
                </Form.Field>
                <div className='modal-moderator__button'>
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
    );
};

ModalModeratorForm.propTypes = {
    submitButtonContent: PropTypes.string,
    isUpdate: PropTypes.bool,
    upgradeToModerator: PropTypes.func,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
    isDelete: PropTypes.bool,
    isCreate: PropTypes.bool,
    onClose: PropTypes.func,
};

export default ModalModeratorForm;
