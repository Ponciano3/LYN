import "./Home.css";

import misalyn1 from "../img/misalyn1.jpg";
import ibisImage from "../img/ibis-paint-x.png";
import vscodeImage from "../img/vc-code.png";
import gcbImage from "../img/gcb.png";
import warcraftImage from "../img/misalyn2.jpg";
import generalImage from "../img/misalyn3.jpg";
import battleImage from "../img/misalyn4.jpg";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold">
                      Misalyn T. Ponciano
                      </h1>
                      <br />
                      <p className="self text-light">
                      I am a web designer 
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={misalyn1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={ibisImage} alt="" />
                <h4 className="text-center">IbisPaintX</h4>
                <p>
                  IbisPaint X is a popular digital art app designed for creating
                  illustrations and manga on mobile devices. You can also share
                  your creations with others and get feedback from a community
                  of artists within the app. IbisPaint X provides a convenient
                  way to unleash your creativity.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={vscodeImage} alt="" />
                <h4 className="text-center">Visual Studio Code</h4>
                <p>
                  Visual Studio Code (VS Code) is a free source-code editor
                  developed by Microsoft for Windows, macOS, and Linux. It has
                  quickly become one of the most popular code editors in the
                  developer community due to its versatility, extensive
                  features, and customizable nature.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={gcbImage} alt="" />
                <h4 className="text-center">Gaming Center Base</h4>
                <p>
                  Gaming center base is a venue where gamers gather to play
                  video games together on high-end computers and consoles. It
                  offers a social and competitive environment with comfortable
                  amenities like chairs and snacks, making it a popular spot for
                  gaming enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="radio-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="radio-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(165,0,165)" />
        </g>
        <g className="radio-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(165,0,165, .5)" />
        </g>
        <g className="radio-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(165,0,165, .3)" />
        </g>
      </svg>

      <section id="game">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3">
              Recent <br /> MY DESIGN
            </h3>
            <div className="col-lg-7 align-items-center">
              <div className="card">
                <h4 className="ms-3 mt-3">1. </h4>
                <img src={warcraftImage} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">2.</h4>
                <img src={generalImage} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">
                  3. 
                </h4>
                <img src={battleImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href=""> Misalyn T. P</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
