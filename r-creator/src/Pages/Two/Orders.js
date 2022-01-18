import React from "react";
import { Link } from "react-router-dom";
import Orderfunctions from "../../components/Orderfunctions";

function Orders() {
  var {
    order,
    firstpage,
    lastpage,
    forward,
    backword,
    sizeChangeHadler,
    min,
    max,
  } = Orderfunctions();

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
              to="/cart"
              className="shadow-md flex flex-1 justify-center items-center bg-R-purple text-2xl text-R-white hover:bg-R-white hover:text-black m-3 p-2 rounded-2xl"
            >
              <button>Cart</button>
            </Link>
          </nav>
        </header>
      </div>

      <div className="text-2xl border border-dark d-flex items-center justify-center p-2">
        <p className="m-0">My Orders</p>
      </div>

      <div>
        {order.length === 0 ? (
          <p className="p-2 m-2 d-flex justify-center itmes-center">
            No Items Avaiilable
          </p>
        ) : (
          order.orderData.map((order, key) => (
            <div
              key={key}
              className="d-flex flex-column justify-content-center flex-md-row border border-dark mt-3 bg-light"
            >
              <div className="col-12 col-md-4 h-72 p-3 d-flex md:h-60">
                <div className="w-1/2 h-full d-flex justify-center">
                  <img src={order.frontimg} className="w-3/4" />
                </div>
                <div className="w-1/2 h-full d-flex justify-center">
                  <img src={order.backimg} className="w-3/4" />
                </div>
              </div>
              <div className="d-flex flex-column gap-2 col-12 col-md-7 py-3 px-4 flex-lg-row">
                <div className="col-12 col-md-6 d-flex flex-column gap-2">
                  <h6>{order._id}</h6>
                  <div className="d-flex">
                    <p>Paper Size : </p>
                    <span className="px-2"> {order.papersize}</span>
                  </div>
                  <div className="d-flex">
                    <p>Paper Number(per book) : </p>
                    <span className="px-2">{order.papernumber}</span>
                  </div>
                  <div className="d-flex">
                    <p>Book Quantity : </p>
                    <span className="px-2">{order.booknumber}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

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
          {min} to {max} of {order.total}{" "}
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
  );
}

export default Orders;
