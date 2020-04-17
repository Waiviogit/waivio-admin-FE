import React from 'react';
import PropTypes from "prop-types";
import { Table } from 'semantic-ui-react';
import TableRow from "./TableRow";
import { isEmpty, map } from "lodash";

const Moderators = ({ moderators, appName, updateModerator, upgradeToUser, searchingContent }) => {
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
                {map(isEmpty(searchingContent) ? moderators : searchingContent,
                    (moderator, index) => (
                    <TableRow
                        key={`${index}${moderator.name}`}
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

Moderators.propTypes = {
    moderators: PropTypes.array,
    appName: PropTypes.string,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
};

export default Moderators;
