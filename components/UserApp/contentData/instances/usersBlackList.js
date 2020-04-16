import React from "react";
import ContentData from "../contentDataInterface";
import BlackList from "../../components/BlackList";
import ModalBlackList from "../../../Modals/ModalBlackList";
import Search from "../../components/Search";
import { connect } from 'react-redux';
import { searchBlackListUsers } from "../../../../redux/actions/searchActions";

const usersBlackListModal = ({ name, addBlackListUsers }) => (
    <ModalBlackList
        showButtonContent="Add User"
        submitButtonContent="Add"
        title="Add User"
        appName={ name }
        addBlackListUsers={addBlackListUsers}
    />);

const usersBlackListContent = ({ black_list_users, name }, index) => (
    <div key={index} className="user-app-content__serviceBots">
        <div className="user-app-content__serviceBots">
            <BlackList black_list_users={ black_list_users } appName={ name }/>
        </div>
    </div>
);

const usersBlackTotal = ({ black_list_users }) => (
    <div className='total-number-of-block'>
        { black_list_users.length }
    </div>
);

const usersBlackListSearch = ({ black_list_users }) => {
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchBlackListUsers(payload)),
    });
    const ConnectedUsersBlackListSearch = connect(null, mapDispatchToProps)(Search);
    return (
        <ConnectedUsersBlackListSearch
            list={black_list_users}
        />
    )
};

export default new ContentData(
    `User's Black List`,
    2,
    usersBlackListContent,
    usersBlackListModal,
    usersBlackTotal,
    usersBlackListSearch,
);
