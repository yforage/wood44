import React from "react";

import { Switch, Redirect, Route } from "react-router-dom";

import { SinglePage } from "./pages/SinglePage";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={SinglePage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
