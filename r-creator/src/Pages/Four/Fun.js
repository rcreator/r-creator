import React, { useState } from "react";

function Fun() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function myFunction(e) {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  }

  return (
    <div>
      <div
        className="h-96 w-96 bg-dark relative"
        onMouseMove={(e) => myFunction(e)}
      >
        <div
          className="bg-danger p-1 rounded w-1 absolute"
          style={{
            marginLeft: x,
            marginTop: y,
          }}
        ></div>
      </div>

      <p>
        Cordinate{" "}
        <span>
          X : {x} Y: {y}
        </span>
      </p>
    </div>
  );
}

export default Fun;
