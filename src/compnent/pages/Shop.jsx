import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";

function Shop() {
  return (
    <>
      <NavBar />
      <div className="header">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Left Text */}
            <div className="col-lg-6 d-flex">
              <div className="intro-expert my-auto">
                <h1 className="intro mb-4 fw-bold">
                  Shop
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
      <div className="product-section py-5">
        <div className="container">
          <div className="row">
            {/* Product 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-3.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-3"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-1.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-1"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-2.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-2"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>

            {/* Product 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-3.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-3"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Product 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-3.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-3"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-1.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-1"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-2.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-2"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>

            {/* Product 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
              <div className="product-1">
                <img
                  src="/images/product-3.png"
                  style={{ width: "100%", height: "100%" }}
                  alt="product-3"
                />
                <h6 className="fw-bold">Nordic Chair</h6>
                <p className="fw-bold">$50.00</p>
                <Link to="/cart">
                  <button className="add-btn">+</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Shop;
