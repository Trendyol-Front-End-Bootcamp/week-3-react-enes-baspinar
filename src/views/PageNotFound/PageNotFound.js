import "./PageNotFound.scss";
import React from "react";
import { Link } from "react-router-dom";
import NotFoundCaps from "../../assets/not-found-caps.png";

function PageNotFound() {
  return (
    <main className="not-found-content">
      <img src={NotFoundCaps} alt="" />
      <main className="not-found-content__main">
        <h2>404</h2>
        <p>
          You are lost in the world of Rick and Morty!
          <br />
          <Link to="/"> Return to a familiar place.</Link>
        </p>
      </main>
    </main>
  );
}

export default PageNotFound;
