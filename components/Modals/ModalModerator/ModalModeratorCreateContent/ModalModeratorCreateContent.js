import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Table } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalModeratorCreateContent = ({
    onClose,
    submitButtonContent,
    appName,
    onFormSubmit,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [newModeratorName, setName] = useState(null);
    const [permlinks, setPermlinks] = useState([]);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClickAdd = () => {
        const newPermlinks = [inputValue, ...permlinks];
        setPermlinks(newPermlinks);
        setInputValue("");
    };
    const handleClickDelete = (deletePermlink) => {
        const newPermlinks = permlinks.filter((permlink) => permlink !== deletePermlink);
        setPermlinks(newPermlinks);
    };

    const handleSubmit = () => {
        const requestData = { app: appName, moderator: { name: newModeratorName, author_permlinks: permlinks } };
        setIsLoading(true);
        onFormSubmit(requestData)
            .then(() => {
                setIsLoading(false);
                onClose();
            })
            .catch(() => setIsLoading(false));
    };

    return (
        <div className="modal-moderator__content-form">
            <Form>
                <Form.Field>
                    <Form.Input
                        label="Name"
                        type="text"
                        onChange={handleChangeName}
                        value={newModeratorName}
                        placeholder="Name"
                    />
                </Form.Field>
                <Form.Field>
                    <div className='modal-moderator__content-form-label'>Permlinks</div>
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
    onFormSubmit: PropTypes.func,
    onClose: PropTypes.func,
    appName: PropTypes.string,
};

export default ModalModeratorCreateContent;
