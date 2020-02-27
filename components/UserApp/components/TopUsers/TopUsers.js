import React from 'react';
import { Table } from "semantic-ui-react";

export const TopUsers = ({ top_users }) => {
    return (
        <Table fixed singleLine striped unstackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Weight</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {top_users.map((user) => {
                    const { name, weight } = user;
                    return (
                        <Table.Row>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{weight}</Table.Cell>
                        </Table.Row>
                    );
                },
                )}
            </Table.Body>
        </Table>
    );
};

export default TopUsers;