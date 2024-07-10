import "./Experience.css";
import Navbar from "./Navbar";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import pic4 from "../img/pic4.jpg";
const Experience = () => {
  return (
    <>
      <Navbar />

     
          <section id="experience">
      <div class="text-center">
        <br></br><br></br>
         <h2 class="display-2 text-white"><strong>Experiences</strong></h2></div>
         <div class="text-center">
         <h5 class="text-white">DURING MY ON- JOB- TRAINING, AT DEPARTMENT OF AGRARIAN REFORM.</h5></div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={pic1} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={pic4} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={pic3} alt="" />
                <h4 className="text-center text-dark"></h4>

              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={pic2} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </>
  );
};

export default Experience;