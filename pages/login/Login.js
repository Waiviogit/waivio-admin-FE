import "./Login.scss";
import _ from 'lodash';
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Image } from "semantic-ui-react";

import { setStorageData, removeStorageData } from '../../helpers/localeStorage';
import { updateCookies } from '../../helpers/headers';
import { redirect } from "../../helpers/redirect";
import { CustomButton } from '../../components/common/buttons';

const Login = ({ signIn, isSignIn }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({ email: "", password: "" });

    const handleSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStorageData('isLogin', true);
        signIn({ user })
            .then(() => {
                setIsLoading(false);
                setStorageData('userEmail', user.email);
                removeStorageData('isLogin', true);
            })
            .catch(() => setIsLoading(false));
    };

    return (
        <div className="login-wrap">
            {!isSignIn && (
                <Form onSubmit={handleSignIn} className="login__form">
                    <div className="login__form-logo">
                        <Image
                            src="/static/icons/waivio-logo.svg"
                            className="login__form-logo-img"
                        />
                    </div>
                    <div className="login__title">Login to Your Account</div>
                    <Form.Field>
                        <Form.Input
                            type='email'
                            value={user.email}
                            onChange={(e, { value }) => setUser({ ...user, email: value })}
                            placeholder="Email"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            type='password'
                            value={user.password}
                            onChange={(e, { value }) => setUser({ ...user, password: value })}
                            placeholder="Password"
                        />
                    </Form.Field>
                    <CustomButton type="submit" content='Submit' loading={isLoading} disable={isLoading}/>
                </Form>
            )}
        </div>
    );
};

Login.propTypes = {
    signIn: PropTypes.func.isRequired,
    isSignIn: PropTypes.bool,
};

Login.getInitialProps = async (ctx) => {
    if (!_.isEmpty(ctx.query)) {
        const headers = { ...ctx.query };
        updateCookies(headers, ctx);
        redirect('/', ctx);
    }
};

export default Login;
