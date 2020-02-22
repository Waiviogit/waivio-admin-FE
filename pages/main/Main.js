import './Main.scss';
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Image, Menu, Dropdown } from "semantic-ui-react";
import { setStorageData } from "../../helpers/localeStorage";
import ModalModerator from '../../components/Modals/ModalModerator';
import { CustomButton } from '../../components/common/buttons';

const Main = ({ signOut, upgradeToModerator, updateModerator, upgradeToUser }) => {
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
                <Menu.Item onClick={handleItemClick}>
                    <Dropdown text='Moderator'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='New' >
                                <ModalModerator
                                    showButtonContent='Create Moderator'
                                    submitButtonContent='Create'
                                    title='Create Moderator'
                                    isCreate
                                    upgradeToModerator={upgradeToModerator}
                                />
                            </Dropdown.Item>
                            <Dropdown.Item text='New' >
                                <ModalModerator
                                    showButtonContent='Update Moderator'
                                    submitButtonContent='Update'
                                    title='Update Moderator'
                                    isUpdate
                                    updateModerator={updateModerator}
                                />
                            </Dropdown.Item>
                            <Dropdown.Item text='New' >
                                <ModalModerator
                                    showButtonContent='Delete Moderator'
                                    submitButtonContent='Delete'
                                    title='Delete Moderator'
                                    isDelete
                                    upgradeToUser={upgradeToUser}
                                />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Menu onClick={handleItemClick} className='menu__body-right' position="right" >
                    <Menu.Item>
                        <CustomButton onClick={handleClick} content='Sign Out'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
};

Main.propTypes = {
    signOut: PropTypes.func.isRequired,
    upgradeToModerator: PropTypes.func.isRequired,
    updateModerator: PropTypes.func.isRequired,
    upgradeToUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default Main;
