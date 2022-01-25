import React, { useState } from "react";
import TemplateC from "../components/TemplateC";
import Imgslider from "../components/Imgslider";
import common from "../components/Common";
import { Link } from "react-router-dom";

function Home() {
  const [clicked, setClicked] = useState(false);

  var { sidebar, header, footer, newsLetter, toggle } = common();
  var { LoginSlider, CBookSlider } = Imgslider();

  return (
    <div className="font-Poppins">
      {!clicked ? (
        <section onClick={() => setClicked(true)}>
          <div
            className="bg-cover bg-center w-screen h-screen absolute z-50"
            style={{ backgroundImage: `url("/images/main.jpg")` }}
          >
            <div className="absolute bottom-20 left-10 text-4xl text-R-purple">
              <TemplateC
                duration="1"
                animation="fadeInLeft"
                data={"Create your website today with"}
              />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      <div className="h-screen w-screen overflow-auto relative">
        {toggle && sidebar()}
        {header()}

        <section className="container my-10 w-full relative p-0">
          <h2 className="text-R-blue text-3xl lg:text-left p-3 mb-1">
            1. Sign In, Sign Up, Logout
          </h2>

          <div className="d-flex mt-6 flex-column flex-md-row m-3">
            <div className="col-12 col-md-6 p-2">
              <h5>Use:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                HTML, CSS, React Js, Node JS, Express Js, MongoDB
              </p>
              <h5>Description:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                User is able to register with valid input data and able to sign
                in with registered email and password.
              </p>
            </div>

            <div className="p-2 col-12 col-md-6 d-flex flex-column items-center justify-center">
              <Link
                to="/login"
                className="w-full d-flex items-center justify-center"
              >
                <button
                  type="button"
                  className=" flex h-fit w-full btn btn-primary m-3 col-12 col-sm-8 col-md-6 "
                >
                  Preview
                </button>
              </Link>
              <div>
                Github:{" "}
                <a href="https://github.com/rcreator/r-creator/tree/master/r-creator/src/Pages/One">
                  Click Here
                </a>
              </div>
            </div>
          </div>
          <h5 className="d-flex items-center justify-center border p-2">
            Images
          </h5>
          <div>{LoginSlider()}</div>
        </section>

        <section className="container my-10 w-full relative p-0">
          <h2 className="text-R-blue text-3xl lg:text-left p-3 mb-1">
            2. Custom Book Order
          </h2>

          <div className="d-flex mt-6 flex-column flex-md-row m-3">
            <div className="col-12 col-md-6 p-2">
              <h5>Use:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                HTML, CSS, Bootstrap, React JS, Node JS, Express Js, MongoDB,
                Firebase
              </p>
              <h5>Description:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                User is able to order for coustom book with their own choise of
                book parameter like bookcover, size, book pages number. User is
                able to add custom book in the cart and also able confirm order
                direct or form cart page.
              </p>
            </div>

            <div className="p-2 col-12 col-md-6 d-flex flex-column items-center justify-center">
              <Link
                to="/orderbook"
                className="w-full d-flex items-center justify-center"
              >
                <button
                  type="button"
                  className=" flex h-fit w-full btn btn-primary m-3 col-12 col-sm-8 col-md-6 "
                >
                  Preview
                </button>
              </Link>
              <div>
                Github:{" "}
                <a href="https://github.com/rcreator/r-creator/tree/master/r-creator/src/Pages/Two">
                  Click Here
                </a>
              </div>
            </div>
          </div>
          <h5 className="d-flex items-center justify-center border p-2">
            Images
          </h5>
          <div>{CBookSlider()}</div>
        </section>

        <section className="container my-10 w-full relative p-0">
          <h2 className="text-R-blue text-3xl lg:text-left p-3  mb-1">
            3. Video Chat
          </h2>
          <div className="d-flex mt-8 flex-column flex-md-row m-3">
            <div className="col-12 col-md-6 p-2">
              <h5>Use:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                HTML, CSS, Bootstrap, React JS, Node JS, Express Js, WebRTC
              </p>
              <h5>Description:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                User is able to make video chat. User need to enter their name
                and Id of other user.
              </p>
            </div>

            <div className="p-2 col-12 col-md-6 d-flex flex-column items-center justify-center">
              <Link
                to="/vchat"
                className="w-full d-flex items-center justify-center"
              >
                <button
                  type="button"
                  className=" flex h-fit w-full btn btn-primary m-3 col-12 col-sm-8 col-md-6 "
                >
                  Preview
                </button>
              </Link>
              <div>
                Github:{" "}
                <a href="https://github.com/rcreator/r-creator/tree/master/r-creator/src/Pages/Three">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-10 w-full relative p-0">
          <h2 className="text-R-blue text-3xl lg:text-left p-3  mb-1">
            4. Ecom Landing Pages
          </h2>
          <div className="d-flex mt-8 flex-column flex-md-row m-3">
            <div className="col-12 col-md-6 p-2">
              <h5>Use:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                HTML, CSS, Bootstrap, React JS
              </p>
              <h5>Description:</h5>
              <p className="text-R-grey text-lg text-start mb-6">
                You can find responsive landing page of web appliation
              </p>
            </div>

            <div className="p-2 col-12 col-md-6 d-flex flex-column items-center justify-center">
              <Link
                to="/fun"
                className="w-full d-flex items-center justify-center"
              >
                <button
                  type="button"
                  className=" flex h-fit w-full btn btn-primary m-3 col-12 col-sm-8 col-md-6 "
                >
                  Preview
                </button>
              </Link>
              <div>
                Github:{" "}
                <a href="https://github.com/rcreator/r-creator/tree/master/r-creator/src/Pages/Four">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </section>

        {newsLetter()}
        {footer()}
      </div>
    </div>
  );
}

export default Home;
