import "./Login.scss";
import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Segment } from "semantic-ui-react";
import { Image } from "semantic-ui-react";


const Login = () => {
  const handleSignIn = () => {
    console.log("handleSignIn");
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
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

Login.prototypes = {

};

export default Login;
