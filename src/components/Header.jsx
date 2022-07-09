import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";
import SiteLogo from "./images/logo.svg";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header id="header" className="s-header">
      <div className="header-logo">
        <a className="site-logo" href="#intro" title="intro">
          <Image src={SiteLogo} alt="Homepage" />
        </a>
      </div>

      <nav className="header-nav-wrap">
        <ul className="header-main-nav">
          <li className="current">
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

        <ul className="header-social">
          <li>
            <a href="#0">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-dribbble" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-behance" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>

      <a
        className="header-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-controls="menu"
        aria-expanded={isMenuOpen}
      >
        <span>Menu</span>
      </a>
    </header>
  );
};

export default Header;
