import React, { useState } from "react";
import { Table, Input } from "semantic-ui-react";
import PropTypes from "prop-types";
import { CustomButton } from "../../../common/buttons";

const ModalModeratorUpdateContent = ({
    appName,
    onFormSubmit,
    moderator,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, author_permlinks } = moderator;
    const [permlinks, setPermlinks] = useState(author_permlinks || []);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClickAdd = () => {
        const newPermlinks = [inputValue, ...permlinks];
        setPermlinks(newPermlinks);
        setInputValue("");
        const requestData = {
            type: "Add",
            data: { app: appName, moderator: { name: name.name, author_permlinks: newPermlinks } },
        };
        sendRequest(requestData);
    };
    const handleClickDelete = (deletePermlink) => {
        const newPermlinks = permlinks.filter((permlink) => permlink !== deletePermlink);
        setPermlinks(newPermlinks);
        const requestData = {
            type: "Delete",
            data: { app: appName, moderator: { name: name.name, author_permlinks: [deletePermlink] } },
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
                            <Table.Row key={`${index}${permlink}`}>
                                <Table.Cell >
                                    <div>{permlink}</div>
                                </Table.Cell>
                                <Table.Cell textAlign="right">
                                    <CustomButton color='orange' content='Delete' loading={isLoading} onClick={() => { handleClickDelete(permlink); }}/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </div>
    );
};

ModalModeratorUpdateContent.propTypes = {
    moderator: PropTypes.object,
    onFormSubmit: PropTypes.func,
    appName: PropTypes.string,
};

export default ModalModeratorUpdateContent;
