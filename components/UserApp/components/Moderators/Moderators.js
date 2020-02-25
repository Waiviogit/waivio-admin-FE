import React, { useState } from 'react';
import { Accordion, Icon, Button, Segment } from 'semantic-ui-react';
import ModeratorsPermlinks from "./ModeratorsPermlinks";
import ModeratorsNames from "./ModeratorsNames";

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
                            <ModeratorsNames name={name}/>

                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                            <ModeratorsPermlinks author_permlinks={author_permlinks}/>
                        </Accordion.Content>
                    </>
                );
            })}
        </Accordion>
    );
};

export default Moderators;
