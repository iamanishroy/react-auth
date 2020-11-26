import React from "react";
import "../Style/AuthSignUp.css";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="auth">
      <div className="topNav">
        <NavLink to="/" exact>
          <button>
            <i className="fas fa-arrow-left"></i>
          </button>
        </NavLink>
      </div>
      <div className="main">
        <h3>
          Welcome <br /> Back
        </h3>
        <div className="form">
          <b>Your Email</b>
          <div className="inputSet marg-bott">
            <input type="email" id="email" />
          </div>
          <b>Password</b>
          <div className="inputSet pass">
            <input type="text" id="pass" />
            <i
              className="far fa-eye"
              id="togglePassword"
              onClick={(el) => {
                el.target.classList.toggle("fa-eye-slash");
                if (el.target.previousElementSibling.type === "text") {
                  el.target.previousElementSibling.type = "password";
                } else {
                  el.target.previousElementSibling.type = "text";
                }
              }}
            ></i>
          </div>
          <div className="agreement"></div>
          <div className="buttons">
            <button>Create account</button>
          </div>
          <div className="buttons">
            <button id="gog">
              <i className="fab fa-google"></i>
              &nbsp;&nbsp; Sign In with Google
            </button>
          </div>
        </div>
        <div className="lower">
          <p>
            Don't have an account?
            &nbsp;
            <NavLink to="/signup" exact>
              Create Account
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
