import React from "react";
import { Link } from "react-router-dom";
import Cartfunction from "../../components/Cartfunction";

function Cart() {
  var {
    cart,
    firstpage,
    lastpage,
    forward,
    backword,
    sizeChangeHadler,
    removeCart,
    min,
    max,
  } = Cartfunction();

  return (
    <div className="container font-Poppins">
      <div className="flex justify-end w-full mt-4">
        <header className="w-full md:w-1/2 lg:w-1/3">
          <nav className="flex w-full justify-end items-center">
            <Link
              to="/orderbook"
              className="shadow-md flex flex-1 justify-center items-center bg-R-purple text-2xl text-R-white hover:bg-R-white hover:text-black m-3 p-2 rounded-2xl"
            >
              <button>New Order</button>
            </Link>
            <Link
              to="/orders"
              className="shadow-md flex flex-1 justify-center items-center bg-R-purple text-2xl text-R-white hover:bg-R-white hover:text-black m-3 p-2 rounded-2xl"
            >
              <button>Orders</button>
            </Link>
          </nav>
        </header>
      </div>

      <div className="text-2xl border border-dark d-flex items-center justify-center p-2">
        <p className="m-0">Book Shopping Cart</p>
      </div>

      <div>
        {cart.total === 0 ? (
          <p className="p-2 m-2 d-flex justify-center itmes-center">
            No Items Avaiilable
          </p>
        ) : (
          cart.total > 0 && (
            <div>
              {cart.cartData.map((cart, key) => (
                <div
                  key={key}
                  className="d-flex flex-column justify-content-center flex-md-row border border-dark mt-3 bg-light"
                >
                  <div className="col-12 col-md-4 h-72 p-3 d-flex md:h-60">
                    <div className="w-1/2 h-full d-flex justify-center">
                      <img src={cart.frontimg} className="w-3/4" />
                    </div>
                    <div className="w-1/2 h-full d-flex justify-center">
                      <img src={cart.backimg} className="w-3/4" />
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 col-12 col-md-7 py-3 px-4 flex-lg-row">
                    <div className="col-12 col-md-6 d-flex flex-column gap-2">
                      <h6>{cart._id}</h6>
                      <div className="d-flex">
                        <p>Paper Size : </p>
                        <span className="px-2"> {cart.papersize}</span>
                      </div>
                      <div className="d-flex">
                        <p>Paper Number(per book) : </p>
                        <span className="px-2">{cart.papernumber}</span>
                      </div>
                      <div className="d-flex">
                        <p>Book Quantity : </p>
                        <span className="px-2">{cart.booknumber}</span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column gap-2 ">
                      <Link to="/confirmorder" state={cart._id}>
                        <button
                          className="col-12 btn-warning p-2"
                          data-product-id={cart._id}
                        >
                          Proceed to Buy
                        </button>
                      </Link>

                      <button
                        className="col-12 btn-dark p-2"
                        onClick={() => removeCart(cart._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-end items-center p-2">
                <div className="d-flex justify-center items-center">
                  <p className="px-3 m-0">Size</p>
                  <select
                    className="border border-dark w-14 mx-2"
                    onChange={(e) => sizeChangeHadler(e)}
                  >
                    <option>2</option>
                    <option>5</option>
                    <option>10</option>
                  </select>
                </div>

                <i
                  className="fas fa-fast-backward p-2 hover:bg-R-white cursor-pointer"
                  onClick={firstpage}
                ></i>
                <i
                  className="fas fa-step-backward p-2 hover:bg-R-white cursor-pointer"
                  onClick={backword}
                ></i>
                <span className="p-2">
                  {" "}
                  {min} to {max} of {cart.total}{" "}
                </span>
                <i
                  className="fas fa-step-forward p-2 hover:bg-R-white cursor-pointer"
                  onClick={forward}
                ></i>
                <i
                  className="fas fa-fast-forward p-2 hover:bg-R-white cursor-pointer"
                  onClick={lastpage}
                ></i>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Cart;
