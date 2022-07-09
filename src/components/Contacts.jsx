import React from "react";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

const Contacts = () => {
  return (
    <section id="contacts" className="s-contact ss-dark target-section">
      <div className="row heading-block" data-aos="fade-up">
        <div className="column large-full">
          <h2 className="section-heading">Let's get in touch!</h2>
        </div>
      </div>

      <div className="row contact-main" data-aos="fade-up">
        <div className="column large-full">
          <p className="section-desc">
            I'm happy to connect regarding any business, employment, or
            personal-related matters.
          </p>
          <p style={{ color: "#ffffff" }}>
            P.S.: Plus points if we can talk about your favourite book(s)!
          </p>
          <p className="section-desc">
            <a href="mailto:wilsonwidyadhana681@gmail.com">Send me an email!</a>
          </p>
        </div>
      </div>

      <div
        className="row contact-infos"
        data-aos="fade-up"
        data-aos-anchor=".contact-main"
      >
        <div className="column large-5 medium-full contact-phone">
          <h4>Call Me</h4>
          <a href="tel:197-543-2345">+197 543 2345</a>
        </div>

        <div className="column large-7 medium-full contact-social">
          <h4>Social</h4>
          <ul>
            <li>
              <a href="#0" title="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#0" title="Twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="#0" title="Instagram">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
