import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Accordion, Table } from "semantic-ui-react";
import { map, isEmpty } from 'lodash';
import sort from "../../../../helpers/sortUsers";
import ChangeSortBtn from "../../../common/ChangeSortBtn";
import { CustomButton } from '../../../common/buttons';

const BlackList = props => {
    const {
        appName,
        searchingContent,
        black_list_users,
        deleteBlackListUsers,
        sortBy,
    } = props;

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (user) => {
        setIsLoading(true);
        const requestData = { data: { names: [user] }, app: appName };
        deleteBlackListUsers(requestData)
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };

    const [isUpNameSort, setUpNameSort] = useState(true);
    const changeNameSortHandler = () => setUpNameSort(!isUpNameSort);

    const [isUpFollowersSort, setUpFollowersSort] = useState(true);
    const changeFollowersSortHandler = () => setUpFollowersSort(!isUpFollowersSort);

    const [isUpWeightSort, setUpWeightSort] = useState(true);
    const changeWeightSortHandler = () => setUpWeightSort(!isUpWeightSort);

    return (
        <Accordion fluid styled>
            <Table fixed singleLine unstackable className="user-app-content__blackList-content">
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
                    {map(isEmpty(searchingContent) ?
                        sort(black_list_users, sortBy, isUpFollowersSort, isUpWeightSort, isUpNameSort) :
                        sort(searchingContent, sortBy, isUpFollowersSort, isUpWeightSort, isUpNameSort),
                        (user, index) => {
                        const {name, followers_count, wobjects_weight} = user;
                        return (
                            <Table.Row key={`${user}${index}`}>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell>{followers_count}</Table.Cell>
                                <Table.Cell>{wobjects_weight}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <CustomButton onClick={() => handleClick(name)} content='Delete' color='orange'/>
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
