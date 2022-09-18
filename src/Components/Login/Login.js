import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../contexts/UserAuthContext";
import styles from './login.module.css';
import instagramlogo from '../../imgs/instagram logo.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("../Homepage");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("../Homepage");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogin = () => {
    navigate("../Homepage");
  }

  return (
    <>
      <div className={styles.loginPopup}>
        <div className={styles.formPopup} id="popupForm">
          <img className={styles.logo} src={instagramlogo} alt={instagramlogo}></img>
          <div className="p-4 box">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-3">

                <Button onClick={handleLogin} variant="primary" type="Submit">
                  Log In
                </Button>
              </div>
            </Form>
            <hr />
            
          </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;