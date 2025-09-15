import "../style/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-section py-5">
        <div className="container">
          <div className="row justify-content-between">
            {/* Left Content */}
            <div className="col-lg-6">
              <h1 className="why-choose-section-title">Why Choose Us</h1>
              <p className="text-muted small">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row mt-4 im">
                <div className="col-6 mb-4 ">
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

                <div className="col-6 mb-4 ">
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

                <div className="col-6 mb-4 ">
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

                <div className="col-6 mb-4 ">
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

            {/* Right Image */}
            <div className="col-lg-5 col-sm-12 d-flex align-items-center">
              <div className="why-choose-img">
                <img
                  src="/images/why-choose-us-img.jpg"
                  alt="why choose illustration"
                  className="why-choose-photo img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
