import React from "react";
import TopUsers from "../../components/TopUsers";
import ContentData from "../contentDataInterface";
import { searchTopUsers, setInputValue } from "../../../../redux/actions/searchActions";
import Search from "../../components/Search";
import { connect } from 'react-redux';

const topUsersTitle = ({ top_users }) => {
    return top_users ?
        <>
            <span>Top Users</span>
            <div className='total-number-of-block'>
                {top_users.length}
            </div>
        </> :
        <span>Top Users</span>;
};

const topUsersContent = ({ top_users }, index) => (
    <div key={index} className="user-app-content__topUsers">
        <TopUsers top_users={ top_users } />
    </div>
);

const topUsersSearch = ({ top_users }) => {
    const mapSateToProps = state => ({
        inputValue: state.ui.search.inputValue
    });
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchTopUsers(payload)),
        setInputValue: (payload) => dispatch(setInputValue(payload))
    });
    const ConnectedTopUsersSearch = connect(mapSateToProps, mapDispatchToProps)(Search);
    return (
        <ConnectedTopUsersSearch
            list={top_users}
        />
    )
};

export default new ContentData(
    topUsersTitle,
    3,
    topUsersContent,
    null,
    topUsersSearch,
);
