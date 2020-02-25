import React, { useState } from 'react';
import {Accordion} from "semantic-ui-react";
import { ServiceBotsNames } from './ServiceBotsNames';
import { ServiceBotsContent } from './ServiceBotsContent';

export const ServiceBots = ({ service_bots }) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
            return;
        }
        setActiveIndex(index);
    };

    return (
        <Accordion fluid styled>
            {service_bots.map((bot, index) => {
                const { name, postingKey, roles } = bot;
                return (
                    <>
                        <Accordion.Title
                            active={activeIndex === index}
                            index={index}
                            onClick={() => handleClick(index)}
                        >
                            <ServiceBotsNames name={name}/>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                            <ServiceBotsContent postingKey={postingKey} roles={roles}/>
                        </Accordion.Content>
                    </>
                );
            })}
        </Accordion>
    );
};

export default ServiceBots;