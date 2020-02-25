import React from 'react';
import { Table } from 'semantic-ui-react';
import ModalServiceBot from '../../../Modals/ModalServiceBot';

const renderRole = (role) => <div>{role}</div>;

const TableRow = ({ bot, updateServiceBot, deleteServiceBot, appName }) => {
    const { name, postingKey, roles } = bot;
    return (
        <Table.Row>
            <Table.Cell >{name}</Table.Cell>
            <Table.Cell >{postingKey}</Table.Cell>
            <Table.Cell >
                { roles.map((role) => renderRole(role)) }
            </Table.Cell>
            <Table.Cell textAlign="right">
                <ModalServiceBot
                    appName={appName}
                    showButtonContent='Update'
                    submitButtonContent='Update'
                    title='Update Service Bot'
                    type={'update'}
                    onFormSubmit={updateServiceBot}
                    bot={bot}
                />
                <ModalServiceBot
                    appName={appName}
                    showButtonContent='Delete'
                    submitButtonContent='Delete'
                    title='Delete Service Bot'
                    type={'delete'}
                    onFormSubmit={deleteServiceBot}
                    bot={bot}
                />
            </Table.Cell>
        </Table.Row>
    );
};

export default TableRow;
