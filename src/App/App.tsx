import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { SinglePage } from "./pages/SinglePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SinglePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
