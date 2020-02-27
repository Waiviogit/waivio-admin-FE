import React from 'react';
import { Table } from 'semantic-ui-react';
import TableRow from "./TableRow";

const Moderators = ({ moderators, appName, updateModerator, upgradeToUser }) => {
    return (
        <Table
            fixed
            striped
            singleLine
            unstackable
            className="user-app-content__moderators-content"
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Permlinks</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {moderators.map(moderator => (
                    <TableRow
                        moderator={moderator}
                        appName={appName}
                        updateModerator={updateModerator}
                        upgradeToUser={upgradeToUser}
                    />
                ))}
            </Table.Body>
        </Table>
    );
};

export default Moderators;
