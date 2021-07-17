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
  const [characterList, setCharacterList] = useState([]);
  const [characterCount, setCharacterCount] = useState(0);
  const [page, setPage] = React.useState(0);
  const [apiUrl, setApiUrl] = useState(
    `https://rickandmortyapi.com/api/character/`
  );

  // Fetch characters from Rick and Morty api
  useEffect(() => {
    fetch(`${apiUrl}?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacterList(data.results);
        setCharacterCount(data.info.count);
      });
  }, [apiUrl]);

  console.log(apiUrl);

  return (
    <Router>
      <Header />
      <Switch>
        {/* Character Page Route - Start */}
        <Route
          exact
          path="/characters/:id"
          render={(props) =>
            // Redirect 404 if the link format is "characters/{invalid}"
            !Number(props.match.params.id) ? (
              <Redirect to="/404" />
            ) : (
              <CharacterPage {...props} characterList={characterList} />
            )
          }
        />
        {/* Character Page Route - End */}
        {/* Characters Page Route - Start */}
        <Route exact path="/characters">
          <CharactersPage
            characterList={characterList}
            setApiUrl={setApiUrl}
            characterCount={characterCount}
            page={page}
            setPage={setPage}
          />
        </Route>
        {/* Characters Page Route - End */}
        {/* 404 Page Route - Start */}
        <Route path="/404">
          <PageNotFound />
        </Route>
        {/* 404 Page Route - End */}
        {/* Home (Redirect Characters Page) Route - Start */}
        <Route exact path="/">
          <Redirect to="/characters" />
        </Route>
        {/* Home (Redirect Characters Page) Route - End */}
        {/* Others 404 Page Redirect - Start */}
        <Redirect from="*" to="/404" />
        {/* Others 404 Page Redirect - End */}
      </Switch>
    </Router>
  );
}

export default App;
