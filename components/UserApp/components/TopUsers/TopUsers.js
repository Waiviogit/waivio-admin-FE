import React from 'react';
import PropTypes from "prop-types";
import TopUsersList from "./TopUsersList";

export const TopUsers = ({ top_users }) => {
    return (
        <TopUsersList top_users={top_users}/>
    );
};

TopUsers.propTypes = {
    top_users: PropTypes.array,
};

export default TopUsers;
