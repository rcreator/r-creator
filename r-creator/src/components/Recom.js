import React, { useRef, useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import style from "../Style/fun.module.css";
import ReactPlayer from "react-player";
import data from "../JData/product.json";

const Recom = () => {
  const [toggle, setToggle] = useState(false);
  const [completed, setCompleted] = useState(false);
  var [progress, setProgress] = useState(1);
  var [int, setInt] = useState("");
  var [slideVar, setSlideVar] = useState("");
  const [ready, setReady] = useState(0);
  const [dToggle, setDToggle] = useState(false);
  const [dValue, setDValue] = useState("All");
  var [scrollCompleted, setScrollCompleted] = useState(0);
  const ref = useRef(null);

  function dropvalue(e) {
    setDValue(e.target.innerHTML);
    setDToggle(!dToggle);
  }

  function progressbar() {
    setProgress(progress++);
    if (progress > 100) {
      clearInterval(int);
      setReady(1);
    }
  }

  function dropvalue(e) {
    setDValue(e.target.innerHTML);
    setDToggle(!dToggle);
  }

  function time() {
    const timer = setTimeout(() => {
      setReady(ready + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    int = setInterval(progressbar, 20);
  }, []);

  useEffect(() => {
    if (ready === 3) {
      setCompleted(true);
    }
  }, [ready]);

  function smoothscroll(direction, scrollOffset) {
    scrollCompleted = 0;
    slideVar = setInterval(function () {
      if (direction) {
        ref.current.scrollLeft += 10;
      } else {
        ref.current.scrollLeft -= 10;
      }
      scrollCompleted = scrollCompleted + 10;
      if (scrollCompleted >= scrollOffset) {
        clearInterval(slideVar);
      }
    }, 10);
  }

  function sidebar() {
    return (
      <div
        className="h-12 d-flex gap-7 items-center text-white"
        id={style.Seclist}
      >
        <div className="">
          {" "}
          <button
            className="d-flex gap-2 items-center"
            onClick={() => setToggle(true)}
          >
            <i className="fas fa-bars"></i>
            <span>All</span>
          </button>
        </div>
        <div className="hidden md:flex gap-7 items-center">
          <a>Fresh</a>
          <a>Mobiles</a>
          <a>Best Seller</a>
          <a>Buy Again</a>
          <a>Electronics</a>
        </div>
      </div>
    );
  }

  function header() {
    return (
      <div className="vw-100 text-white" style={{ background: "#131921" }}>
        <div className="row h-full w-full d-flex items-center m-0">
          <h1 className="text-R-purple py-1 text-lg lg:text-2xl col-4 col-sm-3 col-md-2 text-center m-0">
            R{" "}
            <span className="text-R-white bg-R-purple px-2 rounded-md">
              Creator
            </span>
          </h1>

          <div className="col-5 col-sm-5 col-md-8 p-2 text-black">
            <div className="d-flex items-center w-full">
              <div className="hidden sm:block">
                <div
                  className="bg-light d-flex gap-2 px-2 py-1 m-0 border-r-2"
                  onClick={() => {
                    setDToggle(!dToggle);
                  }}
                >
                  <p className="m-0 text-md">{dValue}</p>
                  <span>
                    {dToggle ? (
                      <i className="fas fa-angle-up"></i>
                    ) : (
                      <i className="fas fa-angle-down"></i>
                    )}
                  </span>
                </div>
                <ul
                  id={style.droplist}
                  className={`absolute bg-light z-10 p-0 text-sm bg-white ${
                    dToggle ? "" : "hidden"
                  }`}
                >
                  <li>
                    <a onClick={(e) => dropvalue(e)}>All</a>
                  </li>
                  <li>
                    <a onClick={(e) => dropvalue(e)}>Electronics</a>
                  </li>
                  <li>
                    <a onClick={(e) => dropvalue(e)}>Devices</a>
                  </li>
                </ul>
              </div>

              <div className="p-0 bg-orange-200 flex-1">
                {" "}
                <input
                  type="text"
                  className="w-full px-2 py-1"
                  placeholder="Search"
                />
              </div>

              <div className="bg-orange-300 py-1 px-2 cursor-pointer border-l-2">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>

          <div className=" col-2 col-md-1 text-center p-1 d-flex flex-column">
            <div className="text-xs">Hello,Ravi</div>
            <div className="text-xs">Account</div>
          </div>

          <div className="col-1 col-sm-2 col-md-1 text-center d-flex justify-center items-center">
            <i className="fas fa-shopping-cart"></i>
            <p className="m-0 px-2 hidden d-sm-block">Cart</p>
          </div>
        </div>
      </div>
    );
  }

  function window() {
    return (
      <div>
        <div>
          <div
            className="absolute w-1/2 vh-100 bg-dark text-white"
            id={style.paper}
          ></div>
          <div
            className="w-1/2 vh-100 bg-dark text-white float-end"
            id={style.paper}
          ></div>
        </div>
      </div>
    );
  }

  function main() {
    return (
      <div className="bg-slate-200">
        <div className="row p-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column items-center gap-2 py-3 px-3 bg-white">
              <div className="h-20">
                <h4>up to 70% off | Electronics Store</h4>
              </div>
              <div className="w-full h-72 d-flex justify-center items-center">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
                  className="h-full"
                />
              </div>
              <div className="d-flex w-full">
                <p className="m-0">See More</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-2 py-3 px-3 bg-white">
              <div className="h-20">
                <h4>Bill payments got fast & convenient</h4>
              </div>
              <div className="w-full h-72 d-flex justify-center ">
                <div className="d-flex flex-column justify-center w-full">
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Recharge_186x116._SY116_CB663599035_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Prepaid Recharge</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Electricity_186x116._SY116_CB663599035_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Electricity Bill</p>
                    </div>
                  </div>
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/DTH_186x116._SY116_CB663599035_.jpg"
                      />
                      <p className="p-1 text-xs m-0">DTH Recharge</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Broadband_186x116._SY116_CB663599035_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Broadband bill</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex w-full"> See more</div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-2 py-3 px-3 bg-white">
              <div className="h-20">
                <h4>Top rated, premium quality | Amazon Brands & more</h4>
              </div>
              <div className="w-full h-72 d-flex justify-center ">
                <div className="d-flex flex-column justify-center w-full">
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Home Product</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Furniture</p>
                    </div>
                  </div>
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Daily essentials</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Clothing essentials</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex w-full"> See more</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-2 py-3 px-3 bg-white">
              <div className="h-20">
                <h4>Revamp your home in style</h4>
              </div>
              <div className="w-full h-72 d-flex justify-center ">
                <div className="d-flex flex-column justify-center w-full">
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Badsheet, curtains</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Home Decoration</p>
                    </div>
                  </div>
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Home storage</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Lighting Solution</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex w-full"> See more</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 ">
            <div className="p-3 w-full ">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=nnXpbTFrqXA"
                width="100%"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-2 py-3 px-3 bg-white">
              <div className="h-16">
                <h4>Shop by Category</h4>
              </div>
              <div className="w-full h-60 d-flex justify-center ">
                <div className="d-flex flex-column justify-center w-full">
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Fresh</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Mobiles</p>
                    </div>
                  </div>
                  <div className="d-flex justify-between w-full">
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Fashion</p>
                    </div>
                    <div>
                      <img
                        className="p-1"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
                      />
                      <p className="p-1 text-xs m-0">Electronics</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex w-full mt-4"> See more</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column justify-between gap-2 h-full py-4 px-3">
              <div className="d-flex justify-center">
                <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
              </div>
              <div className="p-3 bg-white text-sm d-flex flex-column">
                <h6>Shop on the Amazon App</h6>
                <p className="m-0">
                  Fast, convenient and secure | Over 17 crore products in your
                  pocket
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 relative p-3">
          <div
            className="absolute top-50 start-0 translate-middle-y py-4 pl-1 pr-4 ml-4 bg-white drop-shadow-lg"
            style={{ width: 30 }}
            onClick={() => smoothscroll(false, 600)}
          >
            <i className="fas fa-angle-left"></i>
          </div>
          <div
            className="absolute top-50 end-0 translate-middle-y py-4 pl-4 pr-1 mr-4 bg-white drop-shadow-lg"
            style={{ width: 30 }}
            onClick={() => smoothscroll(true, 600)}
          >
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="bg-white" id={style.productscroll} ref={ref}>
            {data.map((data, key) => (
              <div
                key={key}
                className="p-4 d-flex justify-center items-center flex-column"
              >
                <img src={data.img} />
                <p>{data.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function footer() {
    return (
      <div>
        <div
          style={{ background: "#232F3E" }}
          className="d-flex justify-center"
        >
          <div className="row text-white w-full max-w-screen-lg">
            <div className="col-12 col-sm-6 col-md-3 p-2">
              <div className="text-sm" id={style.footerlist}>
                <ul>
                  <li>
                    <h5>Get to Know Us</h5>
                  </li>
                  <li>About Us</li>
                  <li>Career</li>
                  <li>Press Releases</li>
                  <li>Gift a Smile</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 p-2">
              <div className="text-sm" id={style.footerlist}>
                <ul>
                  <li>
                    <h5>Connect with Us</h5>
                  </li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 p-2">
              <div className="text-sm" id={style.footerlist}>
                <ul>
                  <li>
                    <h5>Make Money with Us</h5>
                  </li>
                  <li>Become an Affiliate</li>
                  <li>Advertise Your Product</li>
                  <li>Fulfilment by R-Creator</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 p-2">
              <div className="text-sm" id={style.footerlist}>
                <ul>
                  <li>
                    <h5>Let Us Help You</h5>
                  </li>
                  <li>Your Account</li>
                  <li>Returns Centre</li>
                  <li>100% Purchase Protection</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ background: "#131921" }}
          className="d-flex gap-4 text-white py-3 justify-center text-sm flex-column items-center flex-md-row"
        >
          <ul className="d-flex gap-4 p-0 m-0 px-3">
            <li>Condition of Use & Sale</li>
            <li>Privacy Notice</li>
            <li>Intrest-Based Ads</li>
          </ul>
          <span>@ 2020-2022, Amazon.com, Inc. or its affiliates </span>
        </div>
      </div>
    );
  }

  function toogleSidebar() {
    return (
      <div>
        <div
          onClick={() => setToggle(false)}
          className={`absolute vw-100 vh-100 z-100 ${
            toggle ? "bg-gray-500/70" : "hidden"
          }`}
        ></div>

        <div
          className={`absolute w-80 vh-100 bg-light z-100 ${
            toggle ? style.tanslatenone : style.translateleft
          }`}
        >
          <div>
            <ul id={style.Rlist} className="p-0">
              <li className="p-0">
                <div className="d-flex justify-between items-center text-white p-3 bg-R-blue w-full">
                  <div className="d-flex  justify-center items-center gap-4">
                    <div className="ml-6">
                      <Avatar />{" "}
                    </div>
                    <div> Hello, Ravi </div>
                  </div>

                  <div>
                    <i
                      className="fas fa-times cursor-pointer"
                      onClick={() => setToggle(false)}
                    ></i>
                  </div>
                </div>
              </li>
              <li>
                <h6 className="m-0">Treanding</h6>
              </li>
              <li>Best Sellers</li>
              <li className="d-flex justify-between items-center">
                <div>New Releases</div>
                <i className="fas fa-chevron-right"></i>
              </li>
              <li>Move and Shakers</li>
              <li className="bg-light" style={{ padding: 1 }}></li>
              <li>
                <h6 className="m-0">Digital Content And Devices</h6>
              </li>
              <li>Fire TV</li>
              <li>eBooks</li>
              <li>Audiobook</li>
              <li className="bg-light" style={{ padding: 1 }}></li>
              <li>
                <h6 className="m-0">Shop By Department</h6>
              </li>
              <li>Mobile</li>
              <li>Computer</li>
              <li>Fashion</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    );
  }

  return {
    sidebar,
    header,
    window,
    toggle,
    setToggle,
    main,
    footer,
    time,
    progressbar,
    int,
    toogleSidebar,
  };
};

export default Recom;
