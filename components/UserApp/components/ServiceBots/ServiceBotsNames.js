import React from 'react';
import {Icon, Table} from "semantic-ui-react";

export const ServiceBotsNames = ({ name }) => {
    return (
        <>
            <Table
                fixed
                singleLine
                unstackable
                className="user-app-content__serviceBots-names"
            >
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Icon name="dropdown" />
                            {name}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
};

export default ServiceBotsNames;