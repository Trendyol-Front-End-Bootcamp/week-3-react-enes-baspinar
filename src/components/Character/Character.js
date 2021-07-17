import "./Character.scss";
import React from "react";
import { Link } from "react-router-dom";

function Character(props) {
  const { id, name, status, gender, location, avatar } = props;

  const characterLink = name.toLowerCase().replace(/\s/g, "-");

  return (
    <li className="characters-content__character-card">
      <Link to={`/characters/${id}`}>
        <div className="characters-content__character-img-container">
          <img src={avatar} alt="" />
        </div>
        <div className="characters-content__character-info">
          <h3>{name}</h3>
          <ul>
            <li>{status === "unknown" ? "Unknown" : status}</li>
            <li>{gender === "unknown" ? "Unknown" : gender}</li>
            <li>{location === "unknown" ? "Unknown" : location}</li>
          </ul>
        </div>
      </Link>
    </li>
  );
}

export default Character;
