import "../ModalServiceBot.scss";
import React, { useState } from "react";
import { Table, Input } from "semantic-ui-react";
import PropTypes from "prop-types";
import { CustomButton } from "../../../common/buttons";

const ModalBotUpdateContent = ({
    appName,
    onFormSubmit,
    bot,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, postingKey, roles } = bot;
    const [botRoles, setBotRoles] = useState(roles || []);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClickAdd = () => {
        if (inputValue) {
            const newBotRoles = [inputValue, ...botRoles];
            setBotRoles(newBotRoles);
            setInputValue("");
            const requestData = {
                type: "Add",
                data: { app: appName, name, postingKey, roles: newBotRoles },
            };

            sendRequest(requestData);
        }
    };
    const handleClickDelete = (role) => {
        const newBotRoles = botRoles.filter((botRole) => botRole !== role);
        setBotRoles(newBotRoles);
        const requestData = {
            type: "Delete",
            data: { app: appName, name, postingKey, roles: [role] },
        };
        sendRequest(requestData);
    };

    const sendRequest = (requestData) => {
        setIsLoading(true);
        onFormSubmit(requestData)
            .then(() => {
                setIsLoading(false);
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
                                    <CustomButton loading={isLoading} color='orange' content='Delete' onClick={() => { handleClickDelete(role); }}/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </div>
    );
};

ModalBotUpdateContent.propTypes = {
    onFormSubmit: PropTypes.func,
    appName: PropTypes.string,
    bot: PropTypes.object,
};

export default ModalBotUpdateContent;
