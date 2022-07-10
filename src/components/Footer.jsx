import React from "react";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer>
      <div className="row">
        <div className="column large-full ss-copyright">
          <span>
            Copyright © {thisYear} Michelle Chrisalyn Djunaidi. All rights reserved
          </span>
          <span>
            Design (EPITOME) by{" "}
            <a href="https://www.styleshout.com/">StyleShout</a>
          </span>
        </div>

        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
