import React, { useState } from "react";
import usersData from "./users.json";
import { useNavigate, Link } from "react-router-dom";
import "../components/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Find the user in the users.json file
    const user = usersData.users.find(
      (user) => user.email === email && user.password === password
    );

    // If the user is found, navigate to the "/home" route
    if (user) {
      setEmail("");
      setPassword("");
      setError("");
      navigate("/home");
    } else {
      // Otherwise, set the error message
      setError("Invalid email or password");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="./image.png" alt="login-img" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">LOGIN</p>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "11.2rem", paddingRight: "11.2rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="" className="link-danger">
                    <Link to="/signup">Signup</Link>
                  </a>
                </p>
                {error && (
                  <p className="small fw-bold mt-2 pt-1 mb-0">{error}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
