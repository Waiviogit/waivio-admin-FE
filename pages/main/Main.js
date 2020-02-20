import React from "react";
import PropTypes from "prop-types";
import { setStorageData } from 'helpers/localeStorage';

const Main = ({signOut}) => {
    const handleClick = () => {
        setStorageData('isLogout', true);
        signOut();
    };
    return (
        <button onClick={handleClick}>Sign Out</button>
    );
};

Main.propTypes = {
    signOut: PropTypes.func.isRequired,
};

export default Main;