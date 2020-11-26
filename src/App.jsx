import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/AuthScreens/Home";
import SignUp from "./Components/AuthScreens/SignUp";
import SignIn from "./Components/AuthScreens/SignIn";
import "./App.css";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </>
  );
}

export default App;
