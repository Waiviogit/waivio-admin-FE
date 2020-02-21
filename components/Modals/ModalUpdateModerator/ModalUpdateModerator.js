import "./ModalUpdateModerator.scss";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Modal, Image, Form, Dropdown } from "semantic-ui-react";

const ModalUpdateModerator = ({ updateModerator }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [app, setApp] = useState(null);
    const [operation, setOperation] = useState(null);
    const [moderator, setModerator] = useState({
        name: "",
        author_permlinks: []
    });
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleChange = (e, { value }) => setOperation(value);
    const handleSubmit = () => {
        updateModerator({type: operation, data: {app: app, moderator: moderator}})
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };
    const options = [
        { key: 'delete', text: 'Delete', value: 'Delete' },
        { key: 'add', text: 'Add', value: 'Add' }
    ];
    return (
        <>
            <Button onClick={handleShow}>Update Moderator</Button>
            <Modal size="tiny" open={isOpen} onClose={handleClose}>
                <Modal.Header>
                    <div className="modalCreateModerator__title">
                        <div>Update moderator</div>
                        <div className="modalCreateModerator-img" onClick={handleClose}>
                            <Image src="/static/icons/clear.svg" />
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Content>
                    <Form className="modalCreateModerator__form">
                        <Form.Field>
                            <Form.Input
                                label="App"
                                type="name"
                                value={app}
                                onChange={(e, { value }) =>
                                    setApp( value)
                                }
                                placeholder="App"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                label="Name"
                                type="name"
                                value={moderator.name}
                                onChange={(e, { value }) =>
                                    setModerator({ ...moderator, name: value })
                                }
                                placeholder="Name"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Dropdown placeholder='Choose desired operation' fluid selection options={options} onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                label="Permlinks"
                                type='text'
                                value={moderator.author_permlinks}
                                onChange={(e, { value }) =>
                                    setModerator({ ...moderator, author_permlinks: [value] })
                                }
                                placeholder="Permlinks"
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button type="submit" positive icon="checkmark" content="Update" onClick={handleSubmit}/>
                </Modal.Actions>
            </Modal>
        </>
    );
};

ModalUpdateModerator.propTypes = {
    updateModerator: PropTypes.func,
};

export default ModalUpdateModerator;
