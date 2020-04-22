import React from 'react';
import PropTypes from "prop-types";
import TopUsersList from "./TopUsersList";
import { isEmpty } from 'lodash';

export const TopUsers = ({ top_users, searchingContent, sortBy }) => {
    return (
        <TopUsersList sortBy={sortBy} top_users={isEmpty(searchingContent) ? top_users : searchingContent}/>
    );
};

TopUsers.propTypes = {
    top_users: PropTypes.array,
};

export default TopUsers;
