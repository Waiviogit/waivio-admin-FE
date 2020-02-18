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
                                {/*<div className="is-login__form-logo">*/}
                                {/*    <Image src="/static/icons/logo_color.svg" className='is-login__form-logo-img'/>*/}
                                {/*</div>*/}
                                {/*<div className='is-login__title'>Login to Your Account</div>*/}
                                {/*<TextFieldValidated*/}
                                {/*    placeholder={intl.formatMessage({ id: "email" })}*/}
                                {/*    validateRule={validateField.bind(this, 'email')}*/}
                                {/*    formState={formState}*/}
                                {/*    direction='-column'*/}
                                {/*    errorAlign='login'*/}
                                {/*    maxLength={50}*/}
                                {/*    field="email"*/}
                                {/*    type="email"*/}
                                {/*/>*/}
                                {/*<div className="is-login__password-wrap">*/}
                                {/*    <TextFieldValidated*/}
                                {/*        placeholder={intl.formatMessage({ id: "password" })}*/}
                                {/*        validateRule={validateField.bind(this, 'password')}*/}
                                {/*        additionalClass='passwordInput'*/}
                                {/*        formState={formState}*/}
                                {/*        direction='-column'*/}
                                {/*        errorAlign='login'*/}
                                {/*        field="password"*/}
                                {/*        type="password"*/}
                                {/*        maxLength={50}*/}
                                {/*    />*/}
                                {/*    {isActiveCapsLock && <Image title={intl.formatMessage({ id: "caps_lock_warning" })} src='/static/icons/ico_error.svg' className="is-login__caps-lock"/>}*/}
                                {/*</div>*/}
                                {/*<div className="is-login__button">*/}
                                {/*    <CustomButton*/}
                                {/*        content={intl.formatMessage({ id: "login_btn" })}*/}
                                {/*        className='is-login__button-login'*/}
                                {/*        disabled={isLoading}*/}
                                {/*        loading={isLoading}*/}
                                {/*        icon="login"*/}
                                {/*        color='blue'*/}
                                {/*        type="submit"*/}
                                {/*    />*/}
                                {/*</div>*/}
                                {/*<div className="is-login__link">*/}
                                {/*    <Link href="/account_recovery">*/}
                                {/*        <div className={classNames('is-login__link-text', { disabled: isLoading })}>*/}
                                {/*            {intl.formatMessage({ id: "forgotPassword" })}*/}
                                {/*        </div>*/}
                                {/*    </Link>*/}
                               {/*</div>*/}
                    </Form>
        </div>
    );
};

export default Login;