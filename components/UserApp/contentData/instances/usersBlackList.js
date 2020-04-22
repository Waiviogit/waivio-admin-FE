import React from "react";
import ContentData from "../contentDataInterface";
import BlackList from "../../components/BlackList";
import ModalBlackList from "../../../Modals/ModalBlackList";
import Search from "../../components/Search";
import { connect } from 'react-redux';
import { searchBlackListUsers, setInputValue } from "../../../../redux/actions/searchActions";

const usersBlackListTitle = ({ black_list_users }) => {
    return black_list_users ?
        <>
            <span>User's Black List</span>
            <div className='total-number-of-block'>
                {black_list_users.length}
            </div>
        </> :
        <span>User's Black List</span>;
};

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

const usersBlackListSearch = ({ black_list_users }) => {
    const mapSateToProps = state => ({
        inputValue: state.ui.search.inputValue
    });
    const mapDispatchToProps = (dispatch) => ({
        searchHandle: (payload) => dispatch(searchBlackListUsers(payload)),
        setInputValue: (payload) => dispatch(setInputValue(payload))
    });
    const ConnectedUsersBlackListSearch = connect(mapSateToProps, mapDispatchToProps)(Search);
    return (
        <ConnectedUsersBlackListSearch
            list={black_list_users}
        />
    )
};

export default new ContentData(
    usersBlackListTitle,
    2,
    usersBlackListContent,
    usersBlackListModal,
    usersBlackListSearch,
);
