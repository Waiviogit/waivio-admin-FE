import React from 'react';
import PropTypes from "prop-types";
import MenuLayoutMenu from "./MenuLayoutMenu";

const MenuLayout = ({ children, router, isSignIn }) => {
    return (
        <>
            {isSignIn ? (
                <MenuLayoutMenu router={router}>
                    {children}
                </MenuLayoutMenu>
            ) : children }

        </>
    );
};

MenuLayout.propTypes = {
    children: PropTypes.object,
    isSignIn: PropTypes.string,
    router: PropTypes.object,
};

export default MenuLayout;
