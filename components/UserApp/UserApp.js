import React, { useState } from 'react';
import PropTypes from "prop-types";
import contentData from './contentData'
import './UserApp.scss'

const UserApp = (props) => {
    const { app } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='user-app'>
            <h2>{ app.name }</h2>
            <div className='user-app__content'>
                <div className='user-app__content-header'>
                    {contentData.map(({ title, index }) =>
                        <h3
                            className={activeIndex === index && 'active'}
                            onClick={() => setActiveIndex(index)}
                        >
                            { title }
                        </h3>
                    )}
                </div>
                <div className='user-app__content-body'>
                    <div className='user-app__content-body-header'>
                        {contentData
                            .map(({ title, index, modal, total }) => index === activeIndex &&
                                <>
                                    <div className='user-app__content-body-header-title'>
                                      <span>{ title }</span>
                                      <span>{ total(app) }</span>
                                    </div>
                                    { modal(props) }
                                </>
                            )}
                    </div>
                    <div className='user-app__content-body-main'>
                        {contentData
                            .map(({ index, content }) => index === activeIndex && content(app) )}
                    </div>
                </div>
            </div>
        </div>
    );
};

UserApp.propTypes = {
    app: PropTypes.object,
    activeIndex: PropTypes.string,
    setActiveIndex: PropTypes.func,
};

export default UserApp;
