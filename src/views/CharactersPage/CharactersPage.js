import "./CharactersPage.scss";
import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import Character from "../../components/Character/Character";

import FullListCaps from "../../assets/full-list-caps.png";
import FilteredListCaps from "../../assets/filtered-list-caps.png";
import EmptyListCaps from "../../assets/empty-list-caps.png";

function CharactersPage({ characterList, setApiUrl }) {
  let pageCaps = null;
  console.log(characterList);

  if (characterList === [] || characterList === undefined) {
    pageCaps = EmptyListCaps;
  } else if (characterList.length === 20) {
    pageCaps = FullListCaps;
  } else {
    pageCaps = FilteredListCaps;
  }

  return (
    <main className="characters-content">
      <aside>
        <FilterSection setApiUrl={setApiUrl} />
        <div
          className="characters-content__caps-container"
          style={{
            backgroundImage: `url(${pageCaps})`,
          }}
        />
      </aside>
      <section className="characters-content__characters-section">
        <h2>List of characters</h2>
        <ul className="characters-content__characters">
          {!characterList ? (
            <div>The character was not found.</div>
          ) : (
            characterList.map((character) => (
              <Character
                key={character.id}
                characterList={characterList}
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
