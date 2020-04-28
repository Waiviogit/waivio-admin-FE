import React from 'react';
import PropTypes from "prop-types";
import { Table } from 'semantic-ui-react';
import TableRow from "./TableRow";
import { isEmpty, map, find } from "lodash";

const Moderators = props => {
    const {
        appName,
        moderators,
        upgradeToUser,
        updateModerator,
        searchingContent,
    } = props;

    const searchingModerator = !isEmpty(searchingContent) ?
        [find(moderators, moderator => moderator.name.name === searchingContent[0].name)]
        : [];

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
                    <Table.HeaderCell>Alias</Table.HeaderCell>
                    <Table.HeaderCell>Followers</Table.HeaderCell>
                    <Table.HeaderCell>Weight</Table.HeaderCell>
                    <Table.HeaderCell/>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {map(isEmpty(searchingModerator) ? moderators : searchingModerator,
                    (moderator, index) => (
                    <TableRow
                        key={`${index}${moderator.name.name}`}
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
