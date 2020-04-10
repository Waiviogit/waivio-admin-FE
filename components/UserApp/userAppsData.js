import React from "react";
import dynamic from "next/dist/next-server/lib/dynamic";
import ModalModerator from "../Modals/ModalModerator";
import ModalServiceBot from "../Modals/ModalServiceBot";
import ModalBlackList from "../Modals/ModalBlackList";

const Moderators = dynamic(() => import("./components/Moderators"));
const TopUsers = dynamic(() => import("./components/TopUsers"));
const ServiceBots = dynamic(() => import("./components/ServiceBots"));
const BlackList = dynamic(() => import("./components/BlackList"));

export default
    [{
        index: 0,
        title: 'Moderators',
        createModal: ({ appName, upgradeToModerator }) => (
            <ModalModerator
            showButtonContent="Create Moderator"
            submitButtonContent="Create"
            title="Create Moderator"
            appName={ appName }
            onFormSubmit={ upgradeToModerator }
            type='create'
        />),
        createContent: ({ moderators, appName }) => (
            <div className="user-app-content__moderators">
                <div className="user-app-content__moderators">
                    <Moderators moderators={ moderators } appName={ appName } />
                </div>
            </div>
        )
    }, {
        index: 2,
        title: 'Service Bots',
        createModal: ({ appName, createServiceBot }) => (
            <ModalServiceBot
                showButtonContent="Create Service Bot"
                submitButtonContent="Create"
                title="Create Service Bot"
                type="create"
                onFormSubmit={ createServiceBot }
                appName={ appName }
            />),
        createContent: ({ service_bots, appName }) => (
            <div className="user-app-content__serviceBots">
                <div className="user-app-content__serviceBots">
                    <ServiceBots service_bots={ service_bots } appName={ appName } />
                </div>
            </div>
        )
    }, {
        index: 3,
        title: 'User\'s Black List',
        createModal: ({ appName }) => (
            <ModalBlackList
                showButtonContent="Add User"
                submitButtonContent="Add"
                title="Add User"
                appName={ appName }
            />),
        createContent: ({ black_list_users, appName }) => (
            <div className="user-app-content__serviceBots">
                <div className="user-app-content__serviceBots">
                    <BlackList black_list_users={ black_list_users } appName={ appName }/>
                </div>
            </div>
        )
    }, {
        index: 1,
        title: 'Top Users',
        createModal: ({ appName }) => (
            <ModalBlackList
                showButtonContent="Add User"
                submitButtonContent="Add"
                title="Top Users"
                appName={ appName }
            />),
        createContent: ({ top_users }) => (
            <div className="user-app-content__topUsers">
                <TopUsers top_users={ top_users } />
            </div>
        )
    }]
