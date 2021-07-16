import "./Header.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

function Header() {
  return (
    <header className="page-header">
      <Link to="/">
        <img src="" alt="" className="page-header__logo" />
        <span className="page-header__title">Rick and Morty</span>
      </Link>
      <nav className="page-header__navigation">
        <ul className="page-header__links">
          <li className="page-header__link">
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li className="page-header__link">
            <NavLink to="/character/enes">Enes</NavLink>
          </li>
        </ul>
      </nav>
      <div className="page-header__designer">
        Enes Başpınar
        <ul className="page-header__socials">
          <li className="page-header__social">
            <a
              href="https://www.linkedin.com/in/enesbaspinar"
              className="page-header__social-link"
            >
              <FaLinkedin className="page-header__social-icon" />
            </a>
          </li>
          <li className="page-header__social">
            <a
              href="https://github.com/baspinarenes"
              className="page-header__social-link"
            >
              <FaGithub className="page-header__social-icon" />
            </a>
          </li>
          <li className="page-header__social">
            <a
              href="https://twitter.com/enesbaspinar0"
              className="page-header__social-link"
            >
              <FaTwitter className="page-header__social-icon" />
            </a>
          </li>
          <li className="page-header__social">
            <a
              href="http://enesbaspinar.me/"
              className="page-header__social-link"
            >
              <FaGlobe className="page-header__social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
