import "../ModalServiceBot.scss";
import React, { useState } from "react";
import { Button, Table, Input } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalBotUpdateContent = ({
    onClose,
    appName,
    onFormSubmit,
    bot,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, postingKey, roles } = bot;
    const [botRoles, setBotRoles] = useState(roles || []);
    const [inputValue, setInputValue] = useState(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClickAdd = () => {
        setBotRoles([inputValue, ...botRoles]);
        setInputValue("");
        const requestData = {
            type: "Add",
            data: { app: appName, name, postingKey, roles: botRoles },
        };

        sendRequest(requestData);
    };
    const handleClickDelete = (delIndex) => {
        const newBotRoles = botRoles.filter((botRole, index) => index !== delIndex);
        setBotRoles(newBotRoles);
        const requestData = {
            type: "Delete",
            data: { app: appName, name, postingKey, roles: newBotRoles },
        };
        sendRequest(requestData);
    };

    const sendRequest = (requestData) => {
        setIsLoading(true);
        onFormSubmit(requestData)
            .then(() => {
                setIsLoading(false);
                // onClose();
            })
            .catch(() => setIsLoading(false));
    };

    return (
        <div className="modal-serviceBot__content-form">
            <div className="modal-serviceBot__content-form-input">
                <Input
                    placeholder="Role"
                    onChange={handleChange}
                    value={inputValue}
                />
                <Button onClick={handleClickAdd} loading={isLoading}>
                    Add
                </Button>
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
                        {botRoles.map((role, index) => (
                            <Table.Row>
                                <Table.Cell key={index}>
                                    <div>{role}</div>
                                </Table.Cell>
                                <Table.Cell textAlign="right">
                                    <Button
                                        loading={isLoading}
                                        onClick={() => {
                                            handleClickDelete(index);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </div>
    );
};

export default ModalBotUpdateContent;
