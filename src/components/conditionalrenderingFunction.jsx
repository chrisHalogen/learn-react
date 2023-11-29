import React from "react";

const ConditionalrenderingFunction = ({ isloggedin }) => {
  return isloggedin ? <p>Welcome User</p> : <p>Please Log in</p>;
};

export default ConditionalrenderingFunction;
