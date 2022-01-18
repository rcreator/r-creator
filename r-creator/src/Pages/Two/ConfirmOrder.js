import React, { useState, useEffect } from "react";
import axios from "../../components/Axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function ConfirmOrder(props) {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/rcreator/book/cart/${location.state}`)
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }, []);

  function creatOrder(car) {
    axios
      .post("/rcreator/book/ordercreate", {
        papersize: car.papersize,
        papernumber: car.papernumber,
        booknumber: car.booknumber,
        frontimg: car.frontimg,
        backimg: car.backimg,
      })
      .then((response) =>
        toast.success(response.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      )
      .catch((err) =>
        toast.warning("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      );
  }

  function removeCart(ids) {
    axios
      .delete(`/rcreator/book/cart/${ids}`)
      .then((response) => "")
      .catch((err) =>
        toast.warning("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      );
  }

  function confirmOrder() {
    creatOrder(cart);
    removeCart(location.state);
    navigate("/orders");
  }

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
        <p className="m-0">Order Confirmation</p>
      </div>

      <div>
        {cart.length === 0 ? (
          <p className="p-2 m-2 d-flex justify-center itmes-center">
            No Items Avaiilable
          </p>
        ) : (
          <div className="d-flex flex-column justify-content-center flex-md-row border border-dark mt-3 bg-light">
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
              <div className="col-12 col-lg-6 d-flex flex-column gap-2 flex-md-row flex-lg-column">
                <button
                  className="col-12  btn-warning p-2"
                  onClick={confirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmOrder;
