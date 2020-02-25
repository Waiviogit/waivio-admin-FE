import React from "react";
import { Icon, Table } from "semantic-ui-react";

export const TopUsersNames = ({ name }) => {
  return (
    <>
      <Table
        fixed
        singleLine
        unstackable
        className="user-app-content__topUsers-names"
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

export default TopUsersNames;
