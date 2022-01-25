import React, { useEffect, useState } from "react";
import style from "../../Style/fun.module.css";
import { Avatar } from "@material-ui/core";
import Recom from "../../components/Recom";

function Intro() {
  const {
    sidebar,
    header,
    window,
    main,
    footer,
    toggle,
    setToggle,
    toogleSidebar,
  } = Recom();
  const [completed, setCompleted] = useState(false);
  var [progress, setProgress] = useState(1);
  var [int, setInt] = useState("");
  const [ready, setReady] = useState(0);

  let timer;
  function progressbar() {
    setProgress(progress++);
    if (progress > 100) {
      clearInterval(int);
      setReady(1);
    }
  }

  function time() {
    const timer = setTimeout(() => {
      setReady(ready + 1);
    }, 1000);
  }

  useEffect(() => {
    int = setInterval(progressbar, 20);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ready === 3) {
      setCompleted(true);
    }
  }, [ready]);

  return (
    <div>
      {!completed ? (
        <div className="absolute vw-100 vh-100 bg-dark text-white">
          <div
            className="position-absolute top-50 start-50 translate-middle text-white h-48 w-48 rounded-circle overflow-hidden"
            id={style.centercircle}
          >
            <div className="position-absolute top-50 start-50 translate-middle w-36 h-36 ">
              <div className="mt-4 relative w-full">
                <div className="absolute bg-dark w-full h-7 overflow-hidden rounded-lg"></div>
                <div
                  className="absolute bg-white w-full h-7 overflow-hidden rounded-lg"
                  style={{ width: `${progress}%` }}
                ></div>
                <div className="absolute text-dark w-full rounded-lg overflow-hidden">
                  <h1 className="text-lg w-full text-center">Welcome to the</h1>
                </div>
              </div>
              {ready === 1 && (
                <div>
                  <div className="d-flex justify-center items-center">
                    <div className="relative my-3 w-32 h-32 ">
                      <div className="absolute top-0 start-50 translate-middle">
                        <img
                          src="images/levels.png"
                          className="rotate-45 h-14"
                          id={style.mt}
                        />
                      </div>

                      <div className="absolute top-50 start-0 translate-middle">
                        <img
                          src="images/levels.png"
                          className="h-14"
                          id={style.ms}
                        />
                      </div>

                      <div className="position-absolute top-50 end-0">
                        <img
                          src="images/levels.png"
                          className="h-14"
                          id={style.me}
                        />
                      </div>

                      <div className="absolute top-100 start-50 translate-middle">
                        <img
                          src="images/levels.png"
                          className="h-14"
                          id={style.mb}
                        />
                      </div>
                    </div>
                    {time()}
                  </div>
                </div>
              )}
              {ready === 2 && (
                <div className="mt-20 d-flex justify-center items-center">
                  <h1 className="text-R-purple py-1 text-2xl w-full text-center">
                    R{" "}
                    <span className="text-R-white bg-R-purple px-2 rounded-md">
                      Creator
                    </span>
                  </h1>
                  {time()}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {toogleSidebar()}
          <div className="overflow-hidden">
            {window()}
            {header()}
            {sidebar()}
            {main()}
            {footer()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Intro;
