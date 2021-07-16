import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      {/* Header Content - Start */}
      <div className="header__content">
        {/* Logo - Start */}
        <Link to="/">
          <img src={Logo} alt="logo" className="header__logo" height="55" />
        </Link>
        {/* Logo - End */}
      </div>
      {/* Header Content - End */}
      {/* Author Info - Start */}
      <div className="header__author">
        {/* Socials - Start */}
        <ul className="header__socials">
          {/* Social - Start */}
          <li>
            {/* Social Link - Start */}
            <a href="https://www.linkedin.com/in/enesbaspinar" target="__blank">
              <FaLinkedin className="header__social-icon" />
            </a>
            {/* Social Link - End */}
          </li>
          {/* Social - End */}
          {/* Social - Start */}
          <li>
            {/* Social Link - Start */}
            <a href="https://github.com/baspinarenes">
              <FaGithub className="header__social-icon" />
            </a>
            {/* Social Link - End */}
          </li>
          {/* Social - End */}
          {/* Social - Start */}
          <li>
            {/* Social Link - Start */}
            <a href="https://twitter.com/enesbaspinar0">
              <FaTwitter className="header__social-icon" />
            </a>
            {/* Social Link - End */}
          </li>
          {/* Social - End */}
          {/* Social - Start */}
          <li>
            {/* Social Link - Start */}
            <a href="http://enesbaspinar.me/">
              <FaGlobe className="header__social-icon" />
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
