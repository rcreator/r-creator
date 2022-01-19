import React, { useState, useEffect } from "react";
import axios from "./Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Cartfunction = () => {
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState(2);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(2);
  const [tg, setTG] = useState(true);

  const sizeChangeHadler = (e) => {
    setSize(parseInt(e.target.value));
  };

  function firstpage() {
    setMin(1);
    if (cart.total < size) {
      setMax(cart.total);
    } else {
      setMax(size);
    }
    setTG(!tg);
  }

  function lastpage() {
    setMax(cart.total);
    if (cart.total % size > 0) {
      setMin(cart.total - ((cart.total % size) - 1));
    } else {
      setMin(cart.total - (size - 1));
    }
    setTG(!tg);
  }

  function forward() {
    if (max != cart.total) {
      setMin(min + size);
      if (max + size <= cart.total) {
        setMax(max + size);
      } else {
        setMax(cart.total);
      }
    }
    setTG(!tg);
  }

  function backword() {
    if (min != 1 && min - size > 0) {
      setMin(min - size);
      setMax(min - size + size - 1);
    } else if (max - size <= 0) {
      setMin(1);
      if (cart.total < size) {
        setMax(cart.total);
      } else {
        setMax(size);
      }
    }
    setTG(!tg);
  }

  function removeCart(ids) {
    axios
      .delete(`/rcreator/book/cart/${ids}`)
      .then((response) => {
        toast.success(response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((err) =>
        toast.warning("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      );

    axios
      .post("/rcreator/book/cart", {
        min: min,
        max: max,
      })
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    firstpage();
  }, [size]);

  useEffect(() => {
    axios
      .post("/rcreator/book/cart", {
        min: min,
        max: max,
      })
      .then((res) => {
        setCart(res.data);
        if (res.data.total < max) {
          setMax(res.data.total);
        }
      })
      .catch((err) => console.log(err));
  }, [tg]);

  return {
    cart,
    firstpage,
    lastpage,
    forward,
    backword,
    sizeChangeHadler,
    removeCart,
    min,
    max,
  };
};

export default Cartfunction;
