import './Main.scss';
import React from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import Link from 'next/link'
import { Container } from "semantic-ui-react";

const Main = ({ apps }) => {
    return (
        <div className='main'>
            <Container className='main__body'>
                <div className='main__body-header'><h1>Apps</h1></div>
                <div className='main__body-content'>
                    {_.map(apps, app => (
                        <div className='main__body-content-app'>
                            <Link href={`/main/${app.name}`}>
                                <a>{app.name}</a>
                            </Link>
                        </div>
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
