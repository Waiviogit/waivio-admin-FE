import './Main.scss';
import React from "react";
import PropTypes from "prop-types";
import { map } from 'lodash';
import Link from 'next/link'
import { Container } from "semantic-ui-react";

const Main = ({ apps }) => {
    return (
        <div className='main'>
            <Container className='main__body'>
                <div className='main__body-header'><h1>Apps</h1></div>
                <div className='main__body-content'>
                    {map(apps, app => (
                        <Link key={app.name} href={`/main/${app.name}`}>
                            <div className='main__body-content-app'>
                                    <a>{app.name}</a>
                            </div>
                        </Link>
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
