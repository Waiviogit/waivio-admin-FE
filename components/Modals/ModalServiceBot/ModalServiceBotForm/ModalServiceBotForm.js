import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown, Form } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalServiceBotForm = ({
    onClose,
    isUpdate,
    isCreate,
    isDelete,
    submitButtonContent,
    appName,
    onFormSubmit,
    type,
    bot,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, postingKey, roles } = bot;
    const handleChange = (e, { value }) => setOperation(value);
    const [botRoles, setBotRoles] = useState(roles);
    const [operation, setOperation] = useState(null);
    const options = [
        { key: "delete", text: "Delete", value: "Delete" },
        { key: "add", text: "Add", value: "Add" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = type === "update"
            ? { type: operation, data: { app: appName, name, postingKey, roles: botRoles} }
            : { app: appName, name, postingKey, roles: botRoles };
        setIsLoading(true);
        onFormSubmit(requestData)
            .then(() => {
                setIsLoading(false);
                onClose();
            })
            .catch(() => setIsLoading(false));
    };
    const addRole =(role) => {

    };
    const deleteRole = (role) => {

    };
    return (
        <div className="modal-moderator__content-form">
            <Form>
                {type === 'update' && (
                    <Form.Field>
                        <Dropdown
                            placeholder="Choose desired operation"
                            fluid
                            selection
                            options={options}
                            onChange={handleChange}
                        />
                    </Form.Field>
                )}
                {type !== 'delete' && (
                    <Form.Field>
                        <Form.Input
                            label="Roles"
                            type="text"
                            value=''
                            // onChange={(e, { value }) => setServiceBot({ ...serviceBot, roles: [value] })}
                            placeholder="Roles"
                        />
                    </Form.Field>
                )}
                <div className="modal-moderator__button">
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
