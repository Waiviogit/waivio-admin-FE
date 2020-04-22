import React, { useState } from 'react';
import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";
import {map} from 'lodash'
import sortUsers from "../../../../helpers/sortUsers";
import ChangeSortBtn from "../../../common/ChangeSortBtn";

const TopUsersList = ({ top_users, sortBy }) => {
    const [isUpNameSort, setUpNameSort] = useState(true);
    const changeNameSortHandler = () => setUpNameSort(!isUpNameSort);

    const [isUpFollowersSort, setUpFollowersSort] = useState(true);
    const changeFollowersSortHandler = () => setUpFollowersSort(!isUpFollowersSort);

    const [isUpWeightSort, setUpWeightSort] = useState(true);
    const changeWeightSortHandler = () => setUpWeightSort(!isUpWeightSort);

    return (
        <Table fixed singleLine striped unstackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Name
                        { sortBy === 'alphabet' &&
                        <ChangeSortBtn
                            handler={ changeNameSortHandler }
                            isReverse={!isUpNameSort}
                        /> }
                    </Table.HeaderCell>
                    <Table.HeaderCell>Alias</Table.HeaderCell>
                    <Table.HeaderCell>
                        Followers
                        { sortBy === 'followers' &&
                        <ChangeSortBtn
                            handler={ changeFollowersSortHandler }
                            isReverse={!isUpFollowersSort}
                        /> }
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Weight
                        { sortBy === 'weight' &&
                        <ChangeSortBtn
                            handler={ changeWeightSortHandler }
                            isReverse={!isUpWeightSort}
                        /> }
                    </Table.HeaderCell>
                    <Table.HeaderCell/>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {map(sortUsers(top_users, sortBy, isUpFollowersSort, isUpWeightSort, isUpNameSort),
                    user => {
                    const { name, followers_count, alias, wobjects_weight } = user;
                    return (
                        <Table.Row key={wobjects_weight}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{alias}</Table.Cell>
                            <Table.Cell>{followers_count}</Table.Cell>
                            <Table.Cell>{wobjects_weight}</Table.Cell>
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
