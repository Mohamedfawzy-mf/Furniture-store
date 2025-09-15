import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
function Shop() {
  return (
    <>
      <NavBar />
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
