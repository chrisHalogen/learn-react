import React, { useEffect } from "react";

const LifeCyclefunction = () => {
  useEffect(() => {
    console.log("Component Is Mounted");
  }, []);

  return (
    <div>
      <h1>Functional Components with lifecycle methods</h1>
    </div>
  );
};

export default LifeCyclefunction;
