import React from "react";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="about-me">
        <div className="row heading-block" data-aos="fade-up">
          <div className="column large-full">
            <h2 className="section-heading">About Me</h2>
          </div>
        </div>

        <div className="row about-me__content" data-aos="fade-up">
          <div className="column large-full about-me__text">
            <p className="lead">
              I am a sophomore Computer Science and Design major at the 
              Singapore University of Technology and Design.
            </p>

            <p>
              My career interests lie at the intersection between data science,
              machine learning, and quantitative finance, which I believe the
              programmes I'm currently undertaking at SUTD would help prepare me
              for. I'm open for any work opportunities, especially those that
              can provide me with a platform to directly (and positively) impact
              the various communities around us.
            </p>

            <p>
              Alongside learning more about programming, I also love to draw, play the piano,
              and reading books. It helps with exploring new designs, whether they are software 
              or graphic designs.
            </p>

            <p>
              As I've mentioned before, I'd also generally love to meet and get
              to know you on a personal level -- just drop me an email at{" "}
              <a href="mailto:wilsonwidyadhana681@gmail.com">
                wilsonwidyadhana681[at]gmail[dot]com
              </a>{" "}
              and let's connect!
            </p>
          </div>
        </div>

        <div className="row about-me__buttons">
          <div className="column large-half tab-full" data-aos="fade-up">
            <a href="#0" className="btn btn--stroke full-width">
              Hire Me
            </a>
          </div>
          <div className="column large-half tab-full" data-aos="fade-up">
            <a href="#0" className="btn btn--primary full-width">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="about-experience">
        <div className="row heading-block" data-aos="fade-up">
          <div className="column large-full">
            <h2 className="section-heading">Work & Education</h2>
          </div>
        </div>

        <div className="row about-experience__timeline">
          <div className="column large-half tab-full" data-aos="fade-up">
            <div className="timeline">
              <div className="timeline__icon-wrap">
                <span className="timeline__icon timeline__icon--work"></span>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">July 2018 - Present</p>
                  <h3 className="item-title">Awesome Studio</h3>
                  <h5>Lead Designer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">July 2017 - June 2018</p>
                  <h3 className="item-title">Super Cool Agency</h3>
                  <h5>Frontend Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">March 2016 - June 2017</p>
                  <h3 className="item-title">Epic Design Studio</h3>
                  <h5>Frontend Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column large-half tab-full" data-aos="fade-up">
            <div className="timeline">
              <div className="timeline__icon-wrap">
                <span className="timeline__icon timeline__icon--education"></span>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">August 2021 - present</p>
                  <p style={{ margin: "-7px 0 -5px 0" }}>Singapore</p>
                  <h3 className="item-title">
                    National University of Singapore
                  </h3>
                  <h5>
                    Bachelor of Science (Hons.) in Data Science and Analytics
                    with a Second Major in Computer Science and a Minor in
                    Quantitative Finance
                  </h5>
                </div>
                <div className="timeline__desc">
                  <ul>
                    <li>
                      Recipient of the ASEAN Undergraduate Scholarship, which
                      covers all tuition fees after subsidies and provides for a
                      yearly stipend.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">July 2018 - May 2021</p>
                  <p style={{ margin: "-7px 0 -5px 0" }}>Jakarta, Indonesia</p>
                  <h3 className="item-title">SMAK 1 PENABUR Jakarta</h3>
                  <h5>Senior High School Diploma</h5>
                </div>
                <div className="timeline__desc">
                  <ul>
                    <li>
                      Won a bronze medal at the 2019 Indonesian Senior High
                      National Science Olympiad in Physics.
                    </li>
                    <li>
                      Ranked third best in the Science Stream of my batch in
                      Year 11.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
