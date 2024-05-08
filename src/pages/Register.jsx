import React, { useState } from "react";
import useFirebaseCall from "../hooks/useFirebaseCall";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { createUser } = useFirebaseCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
    console.log(firstName, lastName);
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        handleSubmit(e);
    }
  }


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
            <div className="d-flex justify-content-center align-items-center h-100 bg-light">
              <form className="p-4 rounded bg-light" onSubmit={handleSubmit}>
                <h2 className="text-danger text-center">Sign Up</h2>
                <div className="mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    required
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
                <button className="btn btn-danger btn-block" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
