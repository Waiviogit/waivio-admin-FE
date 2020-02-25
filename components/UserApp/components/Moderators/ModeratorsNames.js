import React from 'react';
import {Button, Icon, Table} from "semantic-ui-react";

export const ModeratorsNames = ({ name }) => {
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
                                <Button>Update</Button>
                                <Button color="red" icon="delete">
                                    Delete
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
};

export default ModeratorsNames;