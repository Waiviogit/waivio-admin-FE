import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalModeratorCreateContent = ({
    onClose,
    submitButtonContent,
    appName,
    onFormSubmit,
}) => {
    console.log('appName', appName);
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState(null);
    const [permlinks, setPermlinks] = useState(null);
    const [roles, setRoles] = useState(null);

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        const requestData = { app: appName, moderator: {name: name, author_permlinks: permlinks} };
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
        <div className="modal-moderator__content-form">
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
                        label="Permlinks"
                        type='text'
                        value={roles}
                        onChange={(e, { value }) => setPermlinks( [value])}
                        placeholder="Permlinks"
                    />
                </Form.Field>


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

ModalModeratorCreateContent.propTypes = {
    submitButtonContent: PropTypes.string,
    isUpdate: PropTypes.bool,
    upgradeToModerator: PropTypes.func,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
    isDelete: PropTypes.bool,
    isCreate: PropTypes.bool,
    onClose: PropTypes.func,
};

export default ModalModeratorCreateContent;
