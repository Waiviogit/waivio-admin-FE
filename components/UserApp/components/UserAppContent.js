import "../UserApp.scss";
import React, { useState } from "react";
import { Accordion, Button, Icon } from "semantic-ui-react";
import { Moderators } from "./Moderators/Moderators";
import { TopUsers } from './TopUsers/TopUsers';
import { ServiceBots } from './ServiceBots/ServiceBots';
import { BlackList } from './BlackList/BlackList';

export const UserAppContent = ({
  moderators,
  top_users,
  service_bots,
  black_list_users
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = index => {
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
              <div className='user-app-content__title-content'>
                  <Icon name="dropdown" />
                  Moderators
              </div>
              <div className='user-app-content__title-btn'>
                  <Button>Add</Button>
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
              <div className='user-app-content__title-content'>
                  <Icon name="dropdown" />
                  Top Users
              </div>
              <div className='user-app-content__title-btn'>
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
                <div className='user-app-content__title-content'>
                    <Icon name="dropdown" />
                    Service Bots
                </div>
                <div className='user-app-content__title-btn'>
                    <Button>Add</Button>
                </div>
            </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <div className="user-app-content__serviceBots">
                <ServiceBots service_bots={service_bots} />
            </div>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={() => handleClick(3)}
        >
            <div className="user-app-content__title">
                <div className='user-app-content__title-content'>
                    <Icon name="dropdown" />
                    User's Black List
                </div>
                <div className='user-app-content__title-btn'>
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
