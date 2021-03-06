import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from "prop-types";
import { map } from 'lodash';
import contentData from './contentData'
import './UserApp.scss'

const UserApp = (props) => {
    const { app, setSortBy } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setSortBy('alphabet')
    }, []);

    app.statistics = {
        statistics: {}
    };

    return (
        <div className='user-app'>
            <h2>{ app.name }</h2>
            <div className='user-app__content'>
                <div className='user-app__content-header'>
                    {map(contentData, ({ title, index }) =>
                        <h3
                            key={`header-title-${index}`}
                            className={activeIndex === index ? 'active' : ''}
                            onClick={() => setActiveIndex(index)}
                        >
                            { title({}) }
                        </h3>
                    )}
                </div>
                <div className='user-app__content-body'>
                    <div className='user-app__content-body-header'>
                        {map(contentData, ({ title, index, modal, search }) => index === activeIndex &&
                                <Fragment key={index}>
                                    <div key={`body-title-${index}`} className='user-app__content-body-header-title'>
                                      { title(app) }
                                    </div>
                                    <div className='user-app__content-actionbar'>
                                        { search && search(app) }
                                        { modal && modal({...app, ...props}) }
                                    </div>
                                </Fragment>
                            )}
                    </div>
                    {map(contentData, ({ sort, index }) => index === activeIndex && sort && sort(index))}
                    <div className='user-app__content-body-main'>
                        {
                            map(contentData, ({ index, content }) => index === activeIndex && content(app, index) )
                        }
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
