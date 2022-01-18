import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import orderfuction from "../../components/Bookfunction";
import ProductSlider from "../../components/ProductSlider";
import Common from "../../components/Common";

function Orderbook() {
  var {
    bookCount,
    paperCount,
    frontImage,
    backImage,
    loader,
    sizeData,
    dimension,
    validation,
    plus,
    minus,
    inputChangedHandler,
    imagePreview,
    selectHandle,
    addtoCart,
  } = orderfuction();

  var { loaderdisplay } = Common();

  return (
    <div className="overflow-hidden">
      {loader ? loaderdisplay() : ""}

      <div className="overflow-auto h-screen ">
        <div className="flex justify-end w-full mt-4 font-Poppins container">
          <header className="w-full md:w-1/2 lg:w-1/3">
            <nav className="flex w-full justify-end items-center">
              <Link
                to="/cart"
                className="shadow-md flex flex-1 justify-center items-center bg-R-purple text-3xl text-R-white hover:bg-R-white hover:text-black m-3 p-2 rounded-2xl"
              >
                <button>Cart</button>
              </Link>
              <Link
                to="/orders"
                className="shadow-md flex flex-1 justify-center items-center bg-R-purple text-3xl text-R-white hover:bg-R-white hover:text-black m-3 p-2 rounded-2xl"
              >
                <button>Orders</button>
              </Link>
            </nav>
          </header>
        </div>

        <section className="container">
          <div>
            <h1 className="flex justify-center rounded-3xl items-center text-4xl mt-4 border border-dark p-3 md:text-4xl uppercase letter-space-2">
              Book My Choise
            </h1>
          </div>

          <div className="mt-3 p-2">
            <div className="d-flex justify-content-center">
              <div className="col col-md-10 col-lg-8 border border-dark bg-light rounded-3xl p-3">
                <div className="row d-flex justify-content-center mb-3">
                  <label className="col-4">Paper Size</label>
                  <div className="d-flex flex-column col-6 p-0">
                    <select
                      className="d-flex border border-dark p-2"
                      id="papersize"
                      name="papersize"
                      onChange={(e) => selectHandle(e)}
                    >
                      {sizeData.map((sizeData, key) => (
                        <option key={key}>{sizeData.name}</option>
                      ))}
                    </select>
                    <p className="py-2 m-0">{dimension}</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center mb-3 ">
                  <label className="col-4">Number of Books</label>
                  <div className="d-flex col-6 p-0">
                    <i
                      className="d-flex col-4 fas fa-minus justify-content-center align-items-center bg-secondary cursor-pointer"
                      onClick={() => minus("book")}
                    ></i>
                    <input
                      id="booknumber"
                      name="booknumber"
                      type="number"
                      value={bookCount}
                      onChange={(event) => inputChangedHandler(event)}
                      className="d-flex col-4 border text-center p-2 border border-dark"
                    />
                    <i
                      className="d-flex col-4 fas fa-plus justify-content-center align-items-center bg-secondary cursor-pointer"
                      onClick={() => plus("book")}
                    ></i>
                  </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center mb-3">
                  <label className="col-4">Number of Papers</label>
                  <div className="d-flex col-6 p-0">
                    <i
                      className="d-flex col-4 fas fa-minus justify-content-center align-items-center bg-secondary cursor-pointer"
                      onClick={() => minus("paper")}
                    ></i>
                    <input
                      id="papernumber"
                      name="papernumber"
                      type="number"
                      value={paperCount}
                      onChange={(event) => inputChangedHandler(event)}
                      className="d-flex col-4 border text-center p-2 border border-dark"
                    />
                    <i
                      className="d-flex col-4 fas fa-plus justify-content-center align-items-center bg-secondary cursor-pointer"
                      onClick={() => plus("paper")}
                    ></i>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mb-3">
                  <label className="col-4">Front Book Cover</label>
                  <div className="d-flex flex-column col-6 p-0">
                    <div className="border border-dark d-flex flex-column flex-md-row p-0 mb-2 gap-3 border justify-content-center align-items-center h-72 md:h-64 bg-white">
                      <div className="d-flex col-12 col-sm-5 col-md-4 p-0 justify-content-center align-items-center h-1/4 ">
                        <label
                          htmlFor="frontImage"
                          className="d-flex flex-column justify-content-center border border-dark align-items-center w-full m-2 p-2 bg-R-white border cursor-pointer"
                        >
                          <i className="fas fa-plus"></i>
                          <p className="m-0 text-xs">Add Image</p>
                        </label>
                        <input
                          id="frontImage"
                          type="file"
                          accept="image/*"
                          onChange={(e) => imagePreview(e, "Front")}
                          className="hidden"
                        ></input>
                      </div>
                      <div className="d-flex justify-content-center col-12 col-sm-11 col-md-7 p-0 h-2/3 md:h-4/5">
                        {frontImage ? (
                          <img
                            src={URL.createObjectURL(frontImage)}
                            className="col-6 col-sm-7 col-md-8 col-lg-7"
                          />
                        ) : (
                          <div className="p-1 flex justify-center items-center bg-light border m-1">
                            Image Preview
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-R-red">{validation.frontImage}</p>
                  </div>

                  <label className="col-4">Back Book Cover</label>
                  <div className="d-flex flex-column col-6 p-0">
                    <div className="border border-dark d-flex flex-column flex-md-row p-0 mb-2 gap-3 border justify-content-center align-items-center h-72 md:h-64 bg-white">
                      <div className="d-flex col-12 col-sm-5 col-md-4 p-0 justify-content-center align-items-center h-1/4">
                        <label
                          htmlFor="backImage"
                          className="d-flex flex-column justify-content-center align-items-center border border-dark w-full m-2 p-2 bg-R-white border cursor-pointer"
                        >
                          <i className="fas fa-plus"></i>
                          <p className="m-0 text-xs">Add Image</p>
                        </label>
                        <input
                          id="backImage"
                          type="file"
                          accept="image/*"
                          onChange={(e) => imagePreview(e, "Back")}
                          className="hidden"
                        ></input>
                      </div>

                      <div className="d-flex justify-content-center col-12 col-sm-11 col-md-7 p-0 h-2/3 md:h-4/5">
                        {backImage ? (
                          <img
                            src={URL.createObjectURL(backImage)}
                            className="col-6 col-sm-7 col-md-8 col-lg-7"
                          />
                        ) : (
                          <div className="p-1 flex justify-center items-center bg-light border m-1">
                            Image Preview
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-R-red">{validation.backImage}</p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                  <button
                    className="col-12 col-sm-5 p-2 bg-warning bg-gradient m-1 shadow-md"
                    onClick={() => addtoCart(false)}
                  >
                    {" "}
                    Add to cart
                  </button>
                  <button
                    className="col-12 col-sm-5 p-2 bg-warning bg-gradient shadow-md"
                    onClick={() => addtoCart(true)}
                  >
                    {" "}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Orderbook;
