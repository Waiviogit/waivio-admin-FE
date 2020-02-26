import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalBotCreateContent = ({
    onClose,
    submitButtonContent,
    appName,
    onFormSubmit,
}) => {
    console.log('appName', appName);
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState(null);
    const [postingKey, setPostingKey] = useState(null);
    const [roles, setRoles] = useState(null);

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangePostingKey = e => {
        setPostingKey(e.target.value);
    };

    const handleSubmit = () => {
        const requestData = { app: appName, name: name, postingKey: postingKey, roles: roles };
        console.log(requestData);
        setIsLoading(true);
        onFormSubmit(requestData)
            .then(() => {
                setIsLoading(false);
                onClose();
            })
            .catch(() => setIsLoading(false));
    };

    const handleClose = () => onClose();

    return (
        <div className="modal-serviceBot__content-form">
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
                    <Form.Field>
                        <Form.Input
                            label="Posting Key"
                            type="text"
                            onChange={handleChangePostingKey}
                            value={postingKey}
                            placeholder="Posting Key"
                        />
                    </Form.Field>
                <Form.Field>
                    <Form.Input
                        label="Roles"
                        type='text'
                        value={roles}
                        onChange={(e, { value }) => setRoles( [value])}
                        placeholder="Roles"
                    />
                </Form.Field>


                <div className="modal-serviceBot__button">
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

ModalBotCreateContent.propTypes = {
    submitButtonContent: PropTypes.string,
    isUpdate: PropTypes.bool,
    upgradeToModerator: PropTypes.func,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
    isDelete: PropTypes.bool,
    isCreate: PropTypes.bool,
    onClose: PropTypes.func,
};

export default ModalBotCreateContent;
