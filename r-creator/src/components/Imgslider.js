import React from "react";
import Slider from "react-slick";
import "../Style/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Imgslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  function LoginSlider() {
    return (
      <div className="px-7 slider">
        <Slider {...settings}>
          <div>
            <img
              src="images/Image_Login.png"
              className="shadow-md h-96 w-full md:h-160 lg:h-192"
            />
          </div>
          <div>
            <img
              src="images/Image_SignUp.png"
              className="shadow-md h-96 w-full md:h-160 lg:h-192"
            />
          </div>
        </Slider>
      </div>
    );
  }

  function CBookSlider() {
    return (
      <div className="px-7 slider">
        <Slider {...settings}>
          <div>
            <img
              src="images/Image_Bookorder.png"
              className="shadow-md h-96 w-full md:h-160 lg:h-192"
            />
          </div>
          <div>
            <img
              src="images/cart.png"
              className="shadow-md h-96 w-full md:h-160 lg:h-192"
            />
          </div>
          <div>
            <img
              src="images/confirm_rder.png"
              className="shadow-md h-96 w-full md:h-160 lg:h-192"
            />
          </div>
          <div>
            <img
              src="images/Orders.png"
              className="shadow-md h-96 w-full md:h-160 lg:h-192"
            />
          </div>
        </Slider>
      </div>
    );
  }

  return { LoginSlider, CBookSlider };
}

export default Imgslider;
