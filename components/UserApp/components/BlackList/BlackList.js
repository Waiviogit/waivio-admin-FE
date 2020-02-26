import React, { useState } from 'react';
import { Accordion, Button, Table } from "semantic-ui-react";

const BlackList = ({ black_list_users }) => {
    const [blackListUsers, setBlackListUsers] = useState([]);

    const handleClick = (deleteIndex) => {
        const newBlackListUsers = black_list_users.filter((user, index) => index !== deleteIndex);
        setBlackListUsers(newBlackListUsers);
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
                    {black_list_users.map((user, index) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{user}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <Button onClick={() => handleClick(index)} color="red" icon="delete">
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
