import React, { useEffect, useState } from "react";
import { Image, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import { setStorageData } from "../../helpers/localeStorage";
import { CustomButton } from "../common/buttons";
import './MenuMain.scss';

const MenuMain = ({ signOut, getAllApps, resetTagsContentIndex }) => {
    const [activeItem, setActiveItem] = useState(false);
    const [userEmail] = useLocalStorage("userEmail");
    const handleItemClick = (e, { name }) => {
        resetTagsContentIndex();
        setActiveItem(name);
    };
    const handleClick = () => {
        setStorageData("isLogout", true);
        signOut();
    };

    useEffect(() => {
        setTimeout(() => getAllApps(userEmail), 300)
    }, []);

    return (
        <Menu className="main__menu-body" size="large" inverted>
            <Menu.Item>
                <Link href='/main'>
                    <a>
                        <Image
                            onClick={resetTagsContentIndex}
                            src="/static/icons/waivio-logo.svg"
                            className="menu__body-logo"
                        />
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item
                as='div'
                name="Apps"
                active={activeItem === "apps"}
                onClick={handleItemClick}
            >
                <Link href="/main"><a>Apps</a></Link>
            </Menu.Item>
            <Menu.Item
                as='div'
                name="Users"
                active={activeItem === "users"}
                onClick={handleItemClick}
            >
                <Link href="/users"><a>Users</a></Link>
            </Menu.Item>
            <Menu.Item
                as='div'
                name="Objects"
                active={activeItem === "objects"}
                onClick={handleItemClick}
            >
                <Link href="/objects"><a>Objects</a></Link>
            </Menu.Item>
            <Menu.Menu className="main__menu-body-right" position="right">
                <Menu.Item>
                    <CustomButton onClick={handleClick} content="Sign Out" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

MenuMain.propTypes = {
    signOut: PropTypes.func.isRequired,
    getAllApps: PropTypes.func,
};
export default MenuMain;
