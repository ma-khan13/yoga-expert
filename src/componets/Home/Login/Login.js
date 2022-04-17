import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <h2 className="mt-3 mb-4 text-uppercase">Welcome back</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
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
          </Col>
        </Row>
      </Container>
    );
};

export default Login;