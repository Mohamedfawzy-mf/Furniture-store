import "./style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-8">
              <div className="titlee mb-3">
                <h5 className="d-flex align-items-center gap-2">
                  <img src="images/envelope-outline.svg" alt="envelope" />
                  Subscribe to Newsletter
                </h5>
              </div>
              <form className="footerForm">
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                    style={{ maxWidth: "200px" }}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    style={{ maxWidth: "250px" }}
                  />
                  <button className="btn paperplane">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-4 text-lg-end text-center mt-4 mt-lg-0">
              <div className="img-coat">
                <img
                  src="/images/sofa.png"
                  className="img-fluid"
                  alt="couch"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>

          <div className=" mb-3">
            <h3 className="logo">
              Furni<span>.</span>
            </h3>
          </div>

          <div className="row">
            <div className="col-lg-4 pe-5">
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant.
              </p>

              <div className="d-flex gap-3 mt-3 py-3">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="unlisted">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="unlisted">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Knowledge base</a>
                    </li>
                    <li>
                      <a href="#">Live chat</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="unlisted">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="unlisted">
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-3" />
            <div className="copyright">
              <div className="row">
                <div className=" col-lg-6">
                  Copyright ©2025. All Rights Reserved. — Designed with love by
                  Untree.co Distributed By ThemeWagon
                </div>
                <div className=" col-lg-3"></div>
                <div className=" col-lg-3">
                <a href="#" className="footerlink"> Terms & Conditions</a> 
                <a href="#" className="footerlink"> Privacy Policy</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
