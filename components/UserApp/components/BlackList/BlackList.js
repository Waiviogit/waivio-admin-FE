import React, {useState} from 'react';
import {Accordion, Button, Table} from "semantic-ui-react";

export const BlackList = ({ black_list_users }) => {
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
                    <Table fixed singleLine unstackable>
                        {/*<Table.Header>*/}
                        {/*    <Table.Row>*/}
                        {/*        <Table.HeaderCell>Users</Table.HeaderCell>*/}
                        {/*        <Table.HeaderCell></Table.HeaderCell>*/}
                        {/*    </Table.Row>*/}
                        {/*</Table.Header>*/}
                        <Table.Body>
                            {black_list_users.map((user, index) => {
                                return (
                            <Table.Row>
                                <Table.Cell>{user}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <Button color="red" icon="delete">
                                        Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                                );
                            })};
                        </Table.Body>
                    </Table>

        </Accordion>
    );
};

export default BlackList;