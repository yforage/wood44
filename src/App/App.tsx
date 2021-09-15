import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { SinglePage } from "./pages/SinglePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/wood44" component={SinglePage} />
        <Redirect to="/wood44" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
