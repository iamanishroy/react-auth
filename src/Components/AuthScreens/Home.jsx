import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/AuthHome.css";

const Home = () => {
  return (
    <div className="authentication">
      <div className="topbar">
        <img src="./logo.png" alt="" />
        <br />
        mimify
      </div>
      <div className="show">
        <img src="./undraw_happy_feeling_slmw (1).svg" alt="" />
        <h3>LEARN ON THE GO</h3>
        <p>Master your skills with fun and learn from very fundamental</p>
      </div>
      <div className="buttons">
        <NavLink to="/signup" exact>
          <button>Sign up</button>
        </NavLink>
        <NavLink to="/signin" exact>
          <button id="si">Sign in</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
