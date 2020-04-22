import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from "prop-types";
import { map } from 'lodash';
import contentData from './contentData'
import './UserApp.scss'

const UserApp = (props) => {
    const { app, setSortBy } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    app.black_list_users = [
        {name: 'tw', alias: 'blabla', followers_count: 2, wobjects_weight: 12323123.7168839},
        {name: 'bla', alias: 'blabla', followers_count: 32, wobjects_weight: 523522123.7168839},
        {name: 'test', alias: 'blabla', followers_count: 421, wobjects_weight: 55443543.7168839},
        {name: 'rand', alias: 'blabla', followers_count: 12, wobjects_weight: 12414542.7168839},
    ];
    app.top_users = [
        {name: 'tw', alias: 'blabla', followers_count: 2, wobjects_weight: 12323123.7168839},
        {name: 'bla', alias: 'blabla', followers_count: 32, wobjects_weight: 523522123.7168839},
        {name: 'test', alias: 'blabla', followers_count: 421, wobjects_weight: 55443543.7168839},
        {name: 'abs', alias: 'blabla', followers_count: 421, wobjects_weight: 23123123.7168839},
        {name: 'rand', alias: 'blabla', followers_count: 12, wobjects_weight: 12414542.7168839},
    ];
    app.supported_hashtags = [
        {name: 'tw', alias: 'blabla', followers_count: 2, wobjects_weight: 12323123.7168839},
        {name: 'bla', alias: 'blabla', followers_count: 32, wobjects_weight: 523522123.7168839},
        {name: 'test', alias: 'blabla', followers_count: 421, wobjects_weight: 55443543.7168839},
        {name: 'abs', alias: 'blabla', followers_count: 421, wobjects_weight: 23123123.7168839},
        {name: 'rand', alias: 'blabla', followers_count: 12, wobjects_weight: 12414542.7168839},
    ];

    useEffect(() => {
        setSortBy('alphabet')
    }, []);

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
