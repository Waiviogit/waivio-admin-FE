import "../UserApp.scss";
import React, { useState } from "react";
import { Accordion, Button, Icon } from "semantic-ui-react";
import dynamic from 'next/dynamic';
const Moderators = dynamic(() => import("./Moderators/Moderators"));
const TopUsers = dynamic(() => import("./TopUsers"));
const ServiceBots = dynamic(() => import("./ServiceBots"));
const BlackList = dynamic(() => import("./BlackList"));
import ModalModerator from "../../Modals/ModalModerator";
import ModalServiceBot from "../../Modals/ModalServiceBot";

export const UserAppContent = ({
    moderators,
    top_users,
    service_bots,
    black_list_users,
    upgradeToModerator,
    createServiceBot,
    appName,
}) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
            return;
        }
        setActiveIndex(index);
    };

    return (
        <>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={() => handleClick(0)}
            >
                <div className="user-app-content__title">
                    <div className="user-app-content__title-content">
                        <Icon name="dropdown" />
                        Moderators
                    </div>
                    <div className="user-app-content__title-btn">
                        <ModalModerator
                            showButtonContent="Create Moderator"
                            submitButtonContent="Create"
                            title="Create Moderator"
                            isCreate
                            upgradeToModerator={upgradeToModerator}
                        />
                    </div>
                </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <div className="user-app-content__moderators">
                    <Moderators moderators={moderators} />
                </div>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={() => handleClick(1)}
            >
                <div className="user-app-content__title">
                    <div className="user-app-content__title-content">
                        <Icon name="dropdown" />
                        Top Users
                    </div>
                    <div className="user-app-content__title-btn">
                        <Button>Add</Button>
                    </div>
                </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <div className="user-app-content__topUsers">
                    <TopUsers top_users={top_users} />
                </div>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={() => handleClick(2)}
            >
                <div className="user-app-content__title">
                    <div className="user-app-content__title-content">
                        <Icon name="dropdown" />
                        Service Bots
                    </div>
                    <div className="user-app-content__title-btn">
                        <ModalServiceBot
                            showButtonContent="Create Service Bot"
                            submitButtonContent="Create"
                            title="Create Service Bot"
                            type="create"
                            onFormSubmit={createServiceBot}
                            appName={appName}
                        />
                    </div>
                </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                <div className="user-app-content__serviceBots">
                    <ServiceBots service_bots={service_bots} appName={appName} />
                </div>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={() => handleClick(3)}
            >
                <div className="user-app-content__title">
                    <div className="user-app-content__title-content">
                        <Icon name="dropdown" />
                        User's Black List
                    </div>
                    <div className="user-app-content__title-btn">
                        <Button>Add</Button>
                    </div>
                </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <div className="user-app-content__serviceBots">
                    <BlackList black_list_users={black_list_users} />
                </div>
            </Accordion.Content>
        </>
    );
};
