import React from "react";
import { Table, Button } from "semantic-ui-react";

export const ModeratorsPermlinks = ({ author_permlinks }) => {
  return (
    <>
      <Table fixed singleLine unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Author Permlinks</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {author_permlinks.map(permlink => (
            <Table.Row>
              <Table.Cell>{permlink}</Table.Cell>
              <Table.Cell textAlign="right">
                <Button>Update</Button>
                <Button color="red" icon="delete">
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default ModeratorsPermlinks;
