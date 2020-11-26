import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/AuthScreens/Home";
import SignUp from "./Components/AuthScreens/SignUp";
import SignIn from "./Components/AuthScreens/SignIn";
import Terms from "./Components/AuthScreens/Terms";
import Privacy from "./Components/AuthScreens/Privacy";
import "./App.css";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
      </Switch>
    </>
  );
}

export default App;
