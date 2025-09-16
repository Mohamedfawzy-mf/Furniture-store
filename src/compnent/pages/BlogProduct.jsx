import NavBar from '../NavBar'
import Button from "react-bootstrap/Button";
import Testimonials from './Testimonials';
import Footer from '../Footer';
function BlogProduct() {
  return (
  <>
  <NavBar/>
       {/* start header */}
      <div className="header">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Left Text */}
            <div className="col-lg-6 d-flex">
              <div className="intro-expert my-auto">
                <h1 className="intro mb-4 fw-bold">
                  Blog
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
      {/* start blog */}
      <div className="testimonials-section">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-4">
              <img src="images/post-1.jpg" alt="post-1." className="recent" />
              <h5 className="py-4">First Time Home Owner Ideas</h5>
              <p><span>by</span> Kristin Watson <span>on</span> Dec 19, 2021</p>
            </div>
            <div className="col-lg-4">
              <img src="images/post-2.jpg" alt="post-2." className="recent" />
              <h5 className="my-4">How To Keep Your Furniture Clean</h5>
              <p><span>by</span> Robert Fox <span>on</span> Dec 15, 2021</p>
            </div>
            <div className="col-lg-4 " >
              <img src="images/post-3.jpg" alt="post-3." className="recent" />
              <h5 className="my-4">Small Space Furniture Apartment Ideas</h5>
              <p> <span>by</span> Kristin Watson<span>on</span>Dec 12, 2021</p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-4 ">
              <img src="images/post-1.jpg" alt="post-1." className="recent" />
              <h5 className="py-4">First Time Home Owner Ideas</h5>
              <p><span>by</span> Kristin Watson <span>on</span> Dec 19, 2021</p>
            </div>
            <div className="col-lg-4">
              <img src="images/post-2.jpg" alt="post-2." className="recent" />
              <h5 className="my-4">How To Keep Your Furniture Clean</h5>
              <p><span>by</span> Robert Fox <span>on</span> Dec 15, 2021</p>
            </div>
            <div className="col-lg-4 " >
              <img src="images/post-3.jpg" alt="post-3." className="recent" />
              <h5 className="my-4">Small Space Furniture Apartment Ideas</h5>
              <p> <span>by</span> Kristin Watson<span>on</span>Dec 12, 2021</p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-4">
              <img src="images/post-1.jpg" alt="post-1." className="recent" />
              <h5 className="py-4">First Time Home Owner Ideas</h5>
              <p><span>by</span> Kristin Watson <span>on</span> Dec 19, 2021</p>
            </div>
            <div className="col-lg-4">
              <img src="images/post-2.jpg" alt="post-2." className="recent" />
              <h5 className="my-4">How To Keep Your Furniture Clean</h5>
              <p><span>by</span> Robert Fox <span>on</span> Dec 15, 2021</p>
            </div>
            <div className="col-lg-4 " >
              <img src="images/post-3.jpg" alt="post-3." className="recent" />
              <h5 className="my-4">Small Space Furniture Apartment Ideas</h5>
              <p> <span>by</span> Kristin Watson<span>on</span>Dec 12, 2021</p>
            </div>
          </div>
        </div>
      </div>
      {/* end blog */}
<Testimonials/>
<Footer/>
  </>
  )
}

export default BlogProduct