import React from 'react';
import PropTypes from "prop-types";
import { Table } from 'semantic-ui-react';
import ModalModerator from '../../../Modals/ModalModerator';

const renderPermlink = (permlink) => <div key={permlink}>{permlink}</div>;

const TableRow = ({ moderator, updateModerator, upgradeToUser, appName }) => {
    const { name, author_permlinks } = moderator;

    return (
        <Table.Row>
            <Table.Cell >{ name.name }</Table.Cell>
            <Table.Cell >{ name.alias }</Table.Cell>
            <Table.Cell >{ name.followers_count }</Table.Cell>
            <Table.Cell >{ name.wobjects_weight }</Table.Cell>
            <Table.Cell textAlign="right">
                {/*<ModalModerator*/}
                {/*    appName={appName}*/}
                {/*    showButtonContent='Update'*/}
                {/*    submitButtonContent='Update'*/}
                {/*    title='Update To Moderator'*/}
                {/*    type="update"*/}
                {/*    onFormSubmit={updateModerator}*/}
                {/*    moderator={moderator}*/}
                {/*/>*/}
                {/*<ModalModerator*/}
                {/*    appName={appName}*/}
                {/*    showButtonContent='Delete'*/}
                {/*    submitButtonContent='Delete'*/}
                {/*    title='Delete from Moderators'*/}
                {/*    type="delete"*/}
                {/*    onFormSubmit={upgradeToUser}*/}
                {/*    moderator={moderator}*/}
                {/*/>*/}
            </Table.Cell>
        </Table.Row>
    );
};

TableRow.propTypes = {
    moderator: PropTypes.object,
    updateModerator: PropTypes.func,
    upgradeToUser: PropTypes.func,
    appName: PropTypes.string,
};

export default TableRow;
