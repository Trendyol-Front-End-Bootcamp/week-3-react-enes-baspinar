import "./CharacterPage.scss";
import React from "react";

function CharacterPage() {
  return (
    <main className="character-content">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/317.jpeg"
        alt=""
      />
      <section className="character-content__title-section">
        <h2>Shmlonathan Shmlower</h2>
      </section>
      <section className="character-content__info-section">
        <div className="character-content__infos">
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">Alive</h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">Alive</h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">Alive</h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">Alive</h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">Alive</h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">Alive</h4>
          </div>
        </div>
        <ul className="character-content__last-episodes">
          <h3>Last Episodes</h3>
          <ul>
            <li>Deneme</li>
            <li>Deneme</li>
            <li>Deneme</li>
            <li>Deneme</li>
          </ul>
        </ul>
      </section>
    </main>
  );
}

export default CharacterPage;
