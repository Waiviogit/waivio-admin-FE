import React, {useState} from 'react';
import {Accordion} from "semantic-ui-react";
import TopUsersNames from "./TopUsersNames";
import TopUsersWeight from "./TopUsersWeight";

export const TopUsers = ({ top_users }) => {
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
            {top_users.map((user, index) => {
                const { name, weight } = user;
                return (
                    <>
                        <Accordion.Title
                            active={activeIndex === index}
                            index={index}
                            onClick={() => handleClick(index)}
                        >
                            <TopUsersNames name={name}/>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                            <TopUsersWeight weight={weight}/>
                        </Accordion.Content>
                    </>
                );
            })}
        </Accordion>
    );
};

export default TopUsers;