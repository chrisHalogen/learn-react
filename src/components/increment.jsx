import React, { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);
  let incrementHandler = () => {
    setCount(count + 1);
    console.log("Increment Successful");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementHandler}>Increment</button>
      <br />
      <br />
      <input
        type="text"
        name="demo"
        id="demo"
        onChange={(e) => console.log(e.target.value)}
      />
      <br />
      <br />
      <h1
        onMouseOver={() => console.log("Mouse is over element")}
        onMouseOut={() => console.log("Mouse is away from element")}
      >
        Hover On me
      </h1>
    </div>
  );
};

export default Increment;
