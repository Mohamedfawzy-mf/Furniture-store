
import Button from "react-bootstrap/Button";
import "../style/ModernDesignSection.css";

function ModernDesignSection() {
  return (
    <>    <div className="why-choose-section py-5">
        {/* ===== start we help you make modern design Section ===== */}
        <div className="modern-design">
          <div className="container">
            <div className="row  justify-content-between">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="img-grid">
                  <div className="grid grid-1  why-choose-grid">
                    <img
                      src="/images/img-grid-1.jpg"
                      alt="grid-1"
                      className="why-choose-grid-img"
                    />
                  </div>
                  <div className="grid grid-1">
                    <img src="/images/img-grid-2.jpg" alt="grid-2" />
                  </div>
                  <div className="grid grid-1">
                    <img src="/images/img-grid-3.jpg" alt="grid-3" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 main-section">
                <div className="title">
                  <h1>We Help You Make Modern Interior Design</h1>
                  <p className="text-muted larg py-3 ">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada
                  </p>
                  <div className=" listed-section">
                    <ul className="row ">
                      <li className="col-6">
                        <p className="text-muted small">
                          Donec vitae odio quis nisl dapibus malesuada
                        </p>
                      </li>
                      <li className="col-6">
                        <p className="text-muted small">
                          Donec vitae odio quis nisl dapibus malesuada
                        </p>
                      </li>
                      <li className="col-6">
                        <p className="text-muted small">
                          Donec vitae odio quis nisl dapibus malesuada
                        </p>
                      </li>
                      <li className="col-6">
                        <p className="text-muted small">
                          Donec vitae odio quis nisl dapibus malesuada
                        </p>
                      </li>
                    </ul>
                    <div className="explor-button">
                      <Button
                        as="a"
                        variant="outline-secondary"
                        className="product-btn"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* ===== end we help you make modern design Section ===== */}</>
  )
}

export default ModernDesignSection