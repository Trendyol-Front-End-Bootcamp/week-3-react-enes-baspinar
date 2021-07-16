import "./App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Character from "./views/Character/Character";
import Characters from "./views/Characters/Characters";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/character/:name">
          <Character />
        </Route>
        <Route path="/characters/">
          <Characters />
        </Route>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Route exact path="/">
          <Redirect to="/characters" />
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
