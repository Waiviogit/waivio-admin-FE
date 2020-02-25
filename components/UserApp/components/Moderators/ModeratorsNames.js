import React from 'react';
import {Button, Icon, Table} from "semantic-ui-react";
import ModalModerator from '../../../Modals/ModalModerator';

export const ModeratorsNames = ({ name, updateModerator, upgradeToUser }) => {
    return (
        <>
            <Table fixed singleLine unstackable className='user-app-content__moderators-names'>
                <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Icon name='dropdown' />
                                {name}
                            </Table.Cell>
                            <Table.Cell textAlign="right">
                                <ModalModerator
                                    showButtonContent='Update Moderator'
                                    submitButtonContent='Update'
                                    title='Update Moderator'
                                    isUpdate
                                    updateModerator={updateModerator}
                                />
                                <ModalModerator
                                    showButtonContent='Delete Moderator'
                                    submitButtonContent='Delete'
                                    title='Delete Moderator'
                                    isDelete
                                    upgradeToUser={upgradeToUser}
                                />
                            </Table.Cell>
                        </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
};

export default ModeratorsNames;