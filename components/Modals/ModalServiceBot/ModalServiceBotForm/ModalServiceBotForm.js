import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Dropdown, Form } from 'semantic-ui-react';
import { CustomButton } from '../../../common/buttons';

const ModalServiceBotForm = ({ onClose, isUpdate, isCreate, isDelete, submitButtonContent }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [app, setApp] = useState(null);
    const handleChange = (e, { value }) => setOperation(value);
    const [serviceBot, setServiceBot] = useState({
        name: "",
        postingKey: "",
        roles: [],
    });
    const [operation, setOperation] = useState(null);
    const options = [
        { key: 'delete', text: 'Delete', value: 'Delete' },
        { key: 'add', text: 'Add', value: 'Add' },
    ];
    const getActionForServiceBot = () => {
        let action = null;
        if (isCreate) {
            action = upgradeToModerator({ app, serviceBot });
        } else if (isUpdate) {
            action = updateModerator({ type: operation, data: { app, serviceBot } });
        } else if (isDelete) {
            action = upgradeToUser({ app, serviceBot });
        }
        return action;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const action = getActionForServiceBot();
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
                        value={serviceBot.name}
                        onChange={(e, { value }) => setServiceBot({ ...serviceBot, name: value })}
                        placeholder="Name"
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        label="Posting Key"
                        type="name"
                        value={serviceBot.postingKey}
                        onChange={(e, { value }) => setServiceBot({ ...serviceBot, postingKey: value })}
                        placeholder="Name"
                    />
                </Form.Field>
                {isUpdate && (
                    <Form.Field>
                        <Dropdown placeholder='Choose desired operation' fluid selection options={options} onChange={handleChange} />
                    </Form.Field>
                )}
                {!isDelete && (
                    <Form.Field>
                        <Form.Input
                            label="Roles"
                            type='text'
                            value={serviceBot.roles}
                            onChange={(e, { value }) => setServiceBot({ ...serviceBot, roles: [value] })}
                            placeholder="Roles"
                        />
                    </Form.Field>
                )}
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

ModalServiceBotForm.propTypes = {
    submitButtonContent: PropTypes.string,
    isUpdate: PropTypes.bool,
    upgradeToModerator: PropTypes.func,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
    isDelete: PropTypes.bool,
    isCreate: PropTypes.bool,
    onClose: PropTypes.func,
};

export default ModalServiceBotForm;