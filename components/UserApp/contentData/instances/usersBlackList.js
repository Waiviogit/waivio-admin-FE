import React from "react";
import ContentData from "../contentDataInterface";
import BlackList from "../../components/BlackList";
import ModalBlackList from "../../../Modals/ModalBlackList";

const usersBlackListModal = ({ appName, addBlackListUsers }) => (
    <ModalBlackList
        showButtonContent="Add User"
        submitButtonContent="Add"
        title="Add User"
        appName={ appName }
        addBlackListUsers={addBlackListUsers}
    />);

const usersBlackListContent = ({ black_list_users, appName }) => (
    <div className="user-app-content__serviceBots">
        <div className="user-app-content__serviceBots">
            <BlackList black_list_users={ black_list_users } appName={ appName }/>
        </div>
    </div>
);

const usersBlackTotal = ({ black_list_users }) => (
    <div className='total-number-of-block'>
        { black_list_users.length }
    </div>
);

export default new ContentData(
    `User's Black List`,
    2,
    usersBlackListContent,
    usersBlackListModal,
    usersBlackTotal
);