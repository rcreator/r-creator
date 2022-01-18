import React, { useEffect } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loginfunction from "../../components/Loginfunction";

function Login() {
  const { login, inputGroupChangeHandler, validation } = Loginfunction();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      var user = jwt(localStorage.getItem("token"));
      if (!user) {
        localStorage.removeItem("token");
      } else {
        navigate("/welcome");
      }
    }
  });

  return (
    <div className="h-screen w-screen overflow-auto relative">
      <header className="font-Poppins">
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <h1 className="text-R-purple py-1 text-2xl">
            R{" "}
            <span className="text-R-white bg-R-purple px-2 rounded-md">
              Creator
            </span>
          </h1>
          <ul className="flex flex-1 justify-end items-center text-R-blue text-sm lg:text-lg">
            <Link to="/signup">
              <li className="cursor-pointer bg-R-red text-R-white rounded-md px-4 py-1 ml-2 hover:bg-R-white hover:text-black">
                Sign Up
              </li>
            </Link>
          </ul>
        </nav>
      </header>

      <section
        className="flex container w-full h-192 mt-10 p-0 bg-cover bg-center justify-center items-center"
        style={{ backgroundImage: `url("/images/img-8.jpg")` }}
      >
        <form className="flex flex-col p-5 w-full h-fit bg-white md:w-3/4 lg:w-1/2 rounded-2xl shadow-lg">
          <div className="relative">
            <label className="text-xl pb-2">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="w-full p-2 mb-7 border border-black"
              onChange={inputGroupChangeHandler}
            />
            <p className="absolute top-20 text-R-red tracking-wider">
              {validation.email}
            </p>
          </div>

          <div className="relative">
            <label className="text-xl pb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="w-full p-2 mb-7 border border-black"
              onChange={inputGroupChangeHandler}
            />
            <p className="absolute top-20 text-R-red tracking-wider">
              {validation.password}
            </p>
          </div>

          <button
            type="submit"
            className="w-full p-2 mb-5 mt-2 btn-primary text-R-white rounded-lg"
            onClick={login}
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
