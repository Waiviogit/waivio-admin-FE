import './Main.scss';
import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import { Container } from "semantic-ui-react";
import UserApp from '../../components/UserApp';

const Main = ({ apps }) => {
    const [activeIndex, setActiveIndex] = useState('');
    return (
        <div className='main'>
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
    apps: PropTypes.array,
};

export default Main;
