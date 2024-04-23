import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import usersData from "./users.json";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch the existing user data
      const userData = usersData;

      // Check if the email already exists
      const existingUser = userData.users.find((user) => user.email === email);
      if (existingUser) {
        alert("Email already registered. Please try another email.");
        return;
      }

      // Add the new user to the existing data
      userData.users.push({ email, password });

      // Save the updated user data
      console.log("Updated user data:", userData);

      // Navigate the user to the "/home" route
      navigate("/home");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="./image.png" alt="signup img" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">REGISTER</p>
              </div>

              {/* Name */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Your Name"
                />
              </div>
              {/* Reg. No */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Reg. No."
                />
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
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
