import React from "react";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

const Intro = () => {
  return (
    <section id="intro" className="s-intro target-section">
      <div className="row intro-content">
        <div className="column large-9 mob-full intro-text">
          <h3>
            Nice to meet you! <br />
            I'm Michelle Chrisalyn Djunaidi. <span className="wave">👋</span>
          </h3>
          <h1
            style={{
              padding: "10px",
              marginRight: "100px",
              marginLeft: "-10px",
            }}
          >
            Software engineer <br />
            and web developer <br />
            based in{" "}
            <a href="https://goo.gl/maps/E8XsXyTufpLDT5B88">Singapore</a>.{" "}
            <br />
            🇸🇬
          </h1>
        </div>

        <div className="intro-scroll">
          <a href="#about" className="intro-scroll-link smoothscroll">
            Scroll For More
          </a>
        </div>

        <div className="intro-grid"></div>
        <div className="intro-pic"></div>
      </div>
    </section>
  );
};

export default Intro;
