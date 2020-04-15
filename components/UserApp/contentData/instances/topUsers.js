import React from "react";
import TopUsers from "../../components/TopUsers";
import ContentData from "../contentDataInterface";
import ModalBlackList from "../../../Modals/ModalBlackList";

const topUsersContent = ({ top_users }) => (
    <div className="user-app-content__topUsers">
        <TopUsers top_users={ top_users } />
    </div>
);

const topUsersTotal = ({ top_users }) => (
    <div className='total-number-of-block'>
        { top_users.length }
    </div>
);

export default new ContentData(
    'Top Users', 3,
    topUsersContent,
    null,
    topUsersTotal,
);
