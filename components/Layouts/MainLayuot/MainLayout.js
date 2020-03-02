import './MainLayout.scss';
import PropTypes from 'prop-types';
import React from 'react';

const MainLayout = ({ children, pathname }) => {
    return (
        <div className={`main-layout  ${pathname ? pathname.replace(/\//g, '') : ''}`}>
            <div className="main-layout__body">
                { children }
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    pathname: PropTypes.string,
    children: PropTypes.node,
};

export default MainLayout;
