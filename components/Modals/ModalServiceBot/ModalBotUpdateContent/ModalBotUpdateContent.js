import "../ModalServiceBot.scss";
import React, { useState } from "react";
import { Button, Table, Input } from "semantic-ui-react";
import { CustomButton } from "../../../common/buttons";

const ModalBotUpdateContent = ({
  onClose,
  appName,
  onFormSubmit,
  bot
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, postingKey, roles } = bot;
  const [botRoles, setBotRoles] = useState(roles);
  const [operation, setOperation] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const addRole = () => {
    botRoles.unshift(inputValue);
    setBotRoles(botRoles);
  };

  const handleClickAdd = () => {
    setOperation("Add");
    addRole();
    setInputValue("");
    sendRequest();
  };
  const handleClickDelete = delIndex => {
    setOperation("Delete");
    const newBotRoles = botRoles.filter((botRole, index) => index !== delIndex);
    console.log(newBotRoles);
    setBotRoles(newBotRoles);
    sendRequest();
    console.log(botRoles);
  };

  const sendRequest = () => {
    console.log("sendRequest");
    const requestData = {
      type: operation,
      data: { app: appName, name, postingKey, roles: botRoles }
    };
    setIsLoading(true);
    onFormSubmit(requestData)
      .then(() => {
        setIsLoading(false);
        // onClose();
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <div className="modal-serviceBot__content-form">
      <div className="modal-serviceBot__content-form-input">
        <Input
          placeholder="Role"
          onChange={handleChange}
          value={inputValue}
        ></Input>
        <Button onClick={handleClickAdd} loading={isLoading}>
          Add
        </Button>
      </div>
      <Table striped singleLine unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Roles</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {roles.map((role, index) => (
            <Table.Row>
              <Table.Cell key={index}>
                <div>{role}</div>
              </Table.Cell>
              <Table.Cell textAlign="right">
                <Button
                  loading={isLoading}
                  onClick={() => {
                    handleClickDelete(index);
                  }}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ModalBotUpdateContent;
