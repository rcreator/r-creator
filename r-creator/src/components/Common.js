import { Link } from "react-router-dom";
import React, { useState } from "react";

function Common() {
  const [toggle, setToggle] = useState(false);

  function sidebar() {
    return (
      <div className="absolute flex justify-end w-screen h-screen lg:hidden bg-gray-500/50 z-50 sm:hidden">
        <ul
          className={`${
            toggle ? "px-6" : "w-0"
          } flex flex-col items-end text-R-blue uppercase text-sm bg-R-white h-full lg:hidden`}
        >
          <li className="cursor-pointer p-2">
            <i
              className="text-2xl fa-solid fa-xmark"
              onClick={() => setToggle(false)}
            ></i>
          </li>
          <Link to="/" className="w-full">
            <li className="cursor-pointer border-b border-gray-300 p-2 w-full text-right text-black	hover:bg-slate-200">
              Home
            </li>
          </Link>
          <Link to="/about" className="w-full">
            <li className="cursor-pointer border-b border-gray-300 p-2 w-full text-right text-black	hover:bg-slate-200">
              About
            </li>
          </Link>
        </ul>
      </div>
    );
  }

  function header() {
    return (
      <header className="font-Poppins">
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <h1 className="text-R-purple py-1 text-2xl">
            R{" "}
            <span className="text-R-white bg-R-purple px-2 rounded-md">
              Creator
            </span>
          </h1>
          <ul className="hidden sm:flex flex-1 justify-end items-center text-R-blue uppercase text-sm lg:text-lg">
            <Link to="/">
              <li
                className="cursor-pointer hover:bg-R-white px-4 py-1"
                style={{ color: "black" }}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              {" "}
              <li
                className="cursor-pointer hover:bg-R-white px-4 py-1"
                style={{ color: "black" }}
              >
                About
              </li>
            </Link>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end items-center">
            {!toggle && (
              <i
                className="text-2xl fas fa-bars cursor-pointer"
                onClick={() => setToggle(true)}
              ></i>
            )}
          </div>
        </nav>
      </header>
    );
  }

  function footer() {
    return (
      <footer className="flex flex-col gap-2 lg:flex-row w-full justify-between bg-R-blue text-white p-3 md:items-center">
        <div className="flex justify-center items-center">
          <h1 className="text-R-purple py-1 text-2xl">
            R{" "}
            <span className="text-R-white bg-R-purple px-2 rounded-md">
              Creator
            </span>
          </h1>
        </div>

        <div className="flex flex-1 px-10 items-center justify-center">
          <Link to="/about">
            <p className="p-2 mx-2">About</p>
          </Link>
          <Link to="/termsandcondition">
            <p className="p-2 mx-2">Terms And Condition</p>
          </Link>
          <Link to="/privacy">
            <p className="p-2 mx-2">Privacy Policy</p>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-1/4  lg:w-1/6">
          <p className="py-1 text-xl">Contact Us</p>
          <div className="flex w-1/2 justify-between p-2 md:w-full lg:w-full">
            <i className="fa-brands fa-twitter cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
            <i className="fa-brands fa-facebook cursor-pointer"></i>
          </div>
        </div>
      </footer>
    );
  }

  function newsLetter() {
    return (
      <section className="bg-R-purple text-white mt-10">
        <div className="container">
          <div className="flex flex-col gap-3 justify-center items-center mx-auto py-10 md:w-3/4 lg:w-1/2">
            <h3 className="sm:text-xl lg:text-2xl uppercase">
              Subscribe to our Newsletter
            </h3>
            <div className="flex w-full justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 p-2 text-black rounded-md"
              />
              <button className="cursor-pointer ml-2 btn-danger px-10 rounded-lg shadow-md">
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function loaderdisplay() {
    return (
      <div className="absolute flex justify-content-center items-center w-full h-full bg-gray-500/30">
        <div className="loader"></div>
      </div>
    );
  }

  return {
    sidebar,
    header,
    footer,
    newsLetter,
    loaderdisplay,
    toggle,
  };
}

export default Common;
