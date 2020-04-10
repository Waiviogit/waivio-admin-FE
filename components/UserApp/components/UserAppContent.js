import "../UserApp.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion, Icon } from "semantic-ui-react";
import userAppsData from "../userAppsData";

export const UserAppContent = props => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
            return;
        }
        setActiveIndex(index);
    };

    return userAppsData.map(accordion => {
        const {
            title,
            index,
            createModal,
            createContent,
        } = accordion;
       return  <>
            <Accordion.Title
                key={ index }
                active={ activeIndex === index }
                index={ index }
                onClick={() => handleClick(index)}
            >
                <div className="user-app-content__title">
                    <div className="user-app-content__title-content">
                        <Icon name="dropdown" />
                        { title }
                    </div>
                    <div className="user-app-content__title-btn">
                        { createModal(props) }
                    </div>
                </div>
            </Accordion.Title>
            <Accordion.Content active={ activeIndex === index }>
                { createContent(props) }
            </Accordion.Content>
        </>
    });
};

UserAppContent.propTypes = {
    moderators: PropTypes.array,
    top_users: PropTypes.array,
    service_bots: PropTypes.array,
    black_list_users: PropTypes.array,
    upgradeToModerator: PropTypes.func,
    createServiceBot: PropTypes.func,
    appName: PropTypes.string,
};
