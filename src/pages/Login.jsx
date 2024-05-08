import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/GoogleIcon";
import useFirebaseCall from "../hooks/useFirebaseCall";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {signIn, signUpWithGoogle, forgotPassword} = useFirebaseCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    //console.log(email, password);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        handleSubmit(e);
    }
  }

  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://picsum.photos/800/800"
            alt="sample-movie"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center h-100">
            <form className="p-4 rounded bg-light" onSubmit={handleSubmit}>
              <h2 className="text-danger text-center">Login</h2>
              <div className="mb-3">
                <input
                  type="email"
                  required
                  autoFocus
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span
                  role="button"
                  className="cursor-pointer text-muted"
                  onClick={() => forgotPassword(email)}
                >
                  Forgot Password
                </span>
                <Link className="text-muted" to="/register">
                  Sign Up
                </Link>
              </div>
              <button
                className="btn btn-danger btn-block mb-3"
                type="submit"
              >
                Login
              </button>
              <button
                className="btn btn-danger btn-block d-flex align-items-center justify-content-between"
                type="button"
                onClick={handleGoogleProvider}
              >
                Continue with Google <GoogleIcon color="currentColor" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
