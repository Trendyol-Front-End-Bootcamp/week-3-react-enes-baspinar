import "./CharacterPage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CharacterPage(props) {
  const { match } = props;

  const [lastEpisodesNames, setLastEpisodesNames] = useState([]);
  const [character, setCharacter] = useState({});
  const [lastEpisodesIDs, setLastEpisodesIDs] = useState([]);

  useEffect(async () => {
    fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        return data;
      })
      .then((chr) =>
        chr.episode
          .reverse()
          .map((link) => Number(link.match(/\d+/)[0]))
          .slice(0, 5)
      )
      .then((chrLastEpisodesIDs) => {
        setLastEpisodesIDs(chrLastEpisodesIDs);
        return chrLastEpisodesIDs;
      })
      .then((chrLastEpisodesIDs) =>
        fetch(
          `https://rickandmortyapi.com/api/episode/${chrLastEpisodesIDs.join()}`
        )
      )
      .then((response2) => response2.json())
      .then((data) =>
        Array.isArray(data) ? data.sort((a, b) => a - b).reverse() : Array(data)
      )
      .then((chrLastEpisodes) => setLastEpisodesNames(chrLastEpisodes));
  }, []);

  return !Object.keys(character).length ? (
    <div />
  ) : (
    <main className="character-content">
      <img src={character.image} alt="character" />
      <section className="character-content__title-section">
        <Link to="/">
          <FaArrowLeft /> Return characters
        </Link>
        <h2>{character.name}</h2>
      </section>
      <section className="character-content__info-section">
        <div className="character-content__infos">
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">
              {character.status}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Gender:</h4>
            <h4 className="character-content__info-value">
              {character.gender}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Species:</h4>
            <h4 className="character-content__info-value">
              {character.species}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Origin:</h4>
            <h4 className="character-content__info-value">
              {character.origin.name === "unknown"
                ? "Unknown"
                : character.origin.name}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Location:</h4>
            <h4 className="character-content__info-value">
              {character.location.name}
            </h4>
          </div>
        </div>
        <ul className="character-content__last-episodes">
          <h3>Last Episodes</h3>
          <ul>
            {lastEpisodesNames.map((episode) => (
              <li key={episode.id}>
                <span className="character-content__episode-no">
                  {episode.id}.
                </span>
                <span className="character-content__episode-name">
                  {episode.name}
                </span>
              </li>
            ))}
          </ul>
        </ul>
      </section>
    </main>
  );
}

export default CharacterPage;
