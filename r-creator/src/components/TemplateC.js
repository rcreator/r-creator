import React from "react";
import withAnim from "../Utils/Amination";

const TemplateC = (props) => (
  <div className="font-Poppins">
    {props.data}
    <h1 className="flex items-center text-R-purple py-1 text-3xl my-10 sm:text-5xl lg:text-7xl">
      R{" "}
      <span className="flex items-center text-R-white bg-R-purple px-7 py-4 ml-4 rounded-2xl">
        Creator
      </span>
    </h1>
  </div>
);

export default withAnim(TemplateC);
