import React from "react";
import { Image } from "react-bootstrap";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="s-works target-section">
      <div
        className="row heading-block heading-block--center"
        data-aos="fade-up"
      >
        <div className="column large-full">
          <h2 className="section-heading section-heading--centerbottom">
            Selected Works
          </h2>
          <p className="section-desc">
            Here are some of my selected works I have done lately. Feel free to
            check them out.
          </p>
        </div>
      </div>

      <div className="masonry-wrap">
        <div className="masonry">
          <div className="grid-sizer"></div>

          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="images/portfolio/gallery/g-city-building.jpg"
                  className="thumb-link"
                  title="Shutterbug"
                  data-size="1050x700"
                >
                  <Image src="images/portfolio/city-building.jpg" alt="" />
                </a>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                  target="_blank"
                ></a>
              </div>

              <div className="item-folio__text">
                <h4 className="item-folio__title">City Building</h4>
                <p className="item-folio__cat">Branding</p>
              </div>

              <div className="item-folio__caption">
                <p>
                  Vero molestiae sed aut natus excepturi. Et tempora numquam.
                  Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="images/portfolio/gallery/g-woodcraft.jpg"
                  className="thumb-link"
                  title="Woodcraft"
                  data-size="1050x700"
                >
                  <Image src="images/portfolio/woodcraft.jpg" alt="" />
                </a>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                  target="_blank"
                ></a>
              </div>
              <div className="item-folio__text">
                <h4 className="item-folio__title">Woodcraft</h4>
                <p className="item-folio__cat">Web Design</p>
              </div>
              <div className="item-folio__caption">
                <p>
                  Vero molestiae sed aut natus excepturi. Et tempora numquam.
                  Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="images/portfolio/gallery/g-beetle.jpg"
                  className="thumb-link"
                  title="The Beetle Car"
                  data-size="1050x700"
                >
                  <Image src="images/portfolio/the-beetle.jpg" alt="" />
                </a>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                  target="_blank"
                ></a>
              </div>
              <div className="item-folio__text">
                <h4 className="item-folio__title">The Beetle</h4>
                <p className="item-folio__cat">Web Development</p>
              </div>
              <div className="item-folio__caption">
                <p>
                  Vero molestiae sed aut natus excepturi. Et tempora numquam.
                  Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="images/portfolio/gallery/g-shutterbug.jpg"
                  className="thumb-link"
                  title="Grow Green"
                  data-size="1050x700"
                >
                  <Image src="images/portfolio/shutterbug.jpg" alt="" />
                </a>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                  target="_blank"
                ></a>
              </div>
              <div className="item-folio__text">
                <h4 className="item-folio__title">Shutterbug</h4>
                <p className="item-folio__cat">Branding</p>
              </div>
              <div className="item-folio__caption">
                <p>
                  Vero molestiae sed aut natus excepturi. Et tempora numquam.
                  Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="images/portfolio/gallery/g-lamp.jpg"
                  className="thumb-link"
                  title="Guitarist"
                  data-size="1050x700"
                >
                  <Image src="images/portfolio/lamp.jpg" alt="" />
                </a>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                  target="_blank"
                ></a>
              </div>
              <div className="item-folio__text">
                <h4 className="item-folio__title">Lamp</h4>
                <p className="item-folio__cat">Web Design</p>
              </div>
              <div className="item-folio__caption">
                <p>
                  Vero molestiae sed aut natus excepturi. Et tempora numquam.
                  Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
              <div className="item-folio__thumb">
                <a
                  href="images/portfolio/gallery/g-fuji.jpg"
                  className="thumb-link"
                  title="Palmeira"
                  data-size="1050x700"
                >
                  <Image src="images/portfolio/fuji.jpg" alt="" />
                </a>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                  target="_blank"
                ></a>
              </div>
              <div className="item-folio__text">
                <h4 className="item-folio__title">Fuji</h4>
                <p className="item-folio__cat">Web Design</p>
              </div>
              <div className="item-folio__caption">
                <p>
                  Vero molestiae sed aut natus excepturi. Et tempora numquam.
                  Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
