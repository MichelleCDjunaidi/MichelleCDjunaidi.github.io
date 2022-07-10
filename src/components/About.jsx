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
              I am exploring my career interests in software design and development.
              I'm open for any work opportunities, 
              especially ones where I can help communities around me.
            </p>

            <p>
              Alongside learning more about programming, I also love to draw, play the piano,
              and reading books. It helps with exploring new designs, whether they are software 
              or graphic designs.
            </p>

            <p>
              As I've mentioned before, I'd also generally love to meet and get
              to know you on a personal level -- just drop me an email at{" "}
              <a href="mailto:michellechrisalyn@gmail.com">
                michellechrisalyn[at]gmail[dot]com
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
                  <p className="timeline__timeframe">May 2022 - current</p>
                  <h3 className="item-title">Singapore University of Technology and Design</h3>
                  <h5>Data Analyst in University Research Project (UROP)</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                  Processing and analyzing data for the UROP titled Design Thinking - Harvesting
                  And Analyzing Data On Student Performance And Creativity.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">Feb 2022 - current</p>
                  <h3 className="item-title">Perhimpunan Mahasiswa SUTD Indonesia (PADI)</h3>
                  <h5>IT Specialist</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                  Maintains the website, emails, and other IT systems for the entire CCA club. 
                  Also handles documentation forms and troubleshoots issues.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">Jun 2020 - Present</p>
                  <h3 className="item-title">Deux Math</h3>
                  <h5>Lead Graphic Designer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Increases engagement (likes, follows, shares)
                    by 10x with engaging and eye-catching Instagram post designs.
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
                  <p className="timeline__timeframe">September 2021 - present</p>
                  <p style={{ margin: "-7px 0 -5px 0" }}>Singapore</p>
                  <h3 className="item-title">
                    Singapore University of Technology and Design
                  </h3>
                  <h5>
                    Bachelor of Engineering in Computer Science and Design
                  </h5>
                </div>
                <div className="timeline__desc">
                  <ul>
                    <li>
                      Recipient of the ASEAN Undergraduate Scholarship, which
                      covers all tuition fees after subsidies and provides for a
                      yearly stipend. Given for ASEAN students with outstanding qualifications, 
                      exemplary Co-Curricular Activities records, and good leadership potential.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <p className="timeline__timeframe">July 2018 - May 2021</p>
                  <p style={{ margin: "-7px 0 -5px 0" }}>Jakarta, Indonesia</p>
                  <h3 className="item-title">SMAK Ipeka Puri</h3>
                  <h5>Senior High School Diploma</h5>
                </div>
                <div className="timeline__desc">
                  <ul>
                    <li>
                      Won a bronze medal at the 2020 Indonesian Senior High
                      National Science Olympiad in Mathematics.
                    </li>
                    <br />
                    <li>
                      Gold Award in 
                      Southeast Asian Mathematical Olympiad (SEAMO) 2019.
                    </li>
                    <br />
                    <li>
                      Gold Award in Senior Section of 
                      Singapore Mathematical Olympiad (SMO) 2018.
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
