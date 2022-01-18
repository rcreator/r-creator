import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-7 slider">
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
          <div className="w-1/2 d-flex flex-column justify-content-center">
            <img src="/images/img-4.jpg" />
            <h4 className="m-3 text-center">Book-1</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-1/2 d-flex flex-column justify-content-center">
            <img src="/images/img-4.jpg" />
            <h4 className="m-3 text-center">Book-2</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-1/2 d-flex flex-column justify-content-center">
            <img src="/images/img-4.jpg" />
            <h4 className="m-3 text-center">Book-3</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-1/2 d-flex flex-column justify-content-center">
            <img src="/images/img-4.jpg" />
            <h4 className="m-3 text-center">Book-4</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-1/2 d-flex flex-column justify-content-center">
            <img src="/images/img-4.jpg" />
            <h4 className="m-3 text-center">Book-5</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-1/2 d-flex flex-column justify-content-center">
            <img src="/images/img-4.jpg" />
            <h4 className="m-3 text-center">Book-6</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-1/2 d-flex flex-column justify-content-center">
            <img src="/images/img-4.jpg" />
            <h4 className="m-3 text-center">Book-7</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
