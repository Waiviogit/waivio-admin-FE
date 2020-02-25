import React from 'react';
import {Button, Table} from "semantic-ui-react";

export const TopUsersWeight = ({ weight }) => {
    return (
        <>
            <Table fixed singleLine unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>User's Weight</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                        <Table.Row>
                            <Table.Cell>{weight}</Table.Cell>
                        </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
};

export default TopUsersWeight;