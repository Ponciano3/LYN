import "./Portfolio.css";
import Navbar from "./Navbar";
import Reacts from "react";

import portfolio1 from "../img/portfolio1.jpg";
import portfolio2 from "../img/portfolio2.jpg";
import portfolio3 from "../img/portfolio3.jpg";
import portfolio5 from "../img/portfolio5.jpg";
import stitchImage from "../img/stitch.png";
import empressImage from "../img/empress.jpg";
import vaImage from "../img/va.jpg";
import kapeImage from "../img/kape.jpg";
import cgImage from "../img/cg.jpg";
import atImage from "../img/at.jpg";
import she1Image from "../img/she1.jpg";
import she2Image from "../img/she2.jpg";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container3">

            <div id="portfolio-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Portfolio
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center">Projects</h1>
            <br />
            <hr />
          </div>
          <div class="isotope">
            <div class="row">
              <p className="display-6"></p>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={portfolio2} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={portfolio5} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={portfolio3} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={portfolio1} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href=""> Misalyn T. Ponciano</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
