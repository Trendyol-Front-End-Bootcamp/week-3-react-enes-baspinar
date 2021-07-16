import "./CharactersPage.scss";
import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import Character from "../../components/Character/Character";

import FullListCaps from "../../assets/full-list-caps.png";
//  import FilteredListCaps from "../../assets/filtered-list-caps.png";
// import EmptyListCaps from "../../assets/empty-list-caps.png";

function CharactersPage({ characterList, setApiUrl }) {
  return (
    <main className="characters-content">
      <aside>
        <FilterSection setApiUrl={setApiUrl} />
        <div
          className="characters-content__caps-container"
          style={{ backgroundImage: `url(${FullListCaps})` }}
        />
      </aside>
      <section className="characters-content__characters-section">
        <h2>List of characters</h2>
        <ul className="characters-content__characters">
          {!characterList ? (
            <div>error</div>
          ) : (
            characterList.map((character) => (
              <Character
                key={character.id}
                name={character.name}
                status={character.status}
                gender={character.gender}
                species={character.species}
                location={character.location.name}
                avatar={character.image}
              />
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default CharactersPage;
