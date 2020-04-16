import React from "react";
import TopUsers from "../../components/TopUsers";
import ContentData from "../contentDataInterface";
import { searchTopUsers } from "../../../../redux/actions/searchActions";
import Search from "../../components/Search";
import { connect } from 'react-redux';

const topUsersContent = ({ top_users }, index) => (
    <div key={index} className="user-app-content__topUsers">
        <TopUsers top_users={ top_users } />
    </div>
);

const topUsersTotal = ({ top_users }) => (
    <div className='total-number-of-block'>
        { top_users.length }
    </div>
);

const topUsersSearch = ({ top_users }) => {
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchTopUsers(payload)),
    });
    const ConnectedTopUsersSearch = connect(null, mapDispatchToProps)(Search);
    return (
        <ConnectedTopUsersSearch
            list={top_users}
        />
    )
};

export default new ContentData(
    'Top Users', 3,
    topUsersContent,
    null,
    topUsersTotal,
    topUsersSearch,
);
