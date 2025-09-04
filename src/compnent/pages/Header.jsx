import "../style/Header.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Header() {
  return (
    <>
      <div className="header ">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-6 d-flex ">
              <div className="intro-expert my-auto">
                <h1 className="intro mb-4" style={{ fontWeight: "bold" }}>
                  Modern Interior
                  <br />
                  <span className="d-block">Design Studio</span>
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
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <h5 className="section-title">
                Crafted with <br /> excellent material.
              </h5>
              <p style={{ opacity: ".8", fontSize: "15px" }}>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. <br />
                Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <Button
                as="a"
                href="/explore"
                variant="outline-secondary"
                className="product-btn"
              >
                Explore
              </Button>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 text-center">
              <div className="product-1">
                <img
                  src="/public/images/product-1.png"
                  style={{ width: "100%", height: "100%" }}
                />
                <h6 style={{ fontWeight: "700" }}>Nordic Chair</h6>
                <p style={{ fontWeight: "700" }}> $50.00</p>
              </div>
            </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 text-center">
              <div className="product-1">
                <img
                  src="/public/images/product-2.png"
                  style={{ width: "100%", height: "100%" }}
                />
                <h6 style={{ fontWeight: "700" }}>Nordic Chair</h6>
                <p style={{ fontWeight: "700" }}> $50.00</p>
              </div>
            </div>  <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 text-center">
              <div className="product-1">
                <img
                  src="/public/images/product-3.png"
                  style={{ width: "100%", height: "100%" }}
                />
                <h6 style={{ fontWeight: "700" }}>Nordic Chair</h6>
                <p style={{ fontWeight: "700" }}> $50.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
