import React from 'react';
import PropTypes from "prop-types";
import { Accordion, Icon } from "semantic-ui-react";
import UserAppContent from './components';

const UserApp = ({ app, activeIndex, setActiveIndex }) => {
    const { name, _id, moderators, top_users, service_bots, black_list_users } = app;
    const handleClick = () => {
        if (activeIndex === _id) {
            setActiveIndex(-1);
            return;
        }
        setActiveIndex(_id);
    };

    return (
        <Accordion fluid styled>
            <Accordion.Title
                active={activeIndex === _id}
                index={_id}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                {name}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === _id}>
                <UserAppContent
                    appName={name}
                    moderators={moderators}
                    top_users={top_users}
                    service_bots={service_bots}
                    black_list_users={black_list_users}
                />
            </Accordion.Content>
        </Accordion>
    );
};

UserApp.propTypes = {
    app: PropTypes.object,
    activeIndex: PropTypes.string,
    setActiveIndex: PropTypes.func,
};

export default UserApp;
