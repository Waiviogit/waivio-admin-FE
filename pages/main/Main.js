import './Main.scss';
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import { Image, Menu, Dropdown, Container } from "semantic-ui-react";
import { setStorageData, getStorageData } from "../../helpers/localeStorage";
import ModalModerator from '../../components/Modals/ModalModerator';
import UserApp from '../../components/UserApp';
import { CustomButton } from '../../components/common/buttons';
import { useLocalStorage } from "../../helpers/useLocalStorage";
// import { apps } from '../../components/UserApp/mock';

const Main = ({
    signOut,
    upgradeToModerator,
    updateModerator,
    upgradeToUser,
    user,
    getAllApps,
    apps,
}) => {
    const [activeItem, setActiveItem] = useState(false);
    const [activeIndex, setActiveIndex] = useState('');
    const [userEmail] = useLocalStorage('userEmail');

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };
    const handleClick = () => {
        setStorageData("isLogout", true);
        signOut();
    };

    useEffect(() => {
        getAllApps(userEmail);
    }, []);

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
                        name="Main"
                        active={activeItem === "home"}
                        onClick={handleItemClick}
                    />
                    <Menu.Menu className='main__menu-body-right' position="right" >
                        <Menu.Item>
                            <CustomButton onClick={handleClick} content='Sign Out'/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
            <Container className='main__body'>
                <div className='main__body-header'><h1>All Your Apps</h1></div>
                <div className='main__body-content'>
                    {_.map(apps, (app) => (
                        <UserApp 
                            className='main__body-content-item' 
                            key={app._id} 
                            app={app} 
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

Main.propTypes = {
    signOut: PropTypes.func.isRequired,
    upgradeToModerator: PropTypes.func.isRequired,
    updateModerator: PropTypes.func.isRequired,
    upgradeToUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    apps: PropTypes.array,
    getAllApps: PropTypes.func,
};

export default Main;
