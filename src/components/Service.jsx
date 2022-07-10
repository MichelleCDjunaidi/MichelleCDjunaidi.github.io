import React from "react";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

const Service = () => {
  return (
    <section id="services" className="s-services ss-dark target-section">
      <div className="shadow-overlay"></div>

      <div
        className="row heading-block heading-block--center"
        data-aos="fade-up"
      >
        <div className="column large-full">
          <h2 className="section-heading section-heading--centerbottom">
            Skills and Technologies
          </h2>

          <p className="section-desc">
            What I've learned and mastered so far
          </p>
        </div>
      </div>

      <div className="row services-list block-large-1-3 block-medium-1-2 block-tab-full">
        <div className="column item-service" data-aos="fade-up">
          <div className="item-service__content">
            <h4 className="item-title">Software Development (Python, C++)</h4>
            <p>
              Made and contributed to software applications written in Python and C++.
            </p>
          </div>
        </div>

        <div className="column item-service" data-aos="fade-up">
          <div className="item-service__content">
            <h4 className="item-title">Web Development (Javascript, React.js)</h4>
            <p>
              I've created and maintained websites written in Javascript, 
              with many of them using React.js.
            </p>
          </div>
        </div>

        <div className="column item-service" data-aos="fade-up">
          <div className="item-service__content">
            <h4 className="item-title">Graphic Design</h4>
            <p>
              I create graphic designs and illustrations using Adobe Illustrator,
              Clip Studio Paint, and Canva. I've been applying my knowledge in work and
              university projects.
            </p>
          </div>
        </div>

        <div className="column item-service" data-aos="fade-up">
          <div className="item-service__content">
            <h4 className="item-title">Product Strategy</h4>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </div>

        <div className="column item-service" data-aos="fade-up">
          <div className="item-service__content">
            <h4 className="item-title">UI/UX Design</h4>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </div>

        <div className="column item-service" data-aos="fade-up">
          <div className="item-service__content">
            <h4 className="item-title">Mobile Design</h4>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
