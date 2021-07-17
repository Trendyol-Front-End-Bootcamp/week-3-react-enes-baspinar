import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/rick-and-morty-logo.png";

function Header() {
  return (
    <header className="header">
      {/* Header Content - Start */}
      <div className="header__logo">
        {/* Logo - Start */}
        <Link to="/">
          <img src={Logo} alt="" height="70" />
        </Link>
        {/* Logo - End */}
      </div>
      {/* Header Content - End */}
      {/* Socials - Start */}
      <div className="header__socials">
        {/* Social List - Start */}
        <ul className="header__social-list">
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
        </ul>
        {/* Social List - End */}
      </div>
      {/* Socials - End */}
    </header>
  );
}

export default Header;
