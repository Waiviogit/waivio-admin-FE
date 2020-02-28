import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Table } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalBotCreateContent = ({
    onClose,
    submitButtonContent,
    appName,
    onFormSubmit,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState(null);
    const [postingKey, setPostingKey] = useState(null);
    const [botRoles, setBotRoles] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangePostingKey = (e) => {
        setPostingKey(e.target.value);
    };

    const handleClickAdd = () => {
        const newBotRoles = [inputValue, ...botRoles];
        setBotRoles(newBotRoles);
        setInputValue("");
    };
    const handleClickDelete = (role) => {
        const newBotRoles = botRoles.filter((botRole) => botRole !== role);
        setBotRoles(newBotRoles);
    };

    const handleSubmit = () => {
        const requestData = { app: appName, name, postingKey, roles: botRoles };        
        setIsLoading(true);
        onFormSubmit(requestData)
            .then(() => {
                setIsLoading(false);
                onClose();
            })
            .catch(() => setIsLoading(false));
    };

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
                    <div className='modal-moderator__content-form-label'>Roles</div>
                    <div className="modal-serviceBot__content-form-input">
                        <Input
                            placeholder="Role"
                            onChange={handleChange}
                            value={inputValue}
                        />
                        <CustomButton content='Add' color='orange' onClick={handleClickAdd} loading={isLoading}/>
                    </div>
                    {!!botRoles.length && (
                        <Table striped singleLine unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Roles</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {botRoles.map((role) => (
                                    <Table.Row key={role}>
                                        <Table.Cell>
                                            <div>{role}</div>
                                        </Table.Cell>
                                        <Table.Cell textAlign="right">
                                            <CustomButton
                                                loading={isLoading}
                                                color='orange'
                                                content='Delete'
                                                onClick={() => { handleClickDelete(role); }}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    )}
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
    onFormSubmit: PropTypes.func,
    appName: PropTypes.string,
    onClose: PropTypes.func,
};

export default ModalBotCreateContent;
