import React from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar";
import ProductSection from "./ProductSection";
import Testimonials from "./Testimonials";
import Footer from "../Footer";
function Services() {
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
                  Services
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
      {/* start why-choose-section */}
      <div className="why-choose-section py-5">
        <div className="container">
          <div className="row justify-content-between">
            {/* Left Content */}
            <div className="col-lg-12">
              <div className="row mt-4 im">
                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/truck.svg"
                      alt="Fast Shipping"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">
                    Fast & Free Shipping
                  </h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>

                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/bag.svg"
                      alt="Easy to Shop"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">Easy to Shop</h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>

                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/support.svg"
                      alt="Support"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">24/7 Support</h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>

                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/return.svg"
                      alt="Returns"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">
                    Hassle Free Returns
                  </h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            {/* Left Content */}
            <div className="col-lg-12">
              <div className="row mt-4 im">
                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/truck.svg"
                      alt="Fast Shipping"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">
                    Fast & Free Shipping
                  </h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>

                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/bag.svg"
                      alt="Easy to Shop"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">Easy to Shop</h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>

                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/support.svg"
                      alt="Support"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">24/7 Support</h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>

                <div className="col-3 mb-4 ">
                  <div className="icon-wrapper">
                    <img
                      src="/images/return.svg"
                      alt="Returns"
                      className="icon"
                    />
                  </div>
                  <h5 className="why-choose-section-title">
                    Hassle Free Returns
                  </h5>
                  <p className="text-muted small">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end why-choose-section */}
      <ProductSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Services;
