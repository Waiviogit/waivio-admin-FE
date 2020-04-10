import UserAppsData from "./interface";
import React from "react";
import dynamic from "next/dist/next-server/lib/dynamic";
import ModalModerator from "../../Modals/ModalModerator";
import ModalServiceBot from "../../Modals/ModalServiceBot";
import ModalBlackList from "../../Modals/ModalBlackList";

const Moderators = dynamic(() => import("../components/Moderators"));
const TopUsers = dynamic(() => import("../components/TopUsers"));
const ServiceBots = dynamic(() => import("../components/ServiceBots"));
const BlackList = dynamic(() => import("../components/BlackList"));


export const moderators = new UserAppsData(0, 'Moderators');
moderators.createModal = ({ appName, upgradeToModerator }) => (
    <ModalModerator
        showButtonContent="Create Moderator"
        submitButtonContent="Create"
        title="Create Moderator"
        appName={ appName }
        onFormSubmit={ upgradeToModerator }
        type='create'
    />);

moderators.createContent = ({ moderators, appName }) => (
    <div className="user-app-content__moderators">
        <div className="user-app-content__moderators">
            <Moderators moderators={ moderators } appName={ appName } />
        </div>
    </div>
);

export const serviceBots = new UserAppsData(2, 'Service Bots');
serviceBots.createModal = ({ appName, createServiceBot }) => (
    <ModalServiceBot
        showButtonContent="Create Service Bot"
        submitButtonContent="Create"
        title="Create Service Bot"
        type="create"
        onFormSubmit={ createServiceBot }
        appName={ appName }
    />);

serviceBots.createContent = ({ service_bots, appName }) => (
    <div className="user-app-content__serviceBots">
        <div className="user-app-content__serviceBots">
            <ServiceBots service_bots={ service_bots } appName={ appName } />
        </div>
    </div>
);

export const usersBlackList = new UserAppsData(3, 'User\'s Black List');
usersBlackList.createModal = ({ appName }) => (
    <ModalBlackList
        showButtonContent="Add User"
        submitButtonContent="Add"
        title="Add User"
        appName={ appName }
    />);

usersBlackList.createContent = ({ black_list_users, appName }) => (
    <div className="user-app-content__serviceBots">
        <div className="user-app-content__serviceBots">
            <BlackList black_list_users={ black_list_users } appName={ appName }/>
        </div>
    </div>
);

export const topUsers = new UserAppsData(1, 'Top Users');
topUsers.createModal = ({ appName }) => (
    <ModalBlackList
        showButtonContent="Add User"
        submitButtonContent="Add"
        title="Top Users"
        appName={ appName }
    />);

topUsers.createContent = ({ top_users }) => (
    <div className="user-app-content__topUsers">
        <TopUsers top_users={ top_users } />
    </div>
);
