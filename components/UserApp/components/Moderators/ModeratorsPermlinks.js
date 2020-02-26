import React from "react";
import { Table, Button } from "semantic-ui-react";

const ModeratorsPermlinks = ({ author_permlinks }) => {
    return (
        <>
            <Table fixed singleLine unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Author Permlinks</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {author_permlinks.map((permlink) => (
                        <Table.Row>
                            <Table.Cell>{permlink}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    );
};

export default ModeratorsPermlinks;
