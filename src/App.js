import "./App.scss";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import CharacterPage from "./views/CharacterPage/CharacterPage";
import CharactersPage from "./views/CharactersPage/CharactersPage";

function App() {
  const [apiUrl, setApiUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCharacterList(data.results));
  }, [apiUrl]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/characters/:name">
          <CharacterPage />
        </Route>
        <Route exact path="/characters/">
          <CharactersPage characterList={characterList} setApiUrl={setApiUrl} />
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
