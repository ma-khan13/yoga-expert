import React, { useRef} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  
  const [signInWithEmailAndPassword, user,loading,error] =
    useSignInWithEmailAndPassword(auth);

  let handleLogInForm =async (event) => {
    event.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    
  };
  let signinError; 
  if (error) {
    signinError = error?.message;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const [sendPasswordResetEmail, sending, resetEmailError] =
    useSendPasswordResetEmail(auth);
  
  let handleForgot = async () => {
    let email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Please check your email sent a mail");
  };


    return (
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col md={6} className="mx-auto">
            <h2 className="mt-3 mb-4 text-uppercase">Welcome back</h2>
            <Form onSubmit={handleLogInForm}>
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
                <p className="text-danger">{signinError}</p>
              </Form.Group>
              <Button variant="link" onClick={handleForgot}>
                Forgot your password?
              </Button>
              <br />
              <button
                className="all-service-btn mt-2 text-uppercase"
                type="submit"
              >
                LogIn
              </button>
            </Form>
            <p className="mt-2">
              Create a new account, <Link to={"/signup"}>Please SignUp</Link>
            </p>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 5000,
                style: {
                  background: "green",
                  color: "#fff",
                },
              }}
            />
            <SocialLogin></SocialLogin>
          </Col>
        </Row>
      </Container>
    );
};

export default Login;