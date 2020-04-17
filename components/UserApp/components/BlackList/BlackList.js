import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Accordion, Table } from "semantic-ui-react";
import { map, isEmpty } from 'lodash';
import { CustomButton } from '../../../common/buttons';

const BlackList = ({ black_list_users, deleteBlackListUsers, appName, searchingContent }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (user) => {
        setIsLoading(true);
        const requestData = { data: { names: user }, app: appName };
        deleteBlackListUsers(requestData)
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };

    return (
        <Accordion fluid styled>
            <Table fixed singleLine unstackable className="user-app-content__blackList-content">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Users</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {map(isEmpty(searchingContent) ? black_list_users : searchingContent,
                        (user, index) => {
                        return (
                            <Table.Row key={`${user}${index}`}>
                                <Table.Cell>{user}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <CustomButton onClick={() => handleClick(user)} content='Delete' color='orange'/>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </Accordion>
    );
};

BlackList.propTypes = {
    black_list_users: PropTypes.array,
    deleteBlackListUsers: PropTypes.func,
    appName: PropTypes.string,
};

export default BlackList;
