import React from "react";
import { Link } from "react-router-dom";
import common from "../components/Common";

function About() {
  var { sidebar, header, footer, newsLetter, toggle } = common();
  return (
    <div className="font-Poppins">
      <div className="h-screen w-screen overflow-auto relative">
        {toggle && sidebar()}
        {header()}

        <div className="container">
          <div className="row justify-content-center">
            <h1 className="col-auto">About</h1>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6">
              <div className="row justify-content-center align-items-center h-full">
                <div className="col-9 text-center bg-light p-4 rounded-lg mb-8">
                  <Link to="/">
                    <h1 className="text-R-purple py-1 text-4xl lg:text-6xl">
                      R{" "}
                      <span className="text-R-white bg-R-purple px-2 rounded-md">
                        Creator
                      </span>
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column gap-3 p-4">
              <h4>Ravi</h4>
              <p className="m-0">Contact Email: rcreator2811@gmail.com</p>
              <p className="m-0">
                Github:{" "}
                <a href="https://github.com/rcreator">
                  https://github.com/rcreator
                </a>
              </p>
              <p>
                {" "}
                Hello, I am developing web application component which might be
                usefull or help to people for develope their own web
                application. You can found all my code in given github link.
              </p>
            </div>
          </div>
        </div>

        {newsLetter()}
        {footer()}
      </div>
    </div>
  );
}

export default About;
