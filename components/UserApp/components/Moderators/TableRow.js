import React from 'react';
import { Table } from 'semantic-ui-react';
import ModalModerator from '../../../Modals/ModalModerator';

const renderPermlink = (permlink) => <div>{permlink}</div>;

const TableRow = ({ moderator, updateModerator, upgradeToUser, appName }) => {
    const { name, author_permlinks } = moderator;

    return (
        <Table.Row>
            <Table.Cell >{name}</Table.Cell>
            <Table.Cell >
                {author_permlinks && author_permlinks.map(permlink => renderPermlink(permlink)) }
            </Table.Cell>
            <Table.Cell textAlign="right">
                <ModalModerator
                    appName={appName}
                    showButtonContent='Update'
                    submitButtonContent='Update'
                    title='Update To Moderator'
                    type={'update'}
                    onFormSubmit={updateModerator}
                    moderator={moderator}
                />
                <ModalModerator
                    appName={appName}
                    showButtonContent='Delete'
                    submitButtonContent='Delete'
                    title='Upgrade To User'
                    type={'delete'}
                    onFormSubmit={upgradeToUser}
                    moderator={moderator}
                />
            </Table.Cell>
        </Table.Row>
    );
};

export default TableRow;
