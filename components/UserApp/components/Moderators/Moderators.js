import React, { useState } from 'react';
import { Accordion, Icon, Button, Segment, Table } from 'semantic-ui-react';
import ModeratorsPermlinks from "./ModeratorsPermlinks";
import ModeratorsNames from "./ModeratorsNames";
import TableRow from "../Moderators/TableRow";

const Moderators = ({ moderators, appName, updateModerator, upgradeToUser }) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
            return;
        }
        setActiveIndex(index);
    };

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