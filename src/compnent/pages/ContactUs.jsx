import React from "react";
import NavBar from "../NavBar";
import Button from "react-bootstrap/Button";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function ContactUs() {
  return (
    <>
      <NavBar />
      {/* start header */}
      <div className="header">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Left Text */}
            <div className="col-lg-6 d-flex">
              <div className="intro-expert my-auto">
                <h1 className="intro mb-4 fw-bold">
                  Contact Us
                  <br />
                </h1>
                <p className="text mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet <br /> velit. Aliquam vulputate velit imperdiet dolor
                  tempor tristique.
                </p>
                <div className="button">
                  <Button
                    as="a"
                    href="/shop"
                    variant="warning"
                    className="btn-shop me-3"
                  >
                    Shop now
                  </Button>
                  <Button
                    as="a"
                    href="/explore"
                    variant="outline-secondary"
                    className="btn-explore"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 d-flex">
              <div className="img-coat my-auto">
                <img
                  src="/images/couch.png"
                  className="img-fluid"
                  alt="couch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}

      {/* start contact us */}
      <div className="contact-us">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="titlee mb-3">
                <h5 className="d-flex align-items-center gap-2">
                  <img src="images/envelope-outline.svg" alt="envelope" />
                  Subscribe to Newsletter
                </h5>
              </div>
            </div>
             <div className="col-lg-4">
              <div className="titlee mb-3">
                <h5 className="d-flex align-items-center gap-2">
                  <img src="images/envelope-outline.svg" alt="envelope" />
                  Subscribe to Newsletter
                </h5>
              </div>
            </div>
             <div className="col-lg-4">
              <div className="titlee mb-3">
                <h5 className="d-flex align-items-center gap-2">
                  <img src="images/envelope-outline.svg" alt="envelope" />
                  Subscribe to Newsletter
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end contact us */}

      {/* <Footer /> */}
    </>
  );
}

export default ContactUs;
