import React from 'react';
import PropTypes from "prop-types";
import MenuMain from "../../../MenuMain";

const MenuLayoutMenu = ({ children, router }) => {
    return (
        <>
            <div className="menu">
                <MenuMain router={router}/>
            </div>
            <div className='content'>
                {children}
            </div>
        </>
    );
};

MenuLayoutMenu.propTypes = {
    children: PropTypes.object,
    router: PropTypes.object,
};

export default MenuLayoutMenu;
