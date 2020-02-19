import "./Login.scss";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Segment } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

const Login = ({ signIn, isSignIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSignIn = (e) => {
    e.preventDefault();
    const requestData = JSON.stringify({ user: user });
    setIsLoading(true);
    signIn(requestData)
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };
  return (
    <div className="login-wrap">
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
            onChange={(e, {value}) => setUser({ ...user, email: value })}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type='password'
            value={user.password}
            onChange={(e, {value}) => setUser({ ...user, password: value })}
            placeholder="Password"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

Login.prototypes = {
  signIn: PropTypes.func.isRequired,
  isSignIn: PropTypes.bool
};

export default Login;
