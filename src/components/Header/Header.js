import "./Header.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

function Header() {
  return (
    <header className="page-header">
      {/* Header Content - Start */}
      <div className="page-header__content">
        {/* Logo - Start */}
        <Link to="/">
          <img src="" alt="" className="page-header__logo" />
        </Link>
        {/* Logo - End */}
        {/* Navigation - Start */}
        <nav className="page-header__navigation">
          <ul className="page-header__links">
            {/* Navigation Item - Start */}
            <li className="page-header__link">
              <NavLink to="/characters">Characters</NavLink>
            </li>
            {/* Navigation Item - End */}
            {/* Navigation Item - Start */}
            <li className="page-header__link">
              <NavLink to="/character/enes">Enes</NavLink>
            </li>
            {/* Navigation Item - End */}
          </ul>
        </nav>
        {/* Navigation - End */}
      </div>
      {/* Header Content - End */}
      {/* Author Info - Start */}
      <div className="page-header__author">
        Enes Başpınar
        {/* Socials - Start */}
        <ul className="page-header__socials">
          {/* Social - Start */}
          <li className="page-header__social">
            {/* Social Link - Start */}
            <a
              href="https://www.linkedin.com/in/enesbaspinar"
              className="page-header__social-link"
            >
              <FaLinkedin className="page-header__social-icon" />
            </a>
            {/* Social Link - End */}
          </li>
          {/* Social - End */}
          {/* Social - Start */}
          <li className="page-header__social">
            {/* Social Link - Start */}
            <a
              href="https://github.com/baspinarenes"
              className="page-header__social-link"
            >
              <FaGithub className="page-header__social-icon" />
            </a>
            {/* Social Link - End */}
          </li>
          {/* Social - End */}
          {/* Social - Start */}
          <li className="page-header__social">
            {/* Social Link - Start */}
            <a
              href="https://twitter.com/enesbaspinar0"
              className="page-header__social-link"
            >
              <FaTwitter className="page-header__social-icon" />
            </a>
            {/* Social Link - End */}
          </li>
          {/* Social - End */}
          {/* Social - Start */}
          <li className="page-header__social">
            {/* Social Link - Start */}
            <a
              href="http://enesbaspinar.me/"
              className="page-header__social-link"
            >
              <FaGlobe className="page-header__social-icon" />
            </a>
            {/* Social Link - End */}
          </li>
          {/* Social - End */}
        </ul>
        {/* Socials - End */}
      </div>
      {/* Author Info - End */}
    </header>
  );
}

export default Header;
