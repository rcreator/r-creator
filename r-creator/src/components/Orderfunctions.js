import React, { useState, useEffect } from "react";
import axios from "./Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Orderfunctions = () => {
  const [order, setOrder] = useState([]);
  const [size, setSize] = useState(2);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(2);
  const [tg, setTG] = useState(true);

  const sizeChangeHadler = (e) => {
    setSize(parseInt(e.target.value));
  };

  function firstpage() {
    setMin(1);
    if (order.total < size) {
      setMax(order.total);
    } else {
      setMax(size);
    }
    setTG(!tg);
  }

  function lastpage() {
    setMax(order.total);
    if (order.total % size > 0) {
      setMin(order.total - ((order.total % size) - 1));
    } else {
      setMin(order.total - (size - 1));
    }
    setTG(!tg);
  }

  function forward() {
    if (max != order.total) {
      setMin(min + size);
      if (max + size <= order.total) {
        setMax(max + size);
      } else {
        setMax(order.total);
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
      if (order.total < size) {
        setMax(order.total);
      } else {
        setMax(size);
      }
    }
    setTG(!tg);
  }

  useEffect(() => {
    firstpage();
  }, [size]);

  useEffect(() => {
    console.log("hello");
    axios
      .post("/rcreator/book/order", {
        min: min,
        max: max,
      })
      .then((res) => {
        setOrder(res.data);
        if (res.data.total < max) {
          setMax(res.data.total);
        }
      })
      .catch((err) => console.log(err));
  }, [tg]);

  return {
    order,
    firstpage,
    lastpage,
    forward,
    backword,
    sizeChangeHadler,
    min,
    max,
  };
};

export default Orderfunctions;
