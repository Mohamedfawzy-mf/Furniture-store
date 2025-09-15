import React from "react";
import "../style/Blog.css";
function Blog() {
  return (
    <>
      <div className="testimonials-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h1 className="mb-5">Recent Blog</h1>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4 " style={{ textAlign: "end" }}>
              <a href="#" style={{ color: "black" }}>
                View All Posts
              </a>
            </div>
          </div>
          <div className="row">
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
    </>
  );
}

export default Blog;
