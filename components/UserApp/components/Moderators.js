import React, { useState } from 'react';
import { Accordion, Icon, Button, Segment } from 'semantic-ui-react';

export const Moderators = ({ moderators }) => {
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
            {moderators.map((moderator, index) => {
                const { name, author_permlinks } = moderator;
                return ( 
                    <>
                        <Accordion.Title
                            active={activeIndex === index}
                            index={index}
                            onClick={() => handleClick(index)}
                        >
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex", flex: 1 }} >
                                    <Icon name='dropdown' />
                                    {name}
                                </div>
                                <Button icon={"undo"}/>
                                <Button color='red' icon="delete"/>
                            </div>                           
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                            <h5>author_permlinks</h5>
                            { author_permlinks.map((permlink) => (
                                <Segment style={{ display: "flex" }}>
                                    <div style={{ display: "flex", flex: 1 }} >
                                        {permlink}
                                    </div>
                                    <Button >Update</Button>
                                    <Button color='red' icon="delete"/>
                                </Segment>
                            ))}
                        </Accordion.Content>
                    </>
                );
            })}
            
        </Accordion>
    );
};

export default Moderators;
