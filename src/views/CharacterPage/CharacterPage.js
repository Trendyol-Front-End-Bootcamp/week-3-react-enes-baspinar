import "./CharacterPage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CharacterPage(props) {
  const { match, characterList } = props;

  const [lastEpisodesName, setLastEpisodesName] = useState([]);

  const characterName = match.params.name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(" A ", " a ")
    .replace(" In ", " in ");
  console.log(characterName);

  const characterObj = characterList.find((chr) => chr.name === characterName);

  console.log(characterObj);

  useEffect(() => {
    const lastEpisodesID = characterObj.episode
      .map((link) => Number(link.match(/\d+/)[0]))
      .sort((a, b) => b - a)
      .slice(0, 5);

    fetch(`https://rickandmortyapi.com/api/episode/${lastEpisodesID.join()}`)
      .then((response) => response.json())
      .then((data) =>
        setLastEpisodesName(Array.isArray(data) ? data.reverse() : [data])
      );
  }, []);

  return (
    <main className="character-content">
      <img src={characterObj.image} alt="character" />
      <section className="character-content__title-section">
        <Link to="/">
          <FaArrowLeft /> Return characters
        </Link>
        <h2>{characterObj.name}</h2>
      </section>
      <section className="character-content__info-section">
        <div className="character-content__infos">
          <div className="character-content__info">
            <h4 className="character-content__info-name">Status:</h4>
            <h4 className="character-content__info-value">
              {characterObj.status}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Gender:</h4>
            <h4 className="character-content__info-value">
              {characterObj.gender}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Species:</h4>
            <h4 className="character-content__info-value">
              {characterObj.species}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Origin:</h4>
            <h4 className="character-content__info-value">
              {characterObj.origin.name}
            </h4>
          </div>
          <div className="character-content__info">
            <h4 className="character-content__info-name">Location:</h4>
            <h4 className="character-content__info-value">
              {characterObj.location.name}
            </h4>
          </div>
        </div>
        <ul className="character-content__last-episodes">
          <h3>Last Episodes</h3>
          <ul>
            {lastEpisodesName.map((episode) => (
              <li key={episode.id}>{episode.name}</li>
            ))}
          </ul>
        </ul>
      </section>
    </main>
  );
}

export default CharacterPage;
