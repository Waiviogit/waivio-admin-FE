import React from 'react';
import {Icon, Table} from "semantic-ui-react";
import ModalServiceBot from "../../../Modals/ModalServiceBot";

export const ServiceBotsNames = ({ name, updateServiceBot, deleteServiceBot }) => {
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
                        <Table.Cell textAlign="right">
                            <ModalServiceBot
                                showButtonContent='Update Service Bot'
                                submitButtonContent='Update'
                                title='Update Service Bot'
                                isUpdate
                                updateServiceBot={updateServiceBot}
                            />
                            <ModalServiceBot
                                showButtonContent='Delete Service Bot'
                                submitButtonContent='Delete'
                                title='Delete Service Bot'
                                isDelete
                                deleteServiceBot={deleteServiceBot}
                            />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
};

export default ServiceBotsNames;