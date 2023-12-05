import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/users/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Signup</h1>
    <div>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="username"
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value
          })}
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })}
          placeholder="Enter password"
        />
      </div>
      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
      </div>
    </div>
  );
}

export default Signup;
