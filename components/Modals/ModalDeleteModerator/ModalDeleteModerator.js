import "./ModalDeleteModerator.scss";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Modal, Image, Form } from "semantic-ui-react";

const ModalDeleteModerator = ({ upgradeToUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [app, setApp] = useState(null);
    const [moderator, setModerator] = useState({
        name: "",
        author_permlinks: []
    });
    const handleShow = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleSubmit = (e) => {
        console.log(moderator);
        console.log('handleSubmit');
        e.preventDefault();
        upgradeToUser({app: app, moderator: moderator})
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };
    const stopPropagation = e => e.stopPropagation();
    return (
        <>
            <Button onClick={handleShow}>Delete Moderator</Button>
            <Modal size="tiny" open={isOpen} onClose={handleClose} onClick={stopPropagation}>
                <Modal.Header>
                    <div className="modalDeleteModerator__title">
                        <div>Delete moderator</div>
                        <div className="modalDeleteModerator-img" onClick={handleClose}>
                            <Image src="/static/icons/clear.svg" />
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Content>
                    <Form className="modalDeleteModerator__form">
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
                    <Button type="submit" positive icon="checkmark" content="Delete" onClick={handleSubmit}/>
                </Modal.Actions>
            </Modal>
        </>
    );
};

ModalDeleteModerator.propTypes = {
    upgradeToUser: PropTypes.func,
};

export default ModalDeleteModerator;
