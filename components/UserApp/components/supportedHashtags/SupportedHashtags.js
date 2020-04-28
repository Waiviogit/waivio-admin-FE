import React, { useState } from 'react';
import PropTypes from "prop-types";
import { isEmpty, map } from 'lodash';
import { Accordion, Table } from "semantic-ui-react";
import { CustomButton } from '../../../common/buttons';
import sortUsers from "../../../../helpers/sortUsers";
import ChangeSortBtn from "../../../common/ChangeSortBtn";

const SupportedHashtags = props => {
    const {
        appName,
        searchingContent,
        supported_hashtags,
        deleteSupportedHashTag,
        sortBy,
    } = props;
    const handleClick = (hashtag) => {
        const requestData = { data: { permlinks: hashtag }, app: appName };
        deleteSupportedHashTag(requestData)
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
                    {map(isEmpty(searchingContent) ?
                        sortUsers(supported_hashtags, sortBy, isUpFollowersSort, isUpWeightSort, isUpNameSort) :
                        sortUsers(searchingContent, sortBy, isUpFollowersSort, isUpWeightSort, isUpNameSort),
                        (hashtag, index) => {
                            const { default_name, alias, followers_count, wobjects_weight } = hashtag;
                        return (
                            <Table.Row key={`${default_name}${index}`}>
                                <Table.Cell>{default_name}</Table.Cell>
                                <Table.Cell>{alias}</Table.Cell>
                                <Table.Cell>{followers_count}</Table.Cell>
                                <Table.Cell>{wobjects_weight}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <CustomButton onClick={() => handleClick(default_name)} content='Delete' color='orange'/>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </Accordion>
    );
};

SupportedHashtags.propTypes = {
    supported_hashtags: PropTypes.array,
    deleteSupportedHashTag: PropTypes.func,
    appName: PropTypes.string,
};

export default SupportedHashtags;
