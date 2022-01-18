import React, { useEffect, useState } from "react";
import Cartfunction from "./Cartfunction";

function Pagination() {
  const [size, setSize] = useState(2);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(2);
  const [total, setTotal] = useState(50);
  const [tg, setTG] = useState(true);

  const { cartdata } = Cartfunction();

  const sizeChangeHadler = (e) => {
    setSize(parseInt(e.target.value));
  };

  function firstpage() {
    setMin(1);
    if (total < size) {
      setMax(total);
    } else {
      setMax(size);
    }
    setTG(!tg);
  }

  function lastpage() {
    setMax(total);
    if (total % size > 0) {
      setMin(total - (total % size));
    } else {
      setMin(total - size);
    }
    setTG(!tg);
  }

  function forward() {
    if (max != total) {
      setMin(min + size);
      if (max + size <= total) {
        setMax(max + size);
      } else {
        setMax(total);
      }
    }
    setTG(!tg);
  }

  function backword() {
    if (min != 1 && min - size > 0) {
      setMin(min - size);
      setMax(max - size);
    } else if (min - size <= 0) {
      setMin(1);
      setMax(size);
    }
    setTG(!tg);
  }

  useEffect(() => {
    firstpage();
  }, [size]);

  useEffect(() => {
    cartdata(min, max);
  }, [tg]);

  return (
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
        {min} to {max} of {total}{" "}
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
  );
}

export default Pagination;
