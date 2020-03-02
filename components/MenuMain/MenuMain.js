import React, { useEffect, useState } from "react";
import { Image, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import { setStorageData } from "../../helpers/localeStorage";
import { CustomButton } from "../common/buttons";

const MenuMain = ({ signOut, getAllApps }) => {
    const [activeItem, setActiveItem] = useState(false);
    const [userEmail] = useLocalStorage("userEmail");
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
        <Menu className="main__menu-body" size="large" inverted>
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
            >
                <Link href="/main">Main</Link>
            </Menu.Item>
            <Menu.Item
                name="Users"
                active={activeItem === "users"}
                onClick={handleItemClick}
            >
                Users
                {/*<Link href="/users">Users</Link>*/}
            </Menu.Item>
            <Menu.Item
                name="Objects"
                active={activeItem === "objects"}
                onClick={handleItemClick}
            >
                <Link href="/objects">Objects</Link>
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
