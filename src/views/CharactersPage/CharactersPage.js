import "./CharactersPage.scss";
import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import Character from "../../components/Character/Character";
import Pagination from "../../components/Pagination/Pagination";
import FullListCaps from "../../assets/full-list-caps.png";
import FilteredListCaps from "../../assets/filtered-list-caps.png";
import EmptyListCaps from "../../assets/empty-list-caps.png";

function CharactersPage({
  characterList,
  apiUrl,
  setApiUrl,
  characterCount,
  page,
  setPage,
}) {
  let pageCaps = null;

  if (!characterList.length) {
    pageCaps = EmptyListCaps;
  } else if (characterList.length === 20) {
    pageCaps = FullListCaps;
  } else {
    pageCaps = FilteredListCaps;
  }

  return (
    <main className="characters-content">
      <aside>
        <FilterSection apiUrl={apiUrl} setApiUrl={setApiUrl} />
        <img className="characters-content__caps" src={pageCaps} alt="" />
      </aside>
      <section className="characters-content__characters-section">
        <div className="characters-content__header">
          <h2>List of characters</h2>
          <Pagination
            setApiUrl={setApiUrl}
            characterCount={characterCount}
            page={page}
            setPage={setPage}
          />
        </div>
        <ul className="characters-content__characters">
          {!characterList.length ? (
            <div>The character was not found.</div>
          ) : (
            characterList.map((character) => (
              <Character
                key={character.id}
                id={character.id}
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
