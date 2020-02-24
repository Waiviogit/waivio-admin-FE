import './Main.scss';
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import { Image, Menu, Dropdown } from "semantic-ui-react";
import { setStorageData } from "../../helpers/localeStorage";
import ModalModerator from '../../components/Modals/ModalModerator';
import { CustomButton } from '../../components/common/buttons';
import { useLocalStorage } from "../../helpers/useLocalStorage";
import { Accordion } from 'semantic-ui-react';
import { getStorageData } from '../../helpers/localeStorage';
import { dispatchRequest } from '../../helpers/asyncActions';
import { getAllApps } from '../../redux/actions/appsActions';

const Main = ({ signOut, upgradeToModerator, updateModerator, upgradeToUser, user, getAllApps, apps, appsName, appModerators }) => {
    const [activeItem, setActiveItem] = useState(false);
    // const userEmail = getStorageData('userEmail');
    useEffect(() => {
        getAllApps(user.admin.email);
    }, []);
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };
    const handleClick = () => {
        setStorageData("isLogout", true);
        signOut();
    };
    const names = apps.map(item => ( item.name ));
    console.log(names, 'names');
    const moderators = apps.map(item => ({ name: item.moderators.map(moderator => moderator.name).toString(), author_permlinks: item.moderators.map(moderator => moderator.author_permlinks)}));
    console.log(moderators, 'moderators');
    // const rootPanels = [
    //     { key: 'panel-1', title: appsName[0], content: appModerators[0].map(item => ({ name: item.moderators.map(moderator => moderator.name), author_permlinks: item.moderators.map(moderator => moderator.author_permlinks)}))},
    //
    // ];
    console.log(apps);
    return (
        <div className='main'>
            <div className='main__menu-wrap'>
                <Menu className='main__menu-body' size="large" inverted>
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
                    <Menu.Menu className='main__menu-body-right' position="right" >
                        <Menu.Item>
                            <CustomButton onClick={handleClick} content='Sign Out'/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
            <div className='main__body'>
                <div className='main__body-header'>All Your Apps</div>
                <div className='main__body-content'>
                    {/*<Accordion defaultActiveIndex={0} panels={rootPanels} styled />*/}
                    {_.map(apps, app => (
                        <div className='main__body-content-item' key={app.id}>
                            {app.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
    signOut: PropTypes.func.isRequired,
    upgradeToModerator: PropTypes.func.isRequired,
    updateModerator: PropTypes.func.isRequired,
    upgradeToUser: PropTypes.func.isRequired,
    user: PropTypes.func,
    apps: PropTypes.array,
};

export default Main;
