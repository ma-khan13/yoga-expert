import { useRef} from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from '../../SocialLogin/SocialLogin';
const Signup = () => {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [createUserWithEmailAndPassword, user,loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  
  const [sendEmailVerification] =
    useSendEmailVerification(auth);
  
  const [updateProfile] = useUpdateProfile(auth);

  const handleSignUpForm = async (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name});
    await sendEmailVerification();
  };

  let signUpError;
  if (error) {
    signUpError = error?.message;
  }
  if (loading) {

  }
  if (user) {
    console.log(user);
    return navigate("/");
  }
    return (
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col md={6} className="mx-auto">
            <h2 className="mt-3 mb-4 text-uppercase">Please sign up</h2>
            <Form onSubmit={handleSignUpForm}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  ref={nameRef}
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
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
                  placeholder="Enter Password"
                  required
                />
                <p className="text-danger">{signUpError}</p>
              </Form.Group>
              <button
                className="all-service-btn mt-2 text-uppercase"
                type="submit"
              >
                Sign Up
              </button>
            </Form>
            <p className="mt-2">
              If you already have an account,
              <Link to={"/login"}>Just LogIn</Link>
            </p>
            <SocialLogin></SocialLogin>
          </Col>
        </Row>
      </Container>
    );
};

export default Signup;