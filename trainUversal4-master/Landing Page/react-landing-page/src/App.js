import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "views/Landing.js";
import SignIn from "views/signin";
import Module from "views/modules";

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path={`/login`} component={SignIn} />
          <Route path={`/modules`} component={Module} />
          <Redirect from="/" to="/#" />
        </Switch>
      </div>
    );
  }
}
export default App;
