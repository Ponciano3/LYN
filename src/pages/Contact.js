import "./Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper ">
        <div className="overlay">
          <div class="container5">
            <div class="bubbles"> </div>
            <div id="contact-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      GET IN TOUCH
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="info">
            
        <div className="container">
          <div className="row">
            <div className="col-lg mb-2">
        
              <h4 className="text-center"> <a href="https://location.com" class="text-base font-normal text-gray-600 dark:text-gray-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" class="bi bi-geo-alt h-5 w-5" viewBox="0 0 16 16">
        <path d="M8 0C5.243 0 3 2.243 3 5c0 2.18 1.528 4.54 3.297 6.488.27.324.649.824.905 1.018.256-.194.635-.694.905-1.018C11.472 9.54 13 7.18 13 5c0-2.757-2.243-5-5-5zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    </svg></a><b>ADDRESS</b></h4>
                <p className="text-center">
                Brgy. Dahile, Mabinay Negros Oriental
                </p>
                
           
            </div>
            <div className="col-lg mb-2">
            
              <h4 className="text-center">
                  <b>📞PHONE</b>
                </h4>
                <p  className="text-center">
                <br/>
                 #09353714028
                </p>
            </div>
            <div className="col-lg mb-2">
           
              <h4 className="text-center"><a href="mailto:example@example.com" class="text-base font-normal text-gray-600 dark:text-gray-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope h-5 w-5" viewBox="0 0 16 16">
        <path d="M0 3.028v9.944c0 .525.472 1.028 1.028 1.028h13.944c.525 0 1.028-.472 1.028-1.028V3.028C16 2.472 15.472 2 14.944 2H1.028C.472 2 0 2.472 0 3.028zm1.47-.79A1.505 1.505 0 0 1 2.473 2h11.055c.216 0 .412.07.557.182L8 7.333 1.47 2.238zm12.425-.208a.5.5 0 0 1 .675.191l2.857 5.714a.5.5 0 0 1-.109.548l-3.94 3.939a.5.5 0 0 1-.548.109l-5.714-2.857a.5.5 0 0 1-.191-.675l3.94-3.939a.5.5 0 0 1 .548-.109l2.857 1.428 2.856-1.428a.5.5 0 0 1 .439 0z"/>
    </svg>
</a>

                  <b>EMAIL</b></h4>
                <p  className="text-center">
                  misalyn192@gmail.com<br/>
                  
                </p>
        
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span>BY:
              <a href="">Misalyn T. Ponciano</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;

