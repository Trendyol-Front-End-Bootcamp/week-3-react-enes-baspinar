import "./Character.scss";
import React from "react";
import { Link } from "react-router-dom";

function Character(props) {
  const { name, status, gender, location, avatar } = props;

  return (
    <li className="characters-content__character-card">
      <Link to="/">
        <div className="characters-content__character-img-container">
          <img src={avatar} alt="" />
        </div>
        <div className="characters-content__character-info">
          <h3>{name}</h3>
          <ul>
            <li>{status}</li>
            <li>{gender}</li>
            <li>{location}</li>
          </ul>
        </div>
      </Link>
    </li>
  );
}

export default Character;
