import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';

const Login = () => {
  const navigate = useNavigate();
    const emailRef = useRef("");
  const passwordRef = useRef("");
  
  const [signInWithEmailAndPassword, user,error] =
    useSignInWithEmailAndPassword(auth);
  
  let handleLogInForm = (event) => {
    event.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    navigate("/");
  };
  const [sendPasswordResetEmail, sending, resetEmailError] =
    useSendPasswordResetEmail(auth);
  
  let handleForgot = async () => {
    let email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    console.log(sending);
  };
    return (
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <h2 className="mt-3 mb-4 text-uppercase">Welcome back</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button variant="link" onClick={handleForgot}>
                Forgot your password?
              </Button>
              <br />
              <button
                onClick={handleLogInForm}
                className="all-service-btn mt-2 text-uppercase"
                type="submit"
              >
                LogIn
              </button>
            </Form>
            <p className="mt-2">
              Create a new account, <Link to={"/signup"}>Please SignUp</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
};

export default Login;