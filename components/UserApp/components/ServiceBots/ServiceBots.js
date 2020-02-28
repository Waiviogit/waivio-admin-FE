import React from 'react';
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import TableRow from './TableRow';

const ServiceBots = ({ service_bots, updateServiceBot, deleteServiceBot, appName }) => {
    return (
        <Table
            fixed
            striped
            singleLine
            unstackable
            className="user-app-content__serviceBots-content"
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Posting Key</Table.HeaderCell>
                    <Table.HeaderCell>Roles</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {service_bots.map((bot) => (
                    <TableRow
                        key={bot.name}
                        bot={bot}
                        appName={appName}
                        updateServiceBot={updateServiceBot}
                        deleteServiceBot={deleteServiceBot}
                    />
                ))}
            </Table.Body>
        </Table>
    );
};

ServiceBots.propTypes = {
    service_bots: PropTypes.array,
    updateServiceBot: PropTypes.func,
    deleteServiceBot: PropTypes.func,
    appName: PropTypes.string,
};

export default ServiceBots;
