import "../style/PopularProduct.css";

function PopularProduct() {
  return (
    <>
      {/* start  popular-product*/}
      <div className=" popular-product py-5">
        <div className="container">
          <div className="row ">
            {/*start product 1 */}

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="product-img">
                  <img
                    src="/images/product-1.png"
                    alt="img-1"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3 className="Title">Nordic Chair</h3>
                  <p className="description">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio
                  </p>
                  <p>
                    <a
                      href="#"
                      className="read-more"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/*end product 1 */}

            {/*start product 2 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="product-img">
                  <img
                    src="/images/product-2.png"
                    alt="img-1"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3 className="Title">Kruzo Aero Chair</h3>
                  <p className="description">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio
                  </p>
                  <p>
                    <a
                      href="#"
                      className="read-more"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
              {/* end prouduct 2 */}
            </div>
            {/* end product 2 */}
            {/* start product 3 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="product-img">
                  <img
                    src="/images/product-3.png"
                    alt="img-1"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3 className="Title">Ergonomic Chair</h3>
                  <p className="description">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio
                  </p>
                  <p>
                   <a
                      href="#"
                      className="read-more"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end prouduct 3 */}
          </div>
        </div>
      </div>
      {/* end  popular-product */}
    </>
  );
}

export default PopularProduct;
