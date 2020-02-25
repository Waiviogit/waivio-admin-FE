import React from "react";
import { Button, Table } from "semantic-ui-react";

export const ServiceBotsContent = ({ postingKey, roles }) => {
  return (
    <>
      <Table
        fixed
        singleLine
        unstackable
        className="user-app-content__serviceBots-content"
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Posting Key</Table.HeaderCell>
            <Table.HeaderCell>Roles</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{postingKey}</Table.Cell>
              <Table.Cell>
              {roles.map(role => (
                  <>{role} <br/></>
              ))}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
      </Table>
    </>
  );
};

export default ServiceBotsContent;
