import React from "react";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

const Menu = ({ isMenuOpen }) => {
  return (
    <>
      <div className={`header-menu-${isMenuOpen ? "open" : "close"}`}>
        <ul className="header-main-nav">
          <li>
            <a href="#intro" title="intro">
              Intro
            </a>
          </li>
          <li>
            <a href="#about" title="about">
              About
            </a>
          </li>
          <li>
            <a href="#services" title="services">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" title="portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contacts" title="contacts">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
