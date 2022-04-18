import React from 'react';
import './SocialLogin.css'
import google from '../../images/social/google.png'
import { Col } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    let handleLoginSocial = async () => {
        await signInWithGoogle();

  };
  let googleError;
  if (error) {
    googleError = error?.message
  }
    if (loading) {
        
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
      <div className="google">
        <div className="or">
          <Col className="left"></Col>
          <h3>OR</h3>
          <Col className="right"></Col>
        </div>
        <div className="text-center">
          <p className="text-danger">{googleError}</p>
        </div>
        <button onClick={handleLoginSocial}>
          <img src={google} alt="" />
          <span>Google</span>
        </button>
      </div>
    );
};

export default SocialLogin;