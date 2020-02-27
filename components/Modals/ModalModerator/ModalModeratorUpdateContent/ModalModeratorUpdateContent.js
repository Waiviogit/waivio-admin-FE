import React, { useState } from "react";
import { Button, Table, Input } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalModeratorUpdateContent = ({
    onClose,
    appName,
    onFormSubmit,
    moderator,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, author_permlinks } = moderator;
    const [permlinks, setPermlinks] = useState(author_permlinks || []);
    const [inputValue, setInputValue] = useState(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClickAdd = () => {
        setPermlinks([inputValue, ...permlinks]);
        setInputValue("");
        const requestData = {
            type: "Add",
            data: { app: appName, name, author_permlinks: permlinks },
        };
        sendRequest(requestData);
    };
    const handleClickDelete = (delIndex) => {
        const newPermlinks = permlinks.filter((permlink, index) => index !== delIndex);
        setPermlinks(newPermlinks);
        const requestData = {
            type: "Delete",
            data: { app: appName, name, author_permlinks: permlinks},
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
        <div className="modal-moderator__content-form">
            <div className="modal-moderator__content-form-input">
                <Input
                    placeholder="Permlink"
                    onChange={handleChange}
                    value={inputValue}
                />
                <CustomButton color='orange' content='Add' onClick={handleClickAdd} loading={isLoading}/>
            </div>
            {!!permlinks.length && (
                <Table striped singleLine unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Permlinks</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {permlinks.map((permlink, index) => (
                            <Table.Row>
                                <Table.Cell key={index}>
                                    <div>{permlink}</div>
                                </Table.Cell>
                                <Table.Cell textAlign="right">
                                    <CustomButton color='orange' content='Delete' loading={isLoading} onClick={() => {handleClickDelete(index)}}/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </div>
    );
};

export default ModalModeratorUpdateContent;
