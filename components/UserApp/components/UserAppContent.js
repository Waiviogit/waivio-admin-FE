import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { Moderators } from './Moderators';

export const UserAppContent = ({
    moderators,
    top_users,
    service_bots,
    black_list_users,
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
                <Icon name='dropdown' />
                Moderators
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <Moderators moderators={moderators}/>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={() => handleClick(1)}
            >
                <Icon name='dropdown' />
                Top Users
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <Moderators moderators={moderators}/>
            </Accordion.Content>  
        </>
    );
};

