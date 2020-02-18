import './Login.scss';
import React from 'react';
import PropTypes from "prop-types";
import { Button, Form, Segment } from 'semantic-ui-react';
import Link from "next/link";
import classNames from 'classnames';
import { Image } from 'semantic-ui-react';
import ReactDOM from "react-dom";
// import { CustomButton } from 'components/common/buttons';

const Login = () => {
    const handleSignIn = () => {
        console.log('handleSignIn');
    };
    return (
        <div className='login-wrap'>
                    <Form onSubmit={handleSignIn} className="login__form">
                        <div className="login__form-logo">
                            <Image src="/static/icons/waivio-logo.svg" className='login__form-logo-img'/>
                        </div>
                        <div className='login__title'>Login to Your Account</div>
                                <Segment inverted>
                                    <Form inverted>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid placeholder='Email' />
                                            <Form.Input fluid placeholder='Password' />
                                        </Form.Group>
                                        <Button type='submit'>Submit</Button>
                                    </Form>
                                </Segment>
                    </Form>
        </div>
    );
};

export default Login;