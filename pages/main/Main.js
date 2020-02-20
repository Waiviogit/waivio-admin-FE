import './Main.scss';
import React, { useState } from "react";
import PropTypes from "prop-types";
import {Button, Image, Menu} from "semantic-ui-react";
import { setStorageData } from "helpers/localeStorage";
import ModalCreateModerator from 'components/Modals/ModalCreateModerator';

const Main = ({ signOut }) => {
  const [activeItem, setActiveItem] = useState(false);
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  const handleClick = () => {
    setStorageData("isLogout", true);
    signOut();
  };
  return (
    <div className='menu-wrap'>
      <Menu className='menu__body' size="large" inverted>
        <Menu.Item>
          <Image
              src="/static/icons/waivio-logo.svg"
              className="menu__body-logo"
          />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Create Moderator"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        >
          <ModalCreateModerator/>
        </Menu.Item>
        <Menu.Menu className='menu__body-right' position="right">
          <Menu.Item>
            <Button onClick={handleClick}>Sign Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

Main.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default Main;
