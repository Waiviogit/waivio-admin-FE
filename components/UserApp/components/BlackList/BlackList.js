import React, { useState } from 'react';
import { Accordion, Button, Table } from "semantic-ui-react";

const BlackList = ({ black_list_users, deleteBlackListUsers, appName }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (user) => {
        setIsLoading(true);
        const requestData = { data: { names: user }, app: appName };
        deleteBlackListUsers(requestData)
            .then(() => {
                setIsLoading(false);
                // onClose();
            })
            .catch(() => setIsLoading(false));
    };

    return (
        <Accordion fluid styled>
            <Table fixed singleLine unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Users</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {black_list_users.map((user) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{user}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <Button onClick={() => handleClick(user)} color="red" icon="delete">
                                        Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </Accordion>
    );
};

export default BlackList;
