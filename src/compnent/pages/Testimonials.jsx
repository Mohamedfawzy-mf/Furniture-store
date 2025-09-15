import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Testimonials.css"; 

function Testimonials() {
  return (
    <div className="testimonials-section py-5 text-center">
    
      <h1 className="mb-5">Testimonials</h1>
      <Carousel
        indicators={false}
        nextIcon={<span className="carousel-control-next-icon custom-arrow" />}
        prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
        className="testimonial-carousel w-75 mx-auto"
      >
        <Carousel.Item>
          <p className="testimonial-text">
            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique.”
          </p>
          <div className="testimonial-user">
            <img
              src="/images/person-1.jpg"
              alt="User"
              className="testimonial-img"
            />
            <h5 className="mt-3 mb-0">Maria Jones</h5>
            <p className="text-muted mb-0">CEO, Co-Founder, XYZ Inc.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <p className="testimonial-text">
            “Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer convallis volutpat dui
            quis scelerisque.”
          </p>
          <div className="testimonial-user">
            <img
              src="/images/person-1.jpg"
              alt="User"
              className="testimonial-img"
            />
            <h5 className="mt-3 mb-0">John Smith</h5>

            <p className="text-muted mb-0">CTO, Co-Founder, ABC Ltd.</p>
          </div>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default Testimonials;
