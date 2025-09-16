import "../style/Header.css";
import Button from "react-bootstrap/Button";
function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Left Text */}
            <div className="col-lg-6 d-flex">
              <div className="intro-expert my-auto">
                <h1 className="intro mb-4 fw-bold">
                  Modern Interior
                  <br />
                  Design Studio
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

    </>
  );
}

export default Header;
