import React from 'react';
import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";

const TopUsersList = ({ top_users }) => {
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
                        <Table.Row key={weight}>
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

TopUsersList.propTypes = {
    top_users: PropTypes.array,
};

export default TopUsersList;
