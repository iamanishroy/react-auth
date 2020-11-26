import React from "react";
import "../Style/AuthSignUp.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
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
          Create <br /> Account
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
          <div className="agreement">
            <input
              type="checkbox"
              id="fruit4"
              name="fruit-4"
              value="Strawberry"
            />
            <label htmlFor="fruit4">
              <p>
                I agree to the <a href="/">Terms & Conditions</a> and{" "}
                <a href="/">Privacy Policy</a>
              </p>
            </label>
          </div>
          <div className="buttons">
            <button>Create account</button>
          </div>
          <div className="buttons">
            <button id="gog">
              <i className="fab fa-google"></i>
              &nbsp;&nbsp; Sign Up with Google
            </button>
          </div>
        </div>
        <div className="lower">
          <p>
            Already have an account?
            <NavLink to="/signin" exact>
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
